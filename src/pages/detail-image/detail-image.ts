import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-detail-image',
  templateUrl: 'detail-image.html',
})
export class DetailImagePage {

  image: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.image = navParams.data.image;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailImagePage');
  }

}
