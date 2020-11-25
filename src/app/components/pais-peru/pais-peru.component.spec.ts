import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaisPeruComponent } from './pais-peru.component';

describe('PaisPeruComponent', () => {
  let component: PaisPeruComponent;
  let fixture: ComponentFixture<PaisPeruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaisPeruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaisPeruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
