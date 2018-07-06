import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { map } from "rxjs/operators";
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';

import { PeopleService } from '../../services/people.service';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  public data;
  value = '';
  peoples: any;
  people: any;
  names$: any;
  @ViewChild('input') input: ElementRef;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPerson().pipe(map(res => res['People']))
      .subscribe(data => {
        this.peoples = this.names$ = data;
        this.people = [];
        this.people.push(this.peoples[0]);
      });
  }

  /**Filter function */
  ngAfterViewInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        distinctUntilChanged(),
        tap(() => {
          const filter = this.input.nativeElement.value;
          this.peoples = this.names$.filter(people => people.name.trim().toLowerCase().search(filter.toLowerCase()) >= 0);
        })
      ).subscribe()
  }

  showDetails(inputPeople) {
    this.people = [];
    /** creating Heart icon array */
    let fullHeart=inputPeople['rating'];
    let emptyHeart = 5-fullHeart?5-fullHeart:0;
    inputPeople.fullHearts = Array(fullHeart).fill(0).map((x,i)=>i);
    inputPeople.emptyHearts = Array(emptyHeart).fill(0).map((x,i)=>i);
    this.people.push(inputPeople);
  }

  resetName(){
    this.value = '';
    this.peoples = this.names$;
  }
}
