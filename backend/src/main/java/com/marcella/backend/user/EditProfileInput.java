package com.marcella.backend.user;

import lombok.Data;

@Data
public class EditProfileInput {
    private String name;
    private String marcelPearlId;
    private String email;
    private String bio;
    private String profilePhoto;
    private String currentPassword;
    private String newPassword;
}
