/*
 * Copyright 2002-2014 the original author or authors.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package com.example;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@SpringBootApplication
public class Main {

  public static void main(String[] args) throws Exception {
	  SpringApplication.run(Main.class, args);
  }

  	@RequestMapping("/message")
  	public String hello()
	{
  		String output = "";
  		try{  
  			Class.forName("com.mysql.jdbc.Driver");  
  			//Connection con=DriverManager.getConnection("jdbc:mysql://db4free.net:3307/entertainment","ashish29","ashish29");  
  			Connection con = DriverManager.getConnection("jdbc:mysql://db4free.net:3307/entertainment","ashish29","ashish29");
  			//here sonoo is database name, root is username and password  
  			Statement stmt=con.createStatement();  
  			ResultSet rs=stmt.executeQuery("select * from recipes");  
  			
  			while(rs.next())  
  			output = rs.getString("recipe_name"); 
  			//con.close();  
  			}catch(Exception e){ e.printStackTrace();}  
  			
		return output;
	}

}
