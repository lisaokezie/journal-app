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

  public sceduledTime = '17:00';

  notifs: LocalNotificationScheduleResult;
  pendingNotifs: LocalNotificationScheduleResult;

  constructor(public storage: Storage) { 
  }

  save(): void{
    this.storage.set('sceduledTime', this.sceduledTime);
    this.storage.set('isActive', this.isActive);
    this.storage.set('notifs', this.notifs);
    this.storage.set('pendingNotifs', this.pendingNotifs);
  }
  
  getHour(){
     const h = this.sceduledTime.split(':');
     return parseInt(h[0]); 
  }

  getMinutes(){
    const m = this.sceduledTime.split(':');
     return parseInt(m[1]); 
  }

  async dailyNotification(){
    // console.log('Daily Notification was set to '+ this.sceduledTime) 
    this.notifs = await Plugins.LocalNotifications.schedule({
    notifications: [
      {
        title: "This Should be a daily notification",
        body: "Body",
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
    // console.log('Notification was canceled');
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
