import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';
import { Entry } from '../interfaces/entry';

import { TagsService } from '../services/tags.service';
import { PreferencesService } from '../services/preferences.service';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {

  sliderConfig = {
    spaceBetween: 4,
    slidesPerView: 2,
    slideShadows: false,
    centeredSlides: false
  };

  private options = {
    day: 'numeric',
    month: 'short'
    }

  constructor(public tagsService: TagsService, public entriesService: EntriesService, private prefService: PreferencesService) { }

  ngOnInit() {
    this.entriesService.load();
    this.tagsService.load();
  }

  filterArray(){
      let favorites: any[] = [];
      favorites = this.entriesService.entries.filter(entry => entry.isFavorite === true);
      return favorites;
    }
}
