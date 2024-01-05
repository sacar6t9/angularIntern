import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaformPComponent } from './raform-p.component';

describe('RaformPComponent', () => {
  let component: RaformPComponent;
  let fixture: ComponentFixture<RaformPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaformPComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaformPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
