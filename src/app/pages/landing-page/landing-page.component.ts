import { Component, OnInit, inject, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../../core/services/api.service';
import { RecruitedCharactersService } from '../../core/services/recruit.service';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    NavbarComponent,
    MatCardModule,
    RouterModule,
    NgFor,
    NgIf
  ],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {
  apiService = inject(ApiService);
  recruitedCharactersService = inject(RecruitedCharactersService);

  ngOnInit() {
    this.apiService.getCharacters();
  }

  recruitCharacter(character: any) {
    this.recruitedCharactersService.recruitCharacter({
      id: character.id,
      name: character.name,
      image: character.image,
      status: character.status,
      species: character.species
    });
  }

  isCharacterRecruited(characterId: number): boolean {
    return this.recruitedCharactersService
      .recruitedCharacters()
      .some(char => char.id === characterId);
  }

 
  removeRecruitedCharacter(characterId: number) {
    this.recruitedCharactersService.removeRecruitedCharacter(characterId);
  }
}