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
export class DetailPage implements OnInit {

  public entry: Entry;
  
  public create: string;

  public heart: boolean;

  constructor(private route: ActivatedRoute, private entriesService: EntriesService, private navCtrl: NavController) { 

    this.entry = {
      id: '',
      title: '',
      date: new Date,
      content: '',
      isFavorite: false
    }

    // Prüft den Status von isFavorite 
    // Wenn isFavorite = true, wird ein Herz angezeigt
    this.heart = this.entriesService.getStatus(this.entry)
    // Wandelt Erstellungsdatum in formatierten String um 
    this.create = this.entriesService.getDate(this.entry.date);

  }

  ngOnInit() {
    let entryId = this.route.snapshot.paramMap.get('id');

    if(this.entriesService.loaded){
      this.entry = this.entriesService.getEntry(entryId);
    } else{
      this.entriesService.load().then(() => {
        this.entry = this.entriesService.getEntry(entryId)
      });
    }

    this.heart = this.entriesService.getStatus(this.entry)
    console.log("Status" + this.heart)
  }

  deleteEntry(entry: Entry){
    this.entriesService.deleteEntry(entry);

    console.log("Eintrag wurde gelöscht");
    
  }
}
