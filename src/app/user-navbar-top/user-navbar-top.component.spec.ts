import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserNavbarTopComponent } from './user-navbar-top.component';

describe('UserNavbarTopComponent', () => {
  let component: UserNavbarTopComponent;
  let fixture: ComponentFixture<UserNavbarTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserNavbarTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserNavbarTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
