import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TagsmodalPage } from './tagsmodal.page';

describe('TagsmodalPage', () => {
  let component: TagsmodalPage;
  let fixture: ComponentFixture<TagsmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagsmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TagsmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
