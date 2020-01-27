import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EditmodalPage } from './editmodal.page';

describe('EditmodalPage', () => {
  let component: EditmodalPage;
  let fixture: ComponentFixture<EditmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EditmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
