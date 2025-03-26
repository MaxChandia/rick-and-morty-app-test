import { Injectable, signal } from '@angular/core';

export interface RecruitedCharacter {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
}

@Injectable({
  providedIn: 'root'
})
export class RecruitedCharactersService {
  private _recruitedCharacters = signal<RecruitedCharacter[]>([]);
  recruitedCharacters = this._recruitedCharacters.asReadonly();

  recruitCharacter(character: RecruitedCharacter) {
    const isAlreadyRecruited = this._recruitedCharacters().some(c => c.id === character.id);
    
    if (!isAlreadyRecruited) {
      this._recruitedCharacters.update(chars => [...chars, character]);
    }
  }

  removeRecruitedCharacter(characterId: number) {
    this._recruitedCharacters.update(chars => 
      chars.filter(char => char.id !== characterId)
    );
  }

  getRecruitedCount() {
    return this._recruitedCharacters().length;
  }
}