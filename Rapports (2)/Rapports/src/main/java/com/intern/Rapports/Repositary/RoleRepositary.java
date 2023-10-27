package com.intern.Rapports.Repositary;


import com.intern.Rapports.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
//import org.springframework.stereotype.Repository;
import java.util.List;

//@Repository
public interface RoleRepositary extends JpaRepository<Role , Integer> {


    @Query("select coalesce(max(a.role_id), 0) from Role a")
    public Integer findMaxId();


}
