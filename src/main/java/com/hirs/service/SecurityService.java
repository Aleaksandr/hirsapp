package com.hirs.service;

import com.hirs.model.app.User;
import org.springframework.security.core.userdetails.UserDetailsService;

public interface SecurityService {
    String findLoggedInUsername();
    void autologin(String username, String password);
}