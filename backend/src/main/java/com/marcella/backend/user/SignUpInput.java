package com.marcella.backend.user;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignUpInput {
    @NotBlank
    private String name;
    @NotBlank
    private String marcelPearlId;
    @NotBlank
    @Email
    private String email;
    @NotBlank
    private String password;
}
