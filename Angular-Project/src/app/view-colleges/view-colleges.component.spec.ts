import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewCollegesComponent } from './view-colleges.component';

describe('ViewCollegesComponent', () => {
  let component: ViewCollegesComponent;
  let fixture: ComponentFixture<ViewCollegesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewCollegesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewCollegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
