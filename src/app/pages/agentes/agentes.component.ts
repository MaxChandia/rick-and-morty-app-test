import { Component, OnInit, inject, computed, signal, effect } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { ApiService } from '../../core/services/api.service';
import { RecruitedCharactersService } from '../../core/services/recruit.service';
import { NgFor, NgIf } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatBadgeModule } from '@angular/material/badge';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TranslateCharacterPipe } from '../../shared/pipes/translated.character';

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
    NgIf,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    MatBadgeModule,
    TranslateCharacterPipe
  ],
  templateUrl: './agentes.component.html',
  styleUrl: './agentes.component.css'
})
export class AgentesComponent implements OnInit {
  apiService = inject(ApiService);
  recruitedCharactersService = inject(RecruitedCharactersService);

  searchName = signal('');
  selectedStatus = signal('');
  selectedSpecies = signal('');

  pageSize = 12;
  pageIndex = signal(0);
  totalCharacters = signal(0);

  filteredCharacters = computed(() => {
    const characters = this.apiService.characters();
    return characters.filter(character => 
      (this.searchName() === '' || 
       character.name.toLowerCase().includes(this.searchName().toLowerCase())) &&
      (this.selectedStatus() === '' || character.status === this.selectedStatus()) &&
      (this.selectedSpecies() === '' || character.species === this.selectedSpecies())
    );
  });

  paginatedCharacters = computed(() => {
    const startIndex = this.pageIndex() * this.pageSize;
    const characters = this.filteredCharacters();
    return characters.slice(startIndex, startIndex + this.pageSize);
  });

  constructor(private snackBar: MatSnackBar) {
    effect(() => {
      const characters = this.filteredCharacters();
      this.totalCharacters.set(characters.length);
    }, { allowSignalWrites: true });
  }

  uniqueStatuses = computed(() => {
    const characters = this.apiService.characters();
    return [...new Set(characters.map(char => char.status))];
  });


  uniqueSpecies = computed(() => {
    const characters = this.apiService.characters();
    return [...new Set(characters.map(char => char.species))];
  });

  ngOnInit() {
    this.apiService.getCharacters();
  }

  onPageChange(event: PageEvent) {
    this.pageIndex.set(event.pageIndex);
  }

  updateFilter(filterType: 'name' | 'status' | 'species', value: string) {
    this.pageIndex.set(0);
    switch(filterType) {
      case 'name':
        this.searchName.set(value);
        break;
      case 'status':
        this.selectedStatus.set(value);
        break;
      case 'species':
        this.selectedSpecies.set(value);
        break;
    }
  }

  recruitCharacter(character: any) {
    const recruitedCount = this.recruitedCharactersService.recruitedCharacters().length;
  
    if (recruitedCount >= 8) {
      this.showSnackBar("Equipo completo", "Cerrar");
      return;
    }
  
    if (character.status === "Dead") {
      this.showSnackBar("Recluta fallecido. No puede ingresar al equipo.", "Cerrar");
      return;
    }
  
    if (character.status === "unknown") {
      this.showSnackBar("No se pudo contactar al recluta.", "Cerrar");
      return;
    }
  
    this.recruitedCharactersService.recruitCharacter({
      id: character.id,
      name: character.name,
      image: character.image,
      status: character.status,
      species: character.species
    });
  
    this.showSnackBar("Agente reclutado", "Cerrar");
  }

  showSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000, // 3 segundos
      horizontalPosition: 'center',
      verticalPosition: 'top',
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

  reloadCharacters() {
    this.searchName.set('');
    this.selectedStatus.set('');
    this.selectedSpecies.set('');
    this.pageIndex.set(0);
    this.apiService.reloadCharacters();
  }
}