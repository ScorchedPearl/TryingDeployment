package com.marcella.backend.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByMarcelPearlId(String marcelPearlId);

    Optional<User> findByUsername(String username);

    Optional<User> findByEmail(String email);
}
