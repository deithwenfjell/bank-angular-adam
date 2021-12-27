import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Transakcia } from '../transakcia';
import { ETypTransakcie } from '../e-typ-transakcie.enum';
import {Location} from '@angular/common';
import { UcetService } from '../ucet.service';
import { Observable } from 'rxjs';
import { Ucet } from '../ucet';

@Component({
  selector: 'app-platobna-brana',
  templateUrl: './platobna-brana.component.html',
  styleUrls: ['./platobna-brana.component.css']
})
export class PlatobnaBranaComponent implements OnInit {

  myForm: FormGroup = new FormGroup({});

  typyTransakcie = [
    {typ: ETypTransakcie.Elektronika, nazov: 'Elektronika' },
    {typ: ETypTransakcie.Nehnutelnosti, nazov: 'Nehnutelnosti' },
    {typ: ETypTransakcie.Oblečenie, nazov: 'Oblečenie' },
    {typ: ETypTransakcie.Pohostinstvo, nazov: 'Pohostinstvo' },
    {typ: ETypTransakcie.Potraviny, nazov: 'Potraviny' },
    {typ: ETypTransakcie.Vzdelávanie, nazov: 'Vzdelávanie' }
  ];

  model = new Transakcia(4, 1, ETypTransakcie.Potraviny, 100, false);
  submitted = false;
  transakcie$: Observable<Transakcia[]> = new Observable<Transakcia[]>();

  onSubmit() {
    this.submitted = true;
    console.log(this.model);
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor(private location: Location, private ucetService: UcetService) { }

  ngOnInit() {
    this.transakcie$ = this.ucetService.vratTransakcie();
  }

  novaTransakcia() {

    this.transakcie$.subscribe(
      res => {
        console.log('Subscribed to Ucet.');
        console.log(this.model);
        res.push(this.model);
      }
    );
  }
  goBack() {
    this.location.back();
  }


}
