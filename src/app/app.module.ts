import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicStorageModule } from "@ionic/storage";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms'

import { TagsmodalPage } from './modal/tagsmodal/tagsmodal.page';
import { TagsmodalPageModule } from './modal/tagsmodal/tagsmodal.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, TagsmodalPageModule, IonicModule.forRoot(), AppRoutingModule, IonicStorageModule.forRoot({
    name: '__mydb',
driverOrder: ['indexeddb', 'sqlite', 'websql']
  }),
  FormsModule, ReactiveFormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
