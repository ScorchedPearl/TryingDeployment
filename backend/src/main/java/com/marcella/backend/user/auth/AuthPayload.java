package com.marcella.backend.user.auth;

import com.marcella.backend.user.User;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AuthPayload {
    private User user;
    private String token;
}
