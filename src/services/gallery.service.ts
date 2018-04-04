import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class GalleryService{
    
    public host: string = "https://pixabay.com/api/";
    public key: string = "8556284-94a05b8c2e197eb73132d7a4b";

    constructor(private http: Http){}

    chercher(query: string, size: number, page: number){
        return this.http.get(this.host + "?key=" + this.key +
         "&q=" + query + "&per-page=" + size + "&page=" + page)
        .map(resp => resp.json());
    }
    
}