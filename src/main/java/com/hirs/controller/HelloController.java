package com.hirs.controller;

import com.hirs.model.app.AdminKeyType;
import com.hirs.service.AdministrationService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CookieValue;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class HelloController {

    @Autowired
    AdministrationService administrationService;

    private final static String NO_COOKIE = "no_value";
    private static final Logger LOGGER = LoggerFactory.getLogger(HelloController.class);

//    @RequestMapping(value = "/login", method = RequestMethod.GET)
//    public String loginPage(@RequestParam(value = "error", required = false) String error,
//                            @RequestParam(value = "logout", required = false) String logout,
//                            Model model) {
//        if (error != null) model.addAttribute("error", "Invalid username or password!");
//        if (logout != null) model.addAttribute("message", "You've been logged out successfully.");
//        return "login";
//    }
//
//    @RequestMapping(value = { "/index", "/" }, method = RequestMethod.GET)
//    public String indexPage(Model model, @CookieValue( value = "remember-me", defaultValue = NO_COOKIE) String rememberMe) {
//        LOGGER.info("index page...");
//        return "index";
//    }
}
