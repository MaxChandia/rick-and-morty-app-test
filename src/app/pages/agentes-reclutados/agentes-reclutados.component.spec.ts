import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentesReclutadosComponent } from './agentes-reclutados.component';

describe('AgentesReclutadosComponent', () => {
  let component: AgentesReclutadosComponent;
  let fixture: ComponentFixture<AgentesReclutadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AgentesReclutadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AgentesReclutadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
