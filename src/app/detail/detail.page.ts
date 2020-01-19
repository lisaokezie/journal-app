import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { EntriesService } from '../services/entries.service';
import { Entry } from '../interfaces/entry';

import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit, OnDestroy {

  public entry: Entry;
  
  public create: string;

  public heart: boolean;

  public subscription: Subscription;

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

  ngOnInit(){

    /* 
    subscription behebt Fehler, dass nach Bearbeiten von isFavorite in edit-entry 
    und Zurückkehren in die Detailansicht die Änderung nicht angezeigt wird
    */
    this.subscription = this.route.params.pipe(
      tap(params => {

        const entryId = params["id"];

        if(this.entriesService.loaded){
          this.entry = this.entriesService.getEntry(entryId);
        } else{
          this.entriesService.load().then(() => {
            this.entry = this.entriesService.getEntry(entryId)
          });
        }
    
        this.heart = this.entriesService.getStatus(this.entry);

      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  deleteEntry(entry: Entry){
    this.entriesService.deleteEntry(entry);

    console.log("Eintrag wurde gelöscht");
    
  }
}
