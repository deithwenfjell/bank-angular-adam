/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UctyComponent } from './ucty.component';

describe('UctyComponent', () => {
  let component: UctyComponent;
  let fixture: ComponentFixture<UctyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UctyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UctyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
