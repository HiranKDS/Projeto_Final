import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeTreinerPage } from './home-treiner.page';

describe('HomeTreinerPage', () => {
  let component: HomeTreinerPage;
  let fixture: ComponentFixture<HomeTreinerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(HomeTreinerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
