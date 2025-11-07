import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Saludador } from './saludador';

describe('Saludador', () => {
  let component: Saludador;
  let fixture: ComponentFixture<Saludador>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Saludador]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Saludador);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
