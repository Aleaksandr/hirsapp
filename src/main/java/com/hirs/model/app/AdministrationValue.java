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
}