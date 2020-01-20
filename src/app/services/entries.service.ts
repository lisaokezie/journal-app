import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Entry } from '../interfaces/entry';
import { TagsService } from '../services/tags.service';


@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  
  public entries: Entry[] = [];

  public loaded: boolean = false;

  constructor(public storage: Storage, private tagsService: TagsService) { 
    
  }

  load(): Promise<boolean> {

    return new Promise((resolve) => {

      this.storage.get('entries').then((entries) => {

        if(entries != null){
          this.entries = entries;
        }
        this.loaded = true;
        resolve(true);

      });
    });
  }

    save(): void {
      this.storage.set('entries', this.entries);
    }

    saveEntry(entry: Entry){
      // Erzeugen einer eindeutigen ID 
      let id = Date.now();
      entry.id = id.toString();
      this.entries.push(entry);
      this.save();
      // console.log("Es wurde ein neuer Eintrag hinzugefügt")
    }

    getEntry(id): Entry {
      return this.entries.find(entry => entry.id === id);
    }

    // Gibt isFavorite Status zurück
    getStatus(entry: Entry){
      if(entry.isFavorite === true){
        return true
      } else {
        return false
      }
    }

    // Wandelt das Erstellungsdatum in einen String um
    getDate(date: Date){
      let options = {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric'
      }
    
    return date.toLocaleString('de-en', options);
      // return date.getDay() + "." + date.getMonth() + "." + date.getFullYear();
    }

    
    createEntry(title): void {
      let id = Date.now();
      let created = new Date();
      this.entries.push({
        id: id.toString(),
        title: title,
        date: created,
        content: '',
        tags: this.tagsService.tags,
        isFavorite: false
      });
      this.save();
    }

    deleteEntry(entry: Entry){
      let index = this.entries.indexOf(entry);
      if(index > -1){
        this.entries.splice(index, 1);
        this.save();
      }
    }

    // getFavorites(){
    //     let favs: Entry[]= [];

    //     for(let i; i<this.entries.length;i++){
    //       if(this.entries[i].isFavorite){
    //         console.log(this.entries[i])
    //         favs.push(this.entries[i])
    //       }
    //     }
    //     console.log(favs);
    // }
}
