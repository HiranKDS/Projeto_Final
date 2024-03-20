import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageTreinosPage } from './page-treinos.page';

describe('PageTreinosPage', () => {
  let component: PageTreinosPage;
  let fixture: ComponentFixture<PageTreinosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageTreinosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
