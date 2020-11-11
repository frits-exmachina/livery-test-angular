import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveryTestComponent } from './livery-test.component';

describe('LiveryTestComponent', () => {
  let component: LiveryTestComponent;
  let fixture: ComponentFixture<LiveryTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveryTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveryTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
