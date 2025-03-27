import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'translateCharacter',
  standalone: true
})
export class TranslateCharacterPipe implements PipeTransform {
  private translations: { [key: string]: { [key: string]: string } } = {
    status: {
      Alive: 'Vivo',
      Dead: 'Muerto',
      unknown: 'Desconocido'
    },
    species: {
      Human: 'Humano',
      Alien: 'Alienígena',
      Robot: 'Robot',
      unknown: 'Desconocido'
    },
    gender: {
      Male: 'Masculino',
      Female: 'Femenino',
      Genderless: 'Sin género',
      unknown: 'Desconocido'
    },
    location: {
      "Earth": 'Tierra',
      'Citadel of Ricks': 'Ciudadela de los Ricks',
      'unknown': 'Desconocida',
      'Earth (Replacement Dimension)': 'Tierra (Dimensión de reemplazo)',
      "Worldender's lair": "Guarida del Destructor Mundial",
      "Anatomy Park": "Parque de la Anatomía",
      "Immortality Field Resort": "Resort del Campo de Inmortalidad",
      "Interdimensional Cable": "Cable Interdimensional",
      "Post-Apocalyptic Earth": "Tierra Post-Apocalíptica",
      "Purge Planet": "Planeta de Purga",
      "Venzenulon 7": "Venzenulon 7",
      "Bepis 9": "Bepis 9",
      "Cronenberg Earth": "Tierra Cronenberg",
      "Nuptia 4": "Nuptia 4",
      "Giant's Town": "Ciudad de los Gigantes",
      "Bird World": "Mundo de las Aves",
      "Space station": "Estación Espacial",
      "Earth (5-126)": "Tierra (5-126)",
      "Mr. Goldenfold's dream": "Sueño de Mr. Goldenfold",
      "Testicle Monster Dimension": "Dimensión del Monstruo Testículo"
    },
    origin: {
      'Earth (C-137)': 'Tierra (C-137)',
      'Earth (Replacement Dimension)': 'Tierra (Dimensión de reemplazo)',
      'unknown': 'Desconocido'
    }
  };

  transform(value: string, category: 'status' | 'species' | 'gender' | 'location' | 'origin'): string {
    return this.translations[category]?.[value] || value;
  }
}
