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
    @Column(name = "LOGIN", length = 95)
    private String login;
    @Column(name = "PASSWORD", length = 95)
    private String password;
    @Column(name = "TYPE", length = 45)
    @Enumerated(EnumType.STRING)
    private UserType type;
    @Column(name = "VENDOR_ID", length = 45)
    @Enumerated(EnumType.STRING)
    private VendorId vendorId;

    public User(String login, String password, UserType type, VendorId vendorId) {
        this.login = login;
        this.password = password;
        this.type = type;
        this.vendorId = vendorId;
    }

    public User() {
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
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

    public VendorId getVendorId() {
        return vendorId;
    }

    public void setVendorId(VendorId vendorId) {
        this.vendorId = vendorId;
    }
}
