import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaLucas } from './prueba-lucas';

describe('PruebaLucas', () => {
  let component: PruebaLucas;
  let fixture: ComponentFixture<PruebaLucas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PruebaLucas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PruebaLucas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
