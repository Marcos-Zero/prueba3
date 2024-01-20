import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OptimusModalPage } from './optimus-modal.page';

describe('OptimusModalPage', () => {
  let component: OptimusModalPage;
  let fixture: ComponentFixture<OptimusModalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(OptimusModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
