import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable({
  providedIn: 'root'
})
export class TagsService {


  public tags: String[] = ["BeispieltagA", "BeispieltagB"];

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
}
