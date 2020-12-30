package com.example.BUProject;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@CrossOrigin(origins="http://localhost:4200")
public class MyController {

	@Autowired
	UniDAO getter;
	
	@RequestMapping("/getColleges")
	public List<Uniname> getAll()
	{
		return getter.getColleges();
	}
	@RequestMapping("/getById/{id}")
	public Optional<Uniname> getById(@PathVariable String id)
	{
		return getter.getCollegeById(id);
	}
	@PostMapping("/addCollege")
	public String addCollege(@RequestBody Uniname uni)
	{
		return getter.addCollege(uni);
	}
	
	@DeleteMapping("/delCollege/{id}")
	public String delCollege(@PathVariable String id)
	{
		return getter.delCollege(id);
	}
	
	@PutMapping("/update")
	public String updateCollege(@RequestBody Uniname uni)
	{
		return getter.update(uni);
	}
}
