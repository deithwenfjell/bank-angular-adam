/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { PlatobnaBranaComponent } from './platobna-brana.component';

describe('PlatobnaBranaComponent', () => {
  let component: PlatobnaBranaComponent;
  let fixture: ComponentFixture<PlatobnaBranaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlatobnaBranaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlatobnaBranaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
