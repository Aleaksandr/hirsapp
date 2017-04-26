package com.hirs.repository.app;

import com.hirs.model.app.AdminKeyType;
import com.hirs.model.app.AdministrationValue;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdministrationRepository extends JpaRepository<AdministrationValue, AdminKeyType> {

    AdministrationValue findByAdminKeyType(AdminKeyType adminKeyType);
}