import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RecruitedCharactersService } from '../../core/services/recruit.service';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-agentes-reclutados',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    NavbarComponent
  ],
  templateUrl: './agentes-reclutados.component.html',
  styleUrl: './agentes-reclutados.component.css'
})
export class AgentesReclutadosComponent {
  recruitedCharactersService = inject(RecruitedCharactersService);

  removeCharacter(characterId: number) {
    this.recruitedCharactersService.removeRecruitedCharacter(characterId);
  }

}
