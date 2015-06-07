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
	public ArrayList communicate_user(){
		communications = this.communications;
		ArrayList al = new ArrayList();
//		System.out.print(communications);
		for(Communication comm : communications){
			al.add(comm.comm_with_user.email);
		}
		return al;
	}
	
	public static HashMap get_all_communications(){
		HashMap hm = new HashMap();
		List<User> users = User.find.all();
		for(User user:users){
			ArrayList al = new ArrayList();
			al = user.communicate_user();
			hm.put(user.email, al);
		}
		System.out.print(hm.get("user4@example.com"));
		return hm;
		
	}
}
