import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarDoctoresComponent } from './eliminar-doctores.component';

describe('EliminarDoctoresComponent', () => {
  let component: EliminarDoctoresComponent;
  let fixture: ComponentFixture<EliminarDoctoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarDoctoresComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EliminarDoctoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
