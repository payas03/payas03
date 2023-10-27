package com.intern.Rapports;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;


public class Test {


    public static void main (String args[]) {

        String url = "jdbc:mysql://localhost:3306/rapports";
        String user = "root";
        String password = "Payas7865@";

        try {
            Class.forName("com.mysql.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, user, password);
            System.out.println("Connection is Successful to the database" + url);
            String query = "Insert into roles(role_id,role_name)values('8','Student')";
            Statement statement = connection.createStatement();
            statement.execute(query);


        } catch (ClassNotFoundException e) {
            e.printStackTrace();
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
    }
    }
