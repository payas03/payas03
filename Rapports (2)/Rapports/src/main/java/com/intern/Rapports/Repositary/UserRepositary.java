package com.intern.Rapports.Repositary;


//import com.intern.Rapports.model.Role;
import com.intern.Rapports.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
//import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface UserRepositary extends JpaRepository<User, Integer> {
    @Query(value = "select count(u.user_email) from User u where u.user_email = ?1", nativeQuery = true)
    public int existsByEmail(String mail);
    @Query(value = "select count(u.user_name) from User u where u.user_email = ?1 and u.user_name = ?2", nativeQuery = true)
    public int existsByName(String mail, String name);

    @Query(value = "select * from User u where u.user_email = ?1", nativeQuery = true)
    public List<User> findByEmail(String mail);

    @Query("select coalesce(max(a.user_id), 0) from User a")
    public Integer findMaxId();
}
