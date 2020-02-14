import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { EntriesService } from '../services/entries.service';
import { Entry } from '../interfaces/entry';

import { tap } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { TagsService } from '../services/tags.service';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit, OnDestroy {

  public entry: Entry;
  
  public heart: boolean;

  public subscription: Subscription;

  public entrytags;

  public options = {
    weekday: 'short',
    day: 'numeric',
    month: 'long'
  }

  public stringOptions = {
    weekday: 'short',
    day: 'numeric',
    month: 'long'
  }

  constructor(private route: ActivatedRoute, public tagsService: TagsService, public entriesService: EntriesService, public navCtrl: NavController) { 

    this.entry = {
      id: '',
      title: '',
      date: new Date,
      content: '',
      tags: [], 
      location: '',
      isFavorite: false
    }

    this.entrytags = this.entry.tags;

    // Prüft den Status von isFavorite 
    // Wenn isFavorite = true, wird ein Herz angezeigt
    this.heart = this.entriesService.getStatus(this.entry)

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
        this.entrytags = this.entry.tags;

      })
    ).subscribe();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  deleteEntry(entry: Entry){
    this.entriesService.deleteEntry(entry);    
  }
}
