import { MedicoComponent } from "./medico.component";
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoService } from "./medico.service";
import { HttpClientModule } from "@angular/common/http";

describe('Medico Component', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports: [HttpClientModule]
    });
    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  });

  it('Debe de crearse el componente', () => {
    expect(component).toBeTruthy();

  });
  it('Debe de returnar el nombre del medico', () => {
    const nombre = 'Harry';
    const res = component.saludarMedico(nombre);

    expect(res).toContain(nombre);

  });
});