import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { College } from '../college';
import { CollegeServiceService } from '../college-service.service';

@Component({
  selector: 'app-add-college',
  templateUrl: './add-college.component.html',
  styleUrls: ['./add-college.component.css']
})
export class AddCollegeComponent implements OnInit {

  college:College=new College();
  submitted=false;

  constructor(private service:CollegeServiceService,private router:Router) { }

  ngOnInit(): void {
  }

  newCollege():void
  {
    this.submitted=false;
    this.college=new College();
  }

  save()
  {
    this.service
    .addCollege(this.college).subscribe(data => {
      console.log(data);
      this.college = new College();
      this.gotoList();
    }, 
    error => console.log(error));
    
  }

  onSubmit(){
    this.submitted=true;
    this.save();
  }

  gotoList()
  {
    this.router.navigate(['/colleges']);
  }
}
