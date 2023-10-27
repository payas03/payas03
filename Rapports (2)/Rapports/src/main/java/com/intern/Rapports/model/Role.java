package com.intern.Rapports.model;
import jakarta.persistence.*;


@Entity
@Table(name = "roles")
public class Role{

    @Id
     // @GeneratedValue(strategy  = GenerationType.IDENTITY)
    @Basic
    @Column(name= "role_id",nullable = false)
    private Integer role_id;
    @Column(name = "role_name")
    private String role_name;

    public Role(String role_name) {
        
        this.role_name = role_name;
    }
    public Role() {

    }

    public Integer getRole_id() {
        return role_id;
    }

    public void setRole_id(Integer role_id) {
        this.role_id = role_id;
    }

    public String getRole_name() {
        return role_name;
    }

    public void setRole_name(String role_name) {
        this.role_name = role_name;
    }
}
