import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GalleryService } from '../../services/gallery.service';
import { DetailImagePage } from '../detail-image/detail-image';

/**
 * Generated class for the GalleryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallery',
  templateUrl: 'gallery.html',
})
export class GalleryPage {

  motCle: string = "";
  size: number = 10;
  currentPage: number = 1;
  totalPages: number;
  images: any = {hits: []};

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private galleryService: GalleryService,
              private loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GalleryPage');
  }

  

  onSearch(){
    this.images.hits = [];
    this.doSearch();
  }

  doSearch(){

    let loading = this.loadingCtrl.create({
      content: "Chargement ..."
    });
    loading.present()

    this.galleryService.chercher(this.motCle, this.size, this.currentPage)
    .subscribe(
      data  => {
        this.totalPages = data.totalHits / this.size;
        
        if (this.totalPages % this.size != 0)  ++this.totalPages;
        data.hits.forEach(h => {
          this.images.hits.push(h);
        });
        
        loading.dismiss();
      },
      err   => {
        console.log("We have a problem here ..." + err);
        loading.dismiss();
    }
    );

  //   this.http.get("https://pixabay.com/api/?key=8556284-94a05b8c2e197eb73132d7a4b&q=" + this.motCle + "&per-page=10&page=1")
  //   .map(resp => resp.json())
  //   .subscribe(
  //     data =>{this.images = data;},
  //     err => {console.log(err);}
  //   )
  }

  doInfinite(infiniteScroll){
    if (this.currentPage < this.totalPages){
      ++this.currentPage;
      this.doSearch();
      infiniteScroll.complete();
    }
  }

  onDetailImage(im){ 
    this.navCtrl.push(DetailImagePage, {image: im});
  }

}
