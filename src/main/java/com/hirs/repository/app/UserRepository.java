package com.hirs.repository.app;

import com.hirs.model.app.User;
import com.hirs.model.app.VendorId;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Integer> {
    User getUserByUsername(String username);
}