package com.marcella.backend.user.auth;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class GoogleUserDto {
    private String email;
    private String name;
    private String profilePicture;
}
