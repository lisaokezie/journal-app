import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListTabPage } from './list-tab.page';

describe('ListTabPage', () => {
  let component: ListTabPage;
  let fixture: ComponentFixture<ListTabPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTabPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
