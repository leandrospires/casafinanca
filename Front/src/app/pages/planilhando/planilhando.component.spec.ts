import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanilhandoComponent } from './planilhando.component';

describe('PlanilhandoComponent', () => {
  let component: PlanilhandoComponent;
  let fixture: ComponentFixture<PlanilhandoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlanilhandoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanilhandoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
