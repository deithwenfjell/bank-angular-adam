import { Injectable } from '@angular/core';
import { Ucet } from './ucet';
import { ETypTransakcie } from './e-typ-transakcie.enum';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Transakcia } from './transakcia';

@Injectable({
  providedIn: 'root'
})
export class UcetService {


ucty: Ucet[] = [
  {id: 1, vlastnikId: 1, nazov: 'Osobný účet Fera', transakcie:
  [
    {id: 1, vlastnikId: 1, typ: ETypTransakcie.Elektronika, suma: 150, jeToPrijem: false},
    {id: 2, vlastnikId: 1, typ: ETypTransakcie.Nehnutelnosti, suma: 300, jeToPrijem: true},
    {id: 3, vlastnikId: 1, typ: ETypTransakcie.Pohostinstvo, suma: 50, jeToPrijem: false}
  ] }
];

vybraneTransakcie = this.ucty[0].transakcie;

constructor() { }

pridajTransakciuKDefaultUctu(transakcia: Transakcia) {
  this.ucty[0].transakcie.push(transakcia);
}

vratUcty(): Observable<Ucet[]> {
  return of(this.ucty);
}

vratUcet(id: number | string) {
  return this.vratUcty().pipe(map((ucty: Ucet[]) => ucty.find(ucet => ucet.id === +id))
  );
}

vratTransakcie(): Observable<Transakcia[]> {
  return of(this.vybraneTransakcie);
}


  vratTransakciu(idTransakcie: string | null) {
    let id: number;
    if (idTransakcie) id = +idTransakcie;
    return this.vratTransakcie().pipe(map((transakcie: Transakcia[]) =>
      transakcie.find(transakcia => transakcia.id === id))
    );
  }
}
