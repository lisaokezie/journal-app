import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { EntriesService } from '../services/entries.service';

import { Entry } from '../interfaces/entry';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {

 // public list: Entry[] = [];

  public favs;

  constructor(public entriesService: EntriesService, private navCtrl: NavController) { }

  ngOnInit() {
    this.entriesService.load();

    this.favs = this.entriesService.entries.filter(entry => entry.isFavorite === true);
  }

}
