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

  public list: Entry[] = [];

  public favs;

  constructor(public entriesService: EntriesService, private navCtrl: NavController) { }

  ngOnInit() {
    this.entriesService.load();

    // this.entriesService.entries.forEach(function(element){
    //   if(element.isFavorite === true){
    //     this.list.push(element);
    //     console.log(element.title + " is a favorite");
    //   }
    //   else{
    //     console.log(element.title + " is not a favorite");
    //   }
    // }
    // );

    this.favs = this.entriesService.entries.filter(entry => entry.isFavorite === true);
  }

  // printFavorites(){
  //  // console.log(this.favs);

  //   // const favs = this.entriesService.entries.filter(entry => entry.isFavorite === true);
  //   // console.log(favs);
  // }

}
