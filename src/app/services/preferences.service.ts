import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Plugins } from '@capacitor/core';
import { LocalNotificationScheduleResult} from '@capacitor/core';
const { LocalNotifications } = Plugins;

@Injectable({
  providedIn: 'root'
})
export class PreferencesService {

  public isActive = false;

  public journalname = 'Journal';

  public sceduledTime = '17:00';

  public loaded: boolean = false;

  notifs: LocalNotificationScheduleResult;
  pendingNotifs: LocalNotificationScheduleResult;

  constructor(public storage: Storage) { }

  load(): Promise<boolean>{
    return new Promise((resolve) => {
      this.storage.get('sceduledTime');
      this.storage.get('isActive');
      this.storage.get('notifs');
      this.storage.get('pendingNotifs');
      this.storage.get('journalname');
        this.loaded = true;
        resolve(true);
    });
  }


  loadName(): Promise<boolean> {

    return new Promise((resolve) => {

      this.storage.get('journalname').then((journalname) => {

        if(journalname != null){
          this.journalname = this.journalname;
        }
        this.loaded = true;
        resolve(true);

      });
    });
  }
  
  save(): void{
    this.storage.set('sceduledTime', this.sceduledTime);
    this.storage.set('isActive', this.isActive);
    this.storage.set('notifs', this.notifs);
    this.storage.set('pendingNotifs', this.pendingNotifs);
    this.storage.set('journalname', this.journalname);
  }

  // changeName(name: string){
  //   this.journalname = name;
  //   this.storage.set('name', this.journalname);
  //   this.save();
  // }
  
  getHour(){
     const h = this.sceduledTime.split(':');
     return parseInt(h[0]); 
  }

  getMinutes(){
    const m = this.sceduledTime.split(':');
     return parseInt(m[1]); 
  }

  async dailyNotification(){
    this.notifs = await Plugins.LocalNotifications.schedule({
    notifications: [
      {
        title: "Daily Reminder",
        body: "Let's write about your day!",
        id: 3,
        schedule: { 
          on: {
            hour: this.getHour(),
            minute: this.getMinutes()
          } 
        },
        sound: null,
        attachments: null,
        actionTypeId: "",
        extra: null
      }
    ]
  });
  this.save();
  }
  
  cancelNotification() {
    this.pendingNotifs && Plugins.LocalNotifications.cancel(this.pendingNotifs);
    this.save();
  }

  async getPending() {
    this.pendingNotifs = await Plugins.LocalNotifications.getPending();
    console.log('PENDING', this.pendingNotifs);
  }

  toggleChanged(eve){
    if(this.isActive){
      this.dailyNotification();
    }
    else if(!this.isActive){
      this.cancelNotification();
    }
  }

  timeChanged(eve){
    this.dailyNotification();
  }
}
