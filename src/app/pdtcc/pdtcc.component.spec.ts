import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdtccComponent } from './pdtcc.component';

describe('PdtccComponent', () => {
  let component: PdtccComponent;
  let fixture: ComponentFixture<PdtccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PdtccComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PdtccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
