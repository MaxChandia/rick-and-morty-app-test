import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { signal } from '@angular/core';
import { Character, CharacterResponse } from '../models/character.models';
import { Observable, forkJoin } from 'rxjs';
import { map, catchError, mergeMap } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private http = inject(HttpClient);
  private readonly BASE_URL = 'https://rickandmortyapi.com/api/character';

  characters = signal<Character[]>([]);
  loading = signal<boolean>(false);
  error = signal<string | null>(null);

  private isAllLoaded = false;

  getCharacters(reset: boolean = false) {
    if (reset || this.characters().length === 0) {
      this.loading.set(true);
      this.error.set(null);

      this.fetchAllCharacters().subscribe({
        next: (allCharacters) => {
          this.characters.set(allCharacters);
          this.isAllLoaded = true;
          this.loading.set(false);
        },
        error: (err) => {
          this.error.set('Error al cargar personajes');
          this.loading.set(false);
          console.error('Error:', err);
        }
      });
    }
  }

  private fetchAllCharacters(): Observable<Character[]> {
    return this.http.get<CharacterResponse>(`${this.BASE_URL}`).pipe(
      mergeMap(initialResponse => {
        const totalPages = initialResponse.info.pages;
        
        const pageRequests = Array.from(
          { length: totalPages }, 
          (_, i) => this.fetchCharacters(i + 1)
        );

        return forkJoin(pageRequests).pipe(
          map(responses => 
            responses.reduce((acc, response) => [...acc, ...response.results], [] as Character[])
          )
        );
      }),
      catchError(error => {
        console.error('Error fetching all characters', error);
        throw error;
      })
    );
  }

  private fetchCharacters(page: number): Observable<CharacterResponse> {
    return this.http.get<CharacterResponse>(`${this.BASE_URL}?page=${page}`);
  }

  reloadCharacters() {
    this.getCharacters(true);
  }

  getCharacterById(id: string) {
    return this.http.get<Character>(`${this.BASE_URL}/${id}`);
  }

  get isFullyLoaded(): boolean {
    return this.isAllLoaded;
  }
}