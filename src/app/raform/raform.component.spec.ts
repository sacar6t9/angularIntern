import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaformComponent } from './raform.component';

describe('RaformComponent', () => {
  let component: RaformComponent;
  let fixture: ComponentFixture<RaformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RaformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RaformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
