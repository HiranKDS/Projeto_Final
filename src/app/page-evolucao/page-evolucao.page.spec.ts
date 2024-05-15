import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageEvolucaoPage } from './page-evolucao.page';

describe('PageEvolucaoPage', () => {
  let component: PageEvolucaoPage;
  let fixture: ComponentFixture<PageEvolucaoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageEvolucaoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
