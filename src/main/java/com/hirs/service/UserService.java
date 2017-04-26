package com.hirs.service;

import com.hirs.model.app.User;
import com.hirs.model.app.VendorId;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    User getUserByLogin(String login);
    List<VendorId> getRegisteredVendorIds();
}