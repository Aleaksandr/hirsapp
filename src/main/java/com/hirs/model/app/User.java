package com.hirs.model.app;


import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "USER")
public class User implements Serializable {
    private static final long serialVersionUID = 6147177658948182661L;
    @Id
    @GeneratedValue
    @Column(name = "ID")
    private Integer id;
    @Column(name = "USER_NAME", length = 95)
    private String username;
    @Column(name = "PASSWORD", length = 95)
    private String password;
    @Column(name = "PASSWORD_CONFIRM", length = 95)
    private String passwordConfirm;;
    @Column(name = "TYPE", length = 45)
    @Enumerated(EnumType.STRING)
    private UserType type;

    public User(String username, String password, String passwordConfirm, UserType type) {
        this.username = username;
        this.password = password;
        this.passwordConfirm = passwordConfirm;
        this.type = type;
    }

    public User() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public UserType getType() {
        return type;
    }

    public void setType(UserType type) {
        this.type = type;
    }

    public String getPasswordConfirm() {
        return passwordConfirm;
    }

    public void setPasswordConfirm(String passwordConfirm) {
        this.passwordConfirm = passwordConfirm;
    }
}
