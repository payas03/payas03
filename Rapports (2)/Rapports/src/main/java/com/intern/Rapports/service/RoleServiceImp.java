package com.intern.Rapports.service;

import com.intern.Rapports.Exception.ResourceNotFoundException;
import com.intern.Rapports.model.Role;
import com.intern.Rapports.Repositary.RoleRepositary;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class
RoleServiceImp {

    @Autowired
    private RoleRepositary roleRepositary;

    public List<Role> getAllRole() {
        return (List<Role>) roleRepositary.findAll();

    }
    public Role createRole(Role role) {
        role.setRole_id(roleRepositary.findMaxId() + 1);
        return roleRepositary.save(role);
    }

}
