package com.hirs.controller;

import com.hirs.model.app.User;
import com.hirs.service.SecurityService;
import com.hirs.service.UserService;
import com.hirs.service.impl.UserValidator;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.Map;

@Controller
public class UserController {
    @Autowired
    private UserService userService;

    @Autowired
    private SecurityService securityService;

    @Autowired
    private UserValidator userValidator;

    private static final Logger LOGGER = LoggerFactory.getLogger(UserController.class);

//    @RequestMapping(value = "/registration", method = RequestMethod.GET)
//    public String registration(Model model) {
//        model.addAttribute("userForm", new User());
//        return "registration";
//    }
//
//    @RequestMapping(value = "/registration", method = RequestMethod.POST)
//    public String registration(@ModelAttribute("userForm") User userForm, BindingResult bindingResult, Model model) {
//        userValidator.validate(userForm, bindingResult);
//        if (bindingResult.hasErrors()) {
//            return "registration";
//        }
//        userService.save(userForm);
//        securityService.autologin(userForm.getUsername(), userForm.getPasswordConfirm());
//        return "redirect:/main";
//    }
//
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String login(Model model, String error, String logout) {
        if (error != null)
            model.addAttribute("error", "Your username and password is invalid.");

        if (logout != null)
            model.addAttribute("message", "You have been logged out successfully.");

        return "login";
    }

    @RequestMapping(value = {"/main", "/"}, method = RequestMethod.GET)
    public String homePage(Model model) {
        LOGGER.info("main_page");
        return "main";
    }
}