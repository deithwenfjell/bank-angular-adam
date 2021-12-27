import { Injectable } from '@angular/core';
import { Klient } from './klient';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class KlientService {



  klienti: Klient[] = [
    {
      id: 1,
      titulPred: 'Mgr.',
      meno: 'Fero',
      priezvisko: 'Mrkva',
      titulZa: 'PhD.',
      trvalyPobyt: 'random ulica 666/21, random mesto',
      korespondencnaAdresa: 'random ulica 666/21, random mesto',
      fotka: 'PLACEHOLDER FOTKY'
    },
    {
      id: 2,
      titulPred: '',
      meno: 'Jožo',
      priezvisko: 'Lopata',
      titulZa: '',
      trvalyPobyt: 'Temná ulica 666/21, Osgiliath',
      korespondencnaAdresa: 'Sauronova ulica 666/21, Mordor',
      fotka: 'PLACEHOLDER FOTKY'
    }
  ];

constructor() { }

vratKlientov(): Observable<Klient[]> {
  return of(this.klienti);
}

vratKlienta(id: string | null): Observable<Klient | undefined >{
  let convertedId: number;
  if (typeof id == "string") {
    convertedId = +id;
  }
  console.log('vratKlienta service call - ' + id + convertedId! )
  const klienti = this.vratKlientov();
  const vybranyKlient = klienti.pipe(map((klienti: Klient[]) => klienti.find(klient => klient.id === convertedId)));

  return vybranyKlient;
}


}
