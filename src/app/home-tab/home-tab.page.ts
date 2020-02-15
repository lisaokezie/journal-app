import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';
import { TagsService } from '../services/tags.service';
import { PreferencesService } from '../services/preferences.service';

@Component({
  selector: 'app-home-tab',
  templateUrl: './home-tab.page.html',
  styleUrls: ['./home-tab.page.scss'],
})
export class HomeTabPage implements OnInit {

  public options = {
    day: 'numeric',
    month: 'short'
    }

  constructor(public tagsService: TagsService, public entriesService: EntriesService, public prefService: PreferencesService) { }

  /* Lädt Einträge und Tags aus dem Service */
  ngOnInit() {
    this.entriesService.load();
    this.tagsService.load();
    this.prefService.load();
  }

  /* Filtert die Einträge nach Favoriten */
  filterArray(){
      let favorites: any[] = [];
      favorites = this.entriesService.entries.filter(entry => entry.isFavorite === true);
      return favorites;
    }
}
