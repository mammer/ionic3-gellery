import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Place } from '../../model/place.model';
import { PlacesService } from '../../services/places.service';
import { NewPlacePage } from '../new-place/new-place';
import { DetailPlacePage } from '../detail-place/detail-place';

@IonicPage()
@Component({
  selector: 'page-places',
  templateUrl: 'places.html',
})
export class PlacesPage {

  places: Array<Place>;
  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public placesService: PlacesService) {
  }

  ionViewWillEnter(){
    this.placesService.getAllPlaces()
    .then(data => {this.places = data;})
    .catch(err => {console.log(err);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PlacesPage');
  }

  onNewPlace(){
    this.navCtrl.push(NewPlacePage)
  }

  onDetailPlace(p: Place){
    this.navCtrl.push(DetailPlacePage, {place: p});
  }

  onUpdatePlace(place: Place){
    this.placesService.updatePlace(place);
  }

  onDeletePlace(place: Place){
    this.placesService.deletePlace(place);
  }


}
