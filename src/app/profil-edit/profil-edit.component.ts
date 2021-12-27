import { Component, OnInit, Input} from '@angular/core';
import { Klient } from '../klient';
import { Observable } from 'rxjs';
import { KlientService } from '../klient.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profil-edit',
  templateUrl: './profil-edit.component.html',
  styleUrls: ['./profil-edit.component.css']
})
export class ProfilEditComponent implements OnInit {

  klient$!: Observable<Klient | undefined>;
  vybranyKlientId!: number;


  constructor(
    private service: KlientService,
    private route: ActivatedRoute,
    private router: Router
  ) { 
    // this.klient$ = new Observable<Klient>();
  }

  ngOnInit() {
    this.klient$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.vratKlienta(params.get('id'))
      )
    );
  }

  ukonciEditaciu(klient: Klient) {
    let klientId = klient ? klient.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    // Neviem prečo to funguje len keď nastavím nejaké číslo za profil, ono sa to potom prepíše cez id zrejme
    this.router.navigate(['/profil/0', { id: klientId, foo: 'foo' }]);
  }

}
