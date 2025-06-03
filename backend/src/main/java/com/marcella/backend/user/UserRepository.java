package com.marcella.backend.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByMarcelPearlId(String marcelPearlId);

    Optional<User> findByName(String username);

    Optional<User> findByEmail(String email);

    boolean existsByMarcelPearlId(String marcelPearlId);
}
