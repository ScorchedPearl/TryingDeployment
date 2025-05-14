package com.marcella.backend.components;

import com.marcella.backend.user.User;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "COMMENTS")
public class Comments {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String comment;

    private LocalDateTime createdAt;

    @ManyToOne
    private User user;

    @ManyToOne
    private Forums forum;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}
