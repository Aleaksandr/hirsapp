package com.hirs.service;

import com.hirs.model.app.AdminKeyType;
import com.hirs.model.app.AdministrationValue;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;


public interface AdministrationService {

    AdministrationValue findByAdminKeyType(AdminKeyType adminKeyType);

    @Transactional(readOnly = true, transactionManager = "appTransactionManager")
    List<AdministrationValue> findAll();

    void update(AdministrationValue administrationValue);

    void update(AdminKeyType key, String value);
}