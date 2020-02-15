import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { EntriesService } from '../services/entries.service';
import { Entry } from '../interfaces/entry';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit{

  public entry: Entry;
  
  /* Optionen für die Darstellung des Erstellungsdatums */
  public stringOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  }

  constructor(private route: ActivatedRoute, public entriesService: EntriesService, public navCtrl: NavController) { 

    this.entry = {
      id: '',
      title: '',
      date: new Date,
      content: '',
      tags: [], 
      location: '',
      isFavorite: false
    }
  }

  /* 
  Verwendet die übergebene id aus der Route und lädt mithilfe 
  der Funktion 'getEntry' den entsprechenden Eintrag 
  */
  ngOnInit(){
   let entryId = this.route.snapshot.paramMap.get('id');

   if(this.entriesService.loaded){
     this.entry = this.entriesService.getEntry(entryId);
   } else{
     this.entriesService.load().then(() => {
       this.entry = this.entriesService.getEntry(entryId)
     });
   }
  }

}
