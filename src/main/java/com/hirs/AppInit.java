package com.hirs;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.support.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(value = "com.hirs")
public class AppInit extends SpringBootServletInitializer {

    public static void main(String[] args) {
        SpringApplication.run(AppInit.class, args);
    }
}
