import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map, tap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

const apiKey = environment.apiKey;
const apiUrl = environment.apiUrl;

const params = new HttpParams().set('apiKey',apiKey);

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

  getData(url:string){
    const dataUrl = apiUrl+'/'+ url;
    console.log(dataUrl);
    return this.http.get(dataUrl,{params})
    //return this.http.get('https://newsapi.org/v2/top-headlines?country=us',{params})
    .pipe(
      tap(value=>{
        console.log(value);
      })
    );
  }

}
