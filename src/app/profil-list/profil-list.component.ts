import { Component, OnInit } from '@angular/core';
import { Klient } from '../klient';
import { KlientService } from '../klient.service';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profil-list',
  templateUrl: './profil-list.component.html',
  styleUrls: ['./profil-list.component.css']
})
export class ProfilListComponent implements OnInit {

  klienti$!: Observable<Klient[]>;
  vybranyKlientId!: number;


  constructor(
    private service: KlientService,
    private route: ActivatedRoute
  ) { }

  async ngOnInit() {
    this.klienti$ = this.route.paramMap.pipe(
      switchMap(params => {
        // (+) before `params.get()` turns the string into a number
        const returnedId = params.get('id');
        if (returnedId)
          this.vybranyKlientId = +returnedId;
        return this.service.vratKlientov();
      })
    );
  }

}
