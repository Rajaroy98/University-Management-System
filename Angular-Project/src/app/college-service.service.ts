import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CollegeServiceService {

  private baseUrl="http://localhost:9191";

  constructor(private http:HttpClient) { }

  getCollege(cid:String):any
  {
    return this.http.get(`${this.baseUrl}/getById/${cid}`);
  }

  addCollege(college:Object):any
  {
    return this.http.post(`${this.baseUrl}/addCollege`,college);
  }

  updateCollege(college:Object):any
  {
    return this.http.put(`${this.baseUrl}/update`,college);
  }

  deleteCollege(cid:String):any
  {
    return this.http.delete(`${this.baseUrl}/delCollege/${cid}`);
  }

  getCollegeList():any
  {
    return this.http.get("http://localhost:9191/getColleges");
  }
}
