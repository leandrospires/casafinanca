import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvoluindoComponent } from './evoluindo.component';

describe('EvoluindoComponent', () => {
  let component: EvoluindoComponent;
  let fixture: ComponentFixture<EvoluindoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvoluindoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvoluindoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
