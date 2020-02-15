import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})

/*
Tags Service verwendet Ionic Storage zum Speichern von Tags
und enthält Funktionen zum Hinzufügen, Löschen, Speichern und Laden.
*/

export class TagsService {

  public tags: String[] = [];

  public loaded: boolean = false;

  constructor(public storage: Storage) { }

  load(): Promise<boolean> {

    return new Promise((resolve) => {

      this.storage.get('tags').then((tags) => {

        if(tags != null){
          this.tags = tags;
        }
        this.loaded = true;
        resolve(true);

      });
    });
  }

  save(): void {
    this.storage.set('tags', this.tags);
  }

  deleteTag(tag: String){
    let index = this.tags.indexOf(tag);
    if(index > -1){
      this.tags.splice(index, 1);
      this.save();
    }
  }

  createTag(name): void {
    this.tags.push(name);
    this.save();
  }
}
