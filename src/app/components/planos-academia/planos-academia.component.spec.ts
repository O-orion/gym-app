import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanosAcademiaComponent } from './planos-academia.component';

describe('PlanosAcademiaComponent', () => {
  let component: PlanosAcademiaComponent;
  let fixture: ComponentFixture<PlanosAcademiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlanosAcademiaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlanosAcademiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
