import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from 'src/environments/environment';
import {Observable, of} from 'rxjs';
import {BookModel} from './book-model';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {
  }


  getAll(): Observable<BookModel[]> {
    return this.http.get(`${environment.firebase.baseUrl}/menuitem.json`)
      .pipe(map(data => Object.values(data)));
  }

  save(param: BookModel) {
    console.log(param);
    const a = this.http.post(`${environment.firebase.baseUrl}/book/${param.id}.json`, param);
    of(a);
  }


}
