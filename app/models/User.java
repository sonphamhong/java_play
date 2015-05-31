package models;

import java.util.*;

import javax.persistence.*;

import play.db.ebean.*;

@Entity
public class User extends Model{

	@Id
	public Long user_id;
	public String email;
	public String password;
	@ManyToOne
	public Company company;
	
	@OneToMany(mappedBy="user_id")
	public List<Communication> communications;
	
	public static Finder<String,User> find = new Finder<String,User>(
	        String.class, User.class
	    );
}
