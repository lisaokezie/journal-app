import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';

import { ModalController } from '@ionic/angular';
import { EditmodalPage } from '../modal/editmodal/editmodal.page';

import { EntriesService } from '../services/entries.service';
import { Entry } from '../interfaces/entry';
import { FormGroup, FormControl, FormBuilder, FormGroupName, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.page.html',
  styleUrls: ['./add-entry.page.scss'],
})
export class AddEntryPage implements OnInit {

  public formGroup: FormGroup;
  
  entry: Entry;
  title: string = '';
  content: string = '';
  location: string = '';

  constructor(private entriesService: EntriesService, private navCtrl: NavController, public modalController: ModalController) {

    this.entry = {
      id: '',
      title: '',
      date: new Date(),
      content: '',
      tags: [],
      location: '',
      isFavorite: false
    }

    this.formGroup = new FormGroup({
      title: new FormControl(),
      content: new FormControl(),
      location: new FormControl()
    })

   }

  ngOnInit() {
  }

  addEntry(entry: Entry){
    this.entriesService.saveEntry(entry);
  }

  // Edit Modal
  async openEditModal(){
    const modal = await this.modalController.create({
      component: EditmodalPage,
      cssClass: 'my-custom-modal-css',
      componentProps: {
        title: this.entry.title,
        tags: this.entry.tags,
        location: this.entry.location,
        isFavorite: this.entry.isFavorite
      }
    });

    modal.onDidDismiss()
      .then((data) => {
        const tags = data['data'].tags;
        const location = data['data'].location;
        const isFavorite = data['data'].isFavorite;  
        this.entry.isFavorite = isFavorite;
        this.entry.tags = tags;
        this.entry.location = location;
        this.entriesService.save();
      });
    return await modal.present();
  }


}