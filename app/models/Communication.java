package models;

import javax.persistence.*;

import play.db.ebean.*;
@Table(name="t_comm_link", uniqueConstraints = {  @UniqueConstraint(columnNames = { "id", "user_id", "comm_user_id" }) })
@Entity
public class Communication extends Model{

	@Id
	public Long id;
	@ManyToOne
	@JoinColumn(name="user_id")
	public User user_id; 
	
	public Long comm_user_id;
}
