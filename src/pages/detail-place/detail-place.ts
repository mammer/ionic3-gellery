import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Place } from '../../model/place.model';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera';

@IonicPage()
@Component({
  selector: 'page-detail-place',
  templateUrl: 'detail-place.html',
})
export class DetailPlacePage {

  place: Place;
  photo: string;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public camera: Camera,
              public alertCtrl: AlertController) {
    this.place = navParams.get('place');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPlacePage');
  }

  onTakePicture(){
    const option1: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: PictureSourceType.CAMERA,
      allowEdit: true,
      targetWidth: 320,
      targetHeight: 240,
    };
    const option2: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: PictureSourceType.PHOTOLIBRARY,
      allowEdit: true,
      targetWidth: 320,
      targetHeight: 240,
    };

    let alert = this.alertCtrl.create({
      title: "Source",
      subTitle: "Quelle source",
      buttons: [
        {
          text: "Camera",
          handler:() => {this.takepicture(option1);}
        },
        {
          text: "Liberary",
          handler:() => {this.takepicture(option2);}
        }
      ]
    });
    alert.present();
  }

  takepicture(option){
    this.camera.getPicture(option)
    .then(
      data => {
        this.photo = "data: image/jpeg;base64," + data;
      }
    )
    .catch(
      err => {
        console.log(err);
        
      }
    )
  }

}
