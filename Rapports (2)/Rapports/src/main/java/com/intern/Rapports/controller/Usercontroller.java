package com.intern.Rapports.controller;
//import com.intern.Rapports.model.Role;
import com.intern.Rapports.model.Role;
import com.intern.Rapports.model.User;
//import com.intern.Rapports.service.UserService;
import com.intern.Rapports.service.UserServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import java.util.List;
@CrossOrigin("*")
@RestController
//@RequestMapping("/api/v1/user")

public class Usercontroller {

    @Autowired
    private UserServiceImp userServiceImp;

    @GetMapping("/getAllUser")
    public List<User> GetAllUser(){ return userServiceImp.getAllUser();}

    @PostMapping("/AddUser")
    public User CreateUser(@RequestBody User user) { return userServiceImp.createUser(user);}

    @PatchMapping ("/updateUser")
    public User updateUser(@RequestBody User u){
        return userServiceImp.updateUser(u);
    }


    @Transactional
    @PostMapping("/login")
    public String login(@RequestBody User u) {
        return userServiceImp.existsByEmailandPassword(u);
    }
}

