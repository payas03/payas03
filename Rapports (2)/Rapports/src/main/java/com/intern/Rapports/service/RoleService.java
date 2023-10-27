package com.intern.Rapports.service;

import com.intern.Rapports.model.Role;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public interface RoleService {
    Role saveRole(Role role_info);

    List<Role> getAllRole();

    Optional<Role> getRoleById(Integer role_id);

    List<Role> getAllRoles();

    void deleteRole(Integer role_id);

    Role updateRole(Integer role_id, Role updatedRole);

    Role createRole(Role role);
}