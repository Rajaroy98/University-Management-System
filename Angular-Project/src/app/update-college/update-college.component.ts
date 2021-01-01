import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { error } from 'protractor';
import { College } from '../college';
import { CollegeServiceService } from '../college-service.service';

@Component({
  selector: 'app-update-college',
  templateUrl: './update-college.component.html',
  styleUrls: ['./update-college.component.css']
})
export class UpdateCollegeComponent implements OnInit {

  cid:String;
  college:College;

  constructor(private route:ActivatedRoute,private router:Router,private service:CollegeServiceService) { }

  ngOnInit(): void {
    this.college=new College();

    this.cid=this.route.snapshot.params['cid'];

    this.service.getCollege(this.cid).subscribe(data=>{console.log(data);this.college=data;},
    error=>console.log(error));
  }

  updateEmployee()
  {
    this.service.updateCollege(this.college)
      .subscribe(data => {
        console.log(data);
        this.college = data;
      }, error => console.log(error));
  }

  onSubmit()
  {
    this.updateEmployee();
  }
  gotoList()
  {
    this.router.navigate(['/colleges']);
  }
}
