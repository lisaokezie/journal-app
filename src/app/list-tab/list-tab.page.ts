import { Component, OnInit } from '@angular/core';
import { NavController} from '@ionic/angular';
import { EntriesService } from '../services/entries.service';


@Component({
  selector: 'app-list-tab',
  templateUrl: './list-tab.page.html',
  styleUrls: ['./list-tab.page.scss'],
})
export class ListTabPage implements OnInit {

 // public favorites: Entry[] = [];

  constructor(public entriesService: EntriesService, private navCtrl: NavController){ 

  }

  ngOnInit() {
    this.entriesService.load();


   //this.entriesService.entries.forEach(element => this.favorites.push(element)
    
  }

  addEntry(){
    this.navCtrl.navigateForward(`/tabs/entries/add-entry`);
  }

  // addToFavorites(entry: Entry): void{
  //   if(entry.isFavorite === true){
  //     this.favorites.push(entry);
  //   }
  //   else{
  //     console.log("Not a favorite");
  //   }
  // }

  // getFavorites(){
  //   let list: Entry[] = [];

  //   this.entriesService.entries.forEach(function(element){
  //     if(element.isFavorite === true){
  //       list.push(element);
  //       console.log(element.title + " is a favorite");
  //     }
  //     else{
  //       console.log(element.title + " is not a favorite");
  //     }
  //   }
  //   );

  //   console.log("Favoriten " + list)
  // }

}
