import { Component, OnInit } from '@angular/core';
import { Klient } from '../klient';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { KlientService } from '../klient.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  klient$!: Observable<Klient | undefined>;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: KlientService
  ) { }

  ngOnInit() {
    this.klient$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.vratKlienta(params.get('id')))
    );
  }

  chodNaVsetkychKlientov(klient: Klient) {
    let klientId = klient ? klient.id : null;
    // Pass along the hero id if available
    // so that the HeroList component can select that hero.
    // Include a junk 'foo' property for fun.
    this.router.navigate(['/profil-list', { id: klientId, foo: 'foo' }]);
  }


}
