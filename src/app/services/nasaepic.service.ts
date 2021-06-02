import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Date } from '../models/date.interface';
import { Image } from '../models/image.interface';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  apiKey: string = '5dj2Bf7gfe5X6geLNd0QwnZAyeBJcIAO3pDHQ8Uy';

  constructor(private http: HttpClient) { }

  getDates(): Observable<Date[]> {
    return this.http.get<Date[]>('https://api.nasa.gov/EPIC/api/natural/all?api_key=' + this.apiKey);
  }

  getImagesByDate(date: string): Observable<Image[]> {
    return this.http.get<Image[]>('https://api.nasa.gov/EPIC/api/natural/date/' + date + '?api_key=' + this.apiKey);
  }


  getImageUrl(id: string, date: string): string {
    return 'https://api.nasa.gov/EPIC/archive/natural/' + date.substr(0, 4) + '/' + date.substr(5,2)  + '/' + date.substr(8,2) + '/png/' + id + '.png?api_key=' + this.apiKey;
  }




  //2019/05/30/png/epic_1b_20190530011359.png?api_key=DEMO_KEY


}
