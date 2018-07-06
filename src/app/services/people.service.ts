import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) {
    // this.getPerson().subscribe(data => {
    //   console.log(data)
    // });
  }

  public getPerson(): Observable<any> {
    return this.http.get("../../assets/people.json")
  }
}
