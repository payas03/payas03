package com.intern.Rapports.model;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.Date;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "user")
public class User {

    @Id
    @Basic
    private Integer user_id;
    private String user_name;
    private String user_email;
//    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm:ss")
//    private LocalDateTime user_reg;
    private Date user_reg;
    private Integer role_id;
//
//    public void setUser_id(Integer user_id) {
//        this.user_id = user_id;
//    }
//
//    public void setUser_name(String user_name) {
//        this.user_name = user_name;
//    }
//
//    public void setUser_email(String user_email) {
//        this.user_email = user_email;
//    }
//
//    public void setUser_reg(Date user_reg) {
//        this.user_reg = user_reg;
//    }
//
//    public void setRole_id(Integer role_id) {
//        this.role_id = role_id;
//    }
//
//    public User(String user_name) {
//        this.user_name = user_name;
//    }
//
//    public User(Integer user_id, String user_name, String user_email, Date user_reg, Integer role_id) {
//        this.user_id = user_id;
//        this.user_name = user_name;
//        this.user_email = user_email;
//        this.user_reg = user_reg;
//        this.role_id = role_id;
//    }
//
//    public  User() {
//
//    }
}




