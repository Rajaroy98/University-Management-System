import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCollegeComponent } from './add-college/add-college.component';
import { ViewCollegesComponent } from './view-colleges/view-colleges.component';
import { UpdateCollegeComponent } from './update-college/update-college.component';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddCollegeComponent,
    ViewCollegesComponent,
    UpdateCollegeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
