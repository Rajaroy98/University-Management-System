package com.example.BUProject;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UniDAO {

	@Autowired
	Unirepo repo;
	
	public List<Uniname> getColleges()
	{
		return repo.findAll();
	}
	
	public Optional<Uniname> getCollegeById(String id)
	{
		return repo.findById(id);
	}
	
	public String addCollege(Uniname uni)
	{
		repo.save(uni);
		return "Added";
	}
	
	public String delCollege(String id)
	{
		repo.deleteById(id);
		return "Deleted";
	}
	
	public String update(Uniname uni)
	{
		Uniname existing=repo.findById(uni.getCid()).orElse(null);
		existing.setCid(uni.getCid());
		existing.setCname(uni.getCname());
		existing.setCtype(uni.getCtype());
		existing.setLocation(uni.getLocation());
		repo.save(existing);
		return "Updated";
	}
}
