import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCollegeComponent } from './add-college/add-college.component';
import { UpdateCollegeComponent } from './update-college/update-college.component';
import { ViewCollegesComponent } from './view-colleges/view-colleges.component';

const routes: Routes = [
  {path:'colleges', component:ViewCollegesComponent},
  {path:'add', component:AddCollegeComponent},
  {path:'update/:cid',component:UpdateCollegeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
