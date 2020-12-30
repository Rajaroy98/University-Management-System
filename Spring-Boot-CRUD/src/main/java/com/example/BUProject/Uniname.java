package com.example.BUProject;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Uniname {
	
	@Id
	private String cid;
	private String cname;
	private String ctype;
	private String location;
	
	public Uniname() {}
	
	public Uniname(String cid, String cname, String ctype, String location) {
		super();
		this.cid = cid;
		this.cname = cname;
		this.ctype = ctype;
		this.location = location;
	}

	public String getCid() {
		return cid;
	}

	public void setCid(String cid) {
		this.cid = cid;
	}

	public String getCname() {
		return cname;
	}

	public void setCname(String cname) {
		this.cname = cname;
	}

	public String getCtype() {
		return ctype;
	}

	public void setCtype(String ctype) {
		this.ctype = ctype;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}
}
