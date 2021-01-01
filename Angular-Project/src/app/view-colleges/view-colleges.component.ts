import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { College } from '../college';
import { CollegeServiceService } from '../college-service.service';

@Component({
  selector: 'app-view-colleges',
  templateUrl: './view-colleges.component.html',
  styleUrls: ['./view-colleges.component.css']
})
export class ViewCollegesComponent implements OnInit {

  college:any;

  constructor(private service:CollegeServiceService,private router:Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData()
  {
    this.service.getCollegeList().subscribe(data=>{this.college=data;console.log(this.college)});
  }

  deleteCollege(cid:String)
  {
    this.service.deleteCollege(cid).subscribe(data=>{console.log(data);this.reloadData();},
    error=>console.log(error));
    window.location.reload();
  }

  updateCollege(cid:String)
  {
    this.router.navigate(['/update',cid]);
  }
}
