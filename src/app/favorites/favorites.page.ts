import { Component, OnInit } from '@angular/core';
import { EntriesService } from '../services/entries.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

  public favs;

  /* Optionen für die Darstellung des Erstellungsdatums */
  public options = {
    day: 'numeric',
    month: 'short'
    }

  constructor(public entriesService: EntriesService) { }

  ngOnInit() {
    /* Lädt alle Einträge aus dem Service */
    this.entriesService.load();

    /* Erstellt ein Array mit allen favorisierten Einträgen, welches auf der Seite ausgegeben wird */
    this.favs = this.entriesService.entries.filter(entry => entry.isFavorite === true);
  }
}
