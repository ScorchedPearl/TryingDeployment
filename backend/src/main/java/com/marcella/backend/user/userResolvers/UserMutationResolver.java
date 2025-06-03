package com.marcella.backend.user.userResolvers;

import com.marcella.backend.user.EditProfileInput;
import com.marcella.backend.user.SignInInput;
import com.marcella.backend.user.SignUpInput;
import com.marcella.backend.user.User;
import com.marcella.backend.user.auth.AuthPayload;
import com.marcella.backend.user.auth.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.MutationMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.stereotype.Controller;

@Controller
public class UserMutationResolver {
    private final AuthService authService;

    @Autowired
    public UserMutationResolver(AuthService authService) {
        this.authService = authService;
    }

    @MutationMapping
    public AuthPayload signUp(@Argument SignUpInput input) {
        return authService.signUp(input);
    }

    @MutationMapping
    public AuthPayload signIn(@Argument SignInInput input) {
        return authService.signIn(input);
    }

    @MutationMapping
    @PreAuthorize("isAuthenticated()")
    public User editProfile(@Argument EditProfileInput input, @AuthenticationPrincipal User currentUser) {
        return authService.editProfile(input,currentUser);
    }
    @MutationMapping
    public AuthPayload googleAuth(@Argument String token) {
        return authService.authenticateWithGoogle(token);
    }
}
