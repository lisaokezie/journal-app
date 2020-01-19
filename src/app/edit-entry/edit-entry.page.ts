import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

import { ModalController } from '@ionic/angular';


import { Plugins, CameraResultType, CameraSource } from '@capacitor/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

const { Geolocation } = Plugins;

import { EntriesService } from '../services/entries.service';
import { Entry } from '../interfaces/entry';

@Component({
  selector: 'app-edit-entry',
  templateUrl: './edit-entry.page.html',
  styleUrls: ['./edit-entry.page.scss'],
})
export class EditEntryPage implements OnInit {

  public entry: Entry;

  public buttonColor: String;

  photo: SafeResourceUrl;

  public location: String;

  // Button Farbe für die Zustände isFavorite = true bzw. false
  likeColor: string = 'danger';
  unlikeColor: string = 'light';

  constructor(private router: Router, private sanitizer: DomSanitizer, private route: ActivatedRoute, private entriesService: EntriesService, private navCtrl: NavController, public modalController: ModalController) {

    this.entry = {
      id: '',
      title: '',
      date: new Date(),
      content: '',
      isFavorite: false
    }

    this.buttonColor = '';
    
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

    // Beim laden wird isFavorite geprüft und je nach Status die Farbe des Buttons festgelegt
    if(this.entriesService.getStatus(this.entry)){
      this.buttonColor = this.likeColor;
    }else{
      this.buttonColor = this.unlikeColor;
    }
  }

  // Funktion zum liken / entliken eines Eintrags
  // Button Farbe ändert sich ja nach Zustand
  // Wird aufgerufen, wenn der Nutzer auf den "Like-Button" klickt 
  toggleLike(entry){
    if(entry.isFavorite === true){
      entry.isFavorite = false;
      // console.log("unlike " + entry.isFavorite);
      this.buttonColor = this.unlikeColor;
    }
    else{
      entry.isFavorite = true;
      // console.log("like " + entry.isFavorite);
      this.buttonColor = this.likeColor;

    }
  } 

  // save(){
  //   this.entriesService.save();
  //   this.router.navigate(['../'], { relativeTo: this.route });
  // }

  //Kamera
  async takePicture() {
    const image = await Plugins.Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });

    this.photo = this.sanitizer.bypassSecurityTrustResourceUrl(image && (image.dataUrl));
  }

  // Geolocation
  // async getCurrentPosition() {
  //   const coordinates = await Geolocation.getCurrentPosition();
  //   console.log('Current', coordinates);
  // }

  


  


}
