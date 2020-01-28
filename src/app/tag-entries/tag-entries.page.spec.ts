import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TagEntriesPage } from './tag-entries.page';

describe('TagEntriesPage', () => {
  let component: TagEntriesPage;
  let fixture: ComponentFixture<TagEntriesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagEntriesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TagEntriesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
