package com.intern.Rapports.controller;
import com.intern.Rapports.model.Role;
//import com.intern.Rapports.service.RoleService;
import com.intern.Rapports.service.RoleServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;

@CrossOrigin("*")
@RestController
//@RequestMapping("/api/v1/roles")


public class rolecontroller {
    @Autowired
    private RoleServiceImp roleServiceImp;

    @GetMapping("/getAllRole")
    public List<Role> GetAllRole(){
        return roleServiceImp.getAllRole();
    }

    // build create employee REST API
    @PostMapping("/AddRole")
    public Role CreateRole(@RequestBody Role role)
    {
        return roleServiceImp.createRole(role);
    }
}
