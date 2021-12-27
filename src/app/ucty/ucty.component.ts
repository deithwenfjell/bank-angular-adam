import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { Ucet } from '../ucet';
import { switchMap, map } from 'rxjs/operators';
import { UcetService } from '../ucet.service';
import { Klient } from '../klient';
import { ETypTransakcie } from '../e-typ-transakcie.enum';
import { Transakcia } from '../transakcia';
import { KlientService } from '../klient.service';
import { any } from '@amcharts/amcharts4/.internal/core/utils/Array';


@Component({
  selector: 'app-ucty',
  templateUrl: './ucty.component.html',
  styleUrls: ['./ucty.component.css']
})
export class UctyComponent implements OnInit {


  ucty$!: Observable<Ucet[]>;
  transakcie$: Observable<Transakcia[]> = new Observable<Transakcia[]>();;
  klient$!: Observable<Klient | undefined>;
  vybranyUcetId: number = 0
  vybranyKlientId!: number;
  //
  displayedColumns: string[] = ['id', 'suma', 'typ', 'detail'];
  dataSource: any;

  //
  constructor(
    private ucetService: UcetService,
    private klientService: KlientService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.vratUcty();
    this.vratTransakcie();
    this.vratKlienta();
  }

  private vratKlienta() {
    // console.log('klient ID 1: ' + this.klientService.vratKlienta('1'));
    this.klient$ = this.route.paramMap.pipe(switchMap(params => {
      // (+) before `params.get()` turns the string into a number
      const id = params.get('id');
      if (id) this.vybranyKlientId = +id;
      // const vybranyKlientString = this.vybranyKlientId.toString();

      return this.klientService.vratKlienta('1');
    }));
    this.klient$.subscribe(x => console.log(x));
  }

  private vratTransakcie() {
    this.transakcie$ = this.route.paramMap.pipe(switchMap(params => {
      // (+) before `params.get()` turns the string into a number
      const returnedId = params.get('id');
      if (returnedId) {this.vybranyUcetId = +returnedId;}
      return this.ucetService.vratTransakcie();
    }));
    this.transakcie$.subscribe(transakcie => this.dataSource = transakcie);
  }

  private vratUcty() {
    this.ucty$ = this.route.paramMap.pipe(switchMap(params => {
      // (+) before `params.get()` turns the string into a number
      const returnedId = params.get('id');
      if (returnedId) this.vybranyUcetId = +returnedId;
      return this.ucetService.vratUcty();
    }));
    this.ucty$.subscribe(x => console.log(x));
  }

  vratMenoTypu(typ: ETypTransakcie) {
    switch (typ) {
      case ETypTransakcie.Potraviny:
        return 'Potraviny';
      case ETypTransakcie.Oblečenie:
        return 'Oblečenie';
      case ETypTransakcie.Elektronika:
        return 'Elektronika';
      case ETypTransakcie.Pohostinstvo:
        return 'Pohostinstvo';
      case ETypTransakcie.Vzdelávanie:
        return 'Vzdelávanie';
      case ETypTransakcie.Nehnutelnosti:
        return 'Nehnuteľnosti';
    }
  }

  vratStavUctu(ucet: Ucet) {
    let suma = 0;
    ucet.transakcie.forEach(transakcia => {
      if (transakcia.jeToPrijem) {
        suma = suma + transakcia.suma;
      } else {
        suma = suma - transakcia.suma;
      }
    });
    return suma.toString();
  }

  vratStavUctuCezId(id: number) {
    let suma = 0;
    this.ucetService.ucty[id].transakcie.forEach(transakcia => {
      if (transakcia.jeToPrijem) {
        suma = suma + transakcia.suma;
      } else {
        suma = suma - transakcia.suma;
      }
    });
    return suma.toString();
  }

  vratMenoMajitelaUctu(id: number): string {
    let meno: string;
    let priezvisko: string;

    meno = this.klientService.klienti[id].meno || '';
    priezvisko = this.klientService.klienti[id].priezvisko || '';
    return `${meno} ${priezvisko}`;
  }



}
