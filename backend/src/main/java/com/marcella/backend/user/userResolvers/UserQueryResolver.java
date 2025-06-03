package com.marcella.backend.user.userResolvers;

import com.marcella.backend.user.User;
import com.marcella.backend.user.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.graphql.data.method.annotation.Argument;
import org.springframework.graphql.data.method.annotation.QueryMapping;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Controller;

@Controller
public class UserQueryResolver {
    private final UserRepository userRepository;

    @Autowired
    public UserQueryResolver(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @QueryMapping
    @PreAuthorize("isAuthenticated()")
    public User me(@AuthenticationPrincipal User currentUser) {
        return userRepository.findByMarcelPearlId(currentUser.getMarcelPearlId())
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }
    @QueryMapping
    @PreAuthorize("isAuthenticated()")
    public User userByMarcelPearlId(@Argument String marcelPearlId) {
        return userRepository.findByMarcelPearlId(marcelPearlId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + marcelPearlId));
    }
}
