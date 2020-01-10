import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Entry } from '../interfaces/entry';

@Injectable({
  providedIn: 'root'
})
export class EntriesService {
  
  public entries: Entry[] = [];

  public loaded: boolean = false;

  constructor(public storage: Storage) { 
    
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

    createEntry(title): void {
      let id = Date.now();
      let created = new Date();
      this.entries.push({
        id: id.toString(),
        title: title,
        date: created,
        content: '',
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
}
