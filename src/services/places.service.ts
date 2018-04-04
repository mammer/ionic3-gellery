import { Injectable } from "@angular/core";
import { Place } from "../model/place.model";
import { Storage } from "@ionic/storage";

@Injectable()
export class PlacesService{

    constructor(public storage: Storage){}
    
    private places: Array<Place> = [];
    
    addPlace(place: Place){
        this.places.push(place);
        this.storage.set("places", this.places);
    }

    getAllPlaces(){
        return this.storage.get("places").then(data => {
            return this.places = data != null ? data : [];
        });
    }

    updatePlace(place: Place){
        //update place
        console.log("places updated!");
        
    }


    deletePlace(place: Place){
        //delete place
        console.log("place deleted");
        
    }
}