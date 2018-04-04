import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GalleryPage } from '../pages/gallery/gallery';
import { MeteoPage } from '../pages/meteo/meteo';
import { PlacesPage } from '../pages/places/places';
import { HttpModule } from '@angular/http'
import { GalleryService } from '../services/gallery.service';
import { DetailImagePage } from '../pages/detail-image/detail-image';
import { PlacesService } from '../services/places.service';
import { NewPlacePage } from '../pages/new-place/new-place';
import { IonicStorageModule } from '@ionic/storage'
import { Geolocation } from '@ionic-native/geolocation'
import { DetailPlacePage } from '../pages/detail-place/detail-place';
import { AgmCoreModule } from '@agm/core';
import { Camera, CameraOptions } from '@ionic-native/camera';

@NgModule({
  // ce directive responsable pour les page base en angular
  declarations: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailImagePage,
    NewPlacePage,
    DetailPlacePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    IonicStorageModule.forRoot({
      name: '__PlacesData',
         driverOrder: ['indexeddb', 'sqlite', 'websql']
    }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAI1g1D0nJiQ5hnprS0pR-Wci1fNr6vWDs'
    })
  ],
  bootstrap: [IonicApp],
  // sa directive de ionic
  entryComponents: [
    MyApp,
    HomePage,
    GalleryPage,
    MeteoPage,
    PlacesPage,
    DetailImagePage,
    NewPlacePage,
    DetailPlacePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GalleryService,
    PlacesService,
    Geolocation,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
