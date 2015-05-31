package models;
import javax.persistence.*;

import play.db.ebean.*;
@Table(name="t_companies")
@Entity
public class Company extends Model{
	@Id
	public Long id;
	@OneToMany(mappedBy="company_id")
	public User user;
	
	public String name;
}
