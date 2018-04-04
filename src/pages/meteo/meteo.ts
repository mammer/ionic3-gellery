import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';

/**
 * Generated class for the MeteoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-meteo',
  templateUrl: 'meteo.html',
})
export class MeteoPage {

  meteo: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public http: Http,
              public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MeteoPage');
  }

  ongetMeteo(dataform){
    let loading = this.loadingCtrl.create({
      content: "Chargement ..."
    });
    loading.present();
    this.http.get("http://api.openweathermap.org/data/2.5/forecast?q="+
    dataform.ville+"&APPID=b97bc9cb1e19fdea1d14dbd1e22b7d01")
    .map(resp => resp.json())
    .subscribe(data => {
        this.meteo = data;
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      });
  }

}
