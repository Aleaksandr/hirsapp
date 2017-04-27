package com.hirs.model.app;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "ADMINISTRATION")
public class AdministrationValue implements Serializable {

    private static final long serialVersionUID = 3725576583607152151L;
    @Id
    @Column(name = "ADM_KEY", unique = true, nullable = false)
    @Enumerated(EnumType.STRING)
    private AdminKeyType adminKeyType;
    @Column(name = "VALUE")
    private String value;

    public AdministrationValue(AdminKeyType adminKeyType, String value) {
        this.adminKeyType = adminKeyType;
        this.value = value;
    }

    public AdministrationValue() {
    }

    public AdminKeyType getAdminKeyType() {
        return adminKeyType;
    }

    public void setAdminKeyType(AdminKeyType adminKeyType) {
        this.adminKeyType = adminKeyType;
    }

    public String getValue() {
        return value;
    }

    public void setValue(String value) {
        this.value = value;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        AdministrationValue that = (AdministrationValue) o;

        if (adminKeyType != that.adminKeyType) return false;
        return value != null ? value.equals(that.value) : that.value == null;
    }

    @Override
    public int hashCode() {
        int result = adminKeyType != null ? adminKeyType.hashCode() : 0;
        result = 31 * result + (value != null ? value.hashCode() : 0);
        return result;
    }
}