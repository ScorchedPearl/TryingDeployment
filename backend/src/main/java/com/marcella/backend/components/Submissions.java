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
@Table(name = "SUBMISSIONS")
public class Submissions {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String submittedCode;

    private int beats=0;

    @ManyToOne
    @JoinColumn(
            name = "user_id",nullable = false
    )
    private User user;

    @ManyToOne
    @JoinColumn(
            name = "problem_id",nullable = false
    )
    private Problems problem;

    @ManyToOne
    @JoinColumn(
            name = "language_id",nullable = false
    )
    private Languages language;

    private LocalDateTime createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = LocalDateTime.now();
    }
}
