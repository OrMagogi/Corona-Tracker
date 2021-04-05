import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutCoronaComponent } from './about-corona.component';

describe('AboutCoronaComponent', () => {
  let component: AboutCoronaComponent;
  let fixture: ComponentFixture<AboutCoronaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutCoronaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutCoronaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
