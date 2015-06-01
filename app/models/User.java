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
	
	@OneToMany(mappedBy="user_comm")
	public List<Communication> communications;
	
	public static Finder<String,User> find = new Finder<String,User>(
	        String.class, User.class
	    );
	public void communicate_user(){
		communications = this.communications;
		System.out.print(communications);
		for(Communication comm : communications){
			System.out.print(comm.comm_with_user.email);
		}
	}
}
