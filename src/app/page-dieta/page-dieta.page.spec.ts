import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { PageDietaPage } from './page-dieta.page';

describe('PageDietaPage', () => {
  let component: PageDietaPage;
  let fixture: ComponentFixture<PageDietaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageDietaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

