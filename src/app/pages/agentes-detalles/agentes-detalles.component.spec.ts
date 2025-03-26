import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentesDetallesComponent } from './agentes-detalles.component';

describe('AgentesDetallesComponent', () => {
  let component: AgentesDetallesComponent;
  let fixture: ComponentFixture<AgentesDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentesDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentesDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
