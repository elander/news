import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfounComponent } from './notfoun.component';

describe('NotfounComponent', () => {
  let component: NotfounComponent;
  let fixture: ComponentFixture<NotfounComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotfounComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotfounComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
