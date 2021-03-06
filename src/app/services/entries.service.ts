import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Entry } from '../interfaces/entry';

@Injectable({
  providedIn: 'root'
})

/*
Entries Service verwendet Ionic Storage zum Speichern der Tagebucheinträge 
und enthält Funktionen zum Hinzufügen, Löschen, Speichern und Laden von Einträgen.
*/

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
      let id = Date.now();
      entry.id = id.toString();
      this.entries.push(entry);
      this.save();
    }

    getEntry(id): Entry {
      return this.entries.find(entry => entry.id === id);
    }

    getStatus(entry: Entry){
      if(entry.isFavorite === true){
        return true
      } else {
        return false
      }
    }


    /* Umwandeln des Date Objects in einen String, Parameter 'options' wird auf der jeweiligen Seite
    defniert und bestimmt das Anzeigeformat
    */
    getDate(date: Date, options){
    return date.toLocaleString('de-en', options);
    }
    
    createEntry(title): void {
      let id = Date.now();
      let created = new Date();
      this.entries.push({
        id: id.toString(),
        title: title,
        date: created,
        content: '',
        tags: [],
        location: '',
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
