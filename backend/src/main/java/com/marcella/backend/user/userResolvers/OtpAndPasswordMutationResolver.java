package com.marcella.backend.user.userResolvers;

import com.marcella.backend.user.auth.AuthService;
import com.marcella.backend.user.auth.ForgotPasswordRequest;
import com.marcella.backend.user.auth.OtpRequest;
import com.marcella.backend.user.auth.ResetPasswordRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.stereotype.Controller;

@Controller
@RequiredArgsConstructor
public class OtpAndPasswordMutationResolver {
    private final AuthService authService;

    @MutationMapping
    public Boolean otpVerification(@Argument OtpRequest request) {
        return authService.otpValidate(request);
    }

    @MutationMapping
    public String forgotPassword(@Argument ForgotPasswordRequest request) {
        authService.forgotPassword(request);
        return "Reset link sent to your email.";
    }

    @MutationMapping
    public String resetPassword(@Argument ResetPasswordRequest request) {
        authService.resetPassword(request);
        return "Password reset successful.";
    }
}
