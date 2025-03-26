import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ApiService } from '../../core/services/api.service';
import { RecruitedCharactersService } from '../../core/services/recruit.service';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Character } from '../../core/models/character.models';
import { RouterModule } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-agentes-detalles',
  standalone: true,
  imports: [
    CommonModule, 
    NavbarComponent,
    MatCardModule,
    MatButtonModule,
    RouterModule,
    MatGridListModule,
    MatIconModule
  ],
  templateUrl: './agentes-detalles.component.html',
  styleUrls: ['./agentes-detalles.component.css']
})
export class AgentesDetallesComponent implements OnInit {
  character!: Character;
  isRecruited: boolean = false;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService,
    private recruitedService: RecruitedCharactersService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.apiService.getCharacterById(id).subscribe((data) => {
        this.character = data;
        this.isRecruited = this.recruitedService.recruitedCharacters()
          .some(c => c.id === parseInt(id));
      });
    }
  }

  recruitCharacter() {
    if (this.character) {
      this.recruitedService.recruitCharacter({
        id: this.character.id,
        name: this.character.name,
        image: this.character.image,
        status: this.character.status,
        species: this.character.species
      });
      this.isRecruited = true;
    }
  }

  removeRecruitedCharacter() {
    if (this.character) {
      this.recruitedService.removeRecruitedCharacter(this.character.id);
      this.isRecruited = false;
    }
  }
}