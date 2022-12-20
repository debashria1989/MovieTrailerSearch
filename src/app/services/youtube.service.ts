import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http:HttpClient) { }

  getVideosFromYouTubeAPI(movieName:any) : Observable<any>{
    const API_KEY = "AIzaSyDvseT2tWgOPrX6uSyAxw8QFnef_mfxd1g";
    const url = "https://www.googleapis.com/youtube/v3/search?q="+movieName+"&part=snippet&type=video&key="+API_KEY+"&maxResults=5";
    
    return this.http.get<any>(url);

  }
}
