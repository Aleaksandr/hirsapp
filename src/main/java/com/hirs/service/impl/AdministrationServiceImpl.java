package com.hirs.service.impl;

import com.hirs.model.app.AdminKeyType;
import com.hirs.model.app.AdministrationValue;
import com.hirs.repository.app.AdministrationRepository;
import com.hirs.service.AdministrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdministrationServiceImpl implements AdministrationService {

    @Autowired
    private AdministrationRepository administrationRepository;

    @Override
    public AdministrationValue findByAdminKeyType(AdminKeyType adminKeyType) {
        return administrationRepository.findByAdminKeyType(adminKeyType);
    }

    @Override
    public List<AdministrationValue> findAll() {
        return administrationRepository.findAll();
    }

    @Override
    public void update(AdministrationValue administrationValue) {
        administrationRepository.save(administrationValue);
    }

    @Override
    public void update(AdminKeyType admKey, String value) {
        AdministrationValue administrationValue = new AdministrationValue(admKey, value);
        administrationRepository.save(administrationValue);
    }
}