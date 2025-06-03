package com.marcella.backend.user.auth;

import com.marcella.backend.user.*;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.TimeUnit;

@Service
@RequiredArgsConstructor
public class AuthService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final JwtService jwtService;
    private final EmailService emailService;
    private final GoogleAuthService googleAuthService;
    private final ConcurrentHashMap<String, String> resetTokenStore = new ConcurrentHashMap<>();
    private final ConcurrentHashMap<String, Long> resetTokenExpiry = new ConcurrentHashMap<>();

    public AuthPayload signUp(SignUpInput input) {
        if(userRepository.existsByMarcelPearlId(input.getMarcelPearlId())){
            throw new RuntimeException("User already exists");
        }
        User user = User.builder()
                .name(input.getName())
                .marcelPearlId(input.getMarcelPearlId())
                .email(input.getEmail())
                .password(passwordEncoder.encode(input.getPassword()))
                .role(Role.USER)
                .build();
        userRepository.save(user);
        String token=jwtService.generateToken(user.getMarcelPearlId());
        return new AuthPayload(user,token);
    }

    public AuthPayload signIn(SignInInput input) {
        User user=userRepository.findByMarcelPearlId(input.getMarcelPearlId())
                .orElseThrow(() -> new RuntimeException("User not found"));
        if(!passwordEncoder.matches(input.getPassword(), user.getPassword())){
            throw new RuntimeException("Wrong password");
        }
        String token=jwtService.generateToken(user.getMarcelPearlId());
        return new AuthPayload(user,token);
    }

    public User editProfile(EditProfileInput input, User currentUser) {
        if(input.getName()!=null) currentUser.setName(input.getName());
        if(input.getMarcelPearlId()!=null) currentUser.setMarcelPearlId(input.getMarcelPearlId());
        if(input.getEmail()!=null) currentUser.setEmail(input.getEmail());
        if(input.getBio()!=null) currentUser.setBio(input.getBio());
        if(input.getProfilePhoto()!=null) currentUser.setProfilePhoto(input.getProfilePhoto());

        if(input.getNewPassword()!=null) {
            if(!passwordEncoder.matches(input.getCurrentPassword(), currentUser.getPassword())) {
                throw new RuntimeException("Current password is incorrect");
            }
            currentUser.setPassword(passwordEncoder.encode(input.getNewPassword()));
        }
        System.out.println("done");
        return userRepository.save(currentUser);
    }

    public Boolean otpValidate(OtpRequest request) {
        String email = request.getEmail();
        String otp = request.getOtp();
        String subject = "OTP Verification";
        return emailService.sendEmail(email, subject, otp);
    }

    public void forgotPassword(ForgotPasswordRequest request) {
        Optional<User> userOpt = userRepository.findByEmail(request.getEmail());
        if(userOpt.isEmpty()) {
            throw new RuntimeException("User with this email does not exist.");
        }

        User user = userOpt.get();
        String resetToken = UUID.randomUUID().toString();

        resetTokenStore.put(resetToken, user.getEmail());
        resetTokenExpiry.put(resetToken, System.currentTimeMillis() + TimeUnit.HOURS.toMillis(1));

        String resetLink = "http://localhost:3000/reset-password?token=" + resetToken;
        String subject = "Password Reset Request";
        String body = "To reset your password, click the link below:\n" + resetLink;

        emailService.sendEmail(user.getEmail(), subject, body);
    }

    public void resetPassword(ResetPasswordRequest request){
        String token = request.getToken();
        String email = resetTokenStore.get(token);

        if (email == null || resetTokenExpiry.get(token) < System.currentTimeMillis()) {
            throw new RuntimeException("Invalid or expired token");
        }

        Optional<User> userOpt = userRepository.findByEmail(email);
        if (userOpt.isEmpty()) {
            throw new RuntimeException("User not found");
        }

        User user = userOpt.get();
        user.setPassword(passwordEncoder.encode(request.getNewPassword()));
        userRepository.save(user);

        resetTokenStore.remove(token);
        resetTokenExpiry.remove(token);
    }

    public AuthPayload authenticateWithGoogle(String token) {
        GoogleUserDto googleUser = googleAuthService.getGoogleUserInfo(token);
        User user = userRepository.findByEmail(googleUser.getEmail())
                .orElseGet(() -> {
                    User newUser = User.builder()
                            .marcelPearlId(UUID.randomUUID().toString())
                            .name(googleUser.getName())
                            .email(googleUser.getEmail())
                            .password(passwordEncoder.encode(UUID.randomUUID().toString()))
                            .profilePhoto(googleUser.getProfilePicture())
                            .role(Role.USER)
                            .build();
                    return userRepository.save(newUser);
                });

        String jwt = jwtService.generateToken(user.getMarcelPearlId());
        return new AuthPayload(user, jwt);
    }
}
