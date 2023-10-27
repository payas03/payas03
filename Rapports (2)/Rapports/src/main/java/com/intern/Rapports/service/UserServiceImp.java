package com.intern.Rapports.service;
import com.intern.Rapports.Exception.ResourceNotFoundException;
import com.intern.Rapports.Repositary.UserRepositary;
import com.intern.Rapports.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.Optional;


@Service
public class UserServiceImp {

    @Autowired
    private UserRepositary userRepositary;

     public List<User>getAllUser() { return (List<User>)userRepositary.findAll(); }

     public User createUser (User user){
       user.setUser_id(userRepositary.findMaxId() + 1);
            return userRepositary.save(user);
        }

    public User updateUser(User u) {
        Optional<User> optionalUser = userRepositary.findById(u.getUser_id());
        if (optionalUser.isPresent()){
            User userRecord = optionalUser.get();
            userRecord.setUser_email(u.getUser_email());
//            userRecord.setStatus(StringUtils.defaultIfBlank(s.getStatus(), houseRecord.getStatus()));
            return userRepositary.save(userRecord);
        }
        else{
            return null;
        }
    }

    public String existsByEmailandPassword(User u) {
        if (userRepositary.existsByEmail(u.getUser_email()) > 0 ) {
            if (userRepositary.existsByName(u.getUser_email(), u.getUser_name()) > 0) {

                List<User> user1 = userRepositary.findByEmail(u.getUser_email());

                System.out.println(user1.toString());

                return "{ \"1\" : \"Logged in successfully\"}";
            }
            return "{ \"2\" : \"incorrect password\"}";
        }
        return "{ \"3\" : \"Email Id does not exist ;\"}" ;
    }
}






