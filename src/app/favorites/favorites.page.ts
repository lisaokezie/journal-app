import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';

import { Entry } from '../interfaces/entry';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  public favs;

  public options = {
    day: 'numeric',
    month: 'short'
    }

  constructor(public entriesService: EntriesService) { }

  ngOnInit() {
    this.entriesService.load();
    this.favs = this.entriesService.entries.filter(entry => entry.isFavorite === true);
  }
}
