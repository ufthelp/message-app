import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { map } from "rxjs/operators";
import { distinctUntilChanged, tap } from 'rxjs/operators';
import { fromEvent, Subject } from 'rxjs';

import { PeopleService } from '../../services/people.service';
@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit, OnDestroy {
  public data;
  value = '';
  peoples: any;
  people: any;
  names$: any;
  private unsubscribe = new Subject<void>();

  @ViewChild('input') input: ElementRef;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService.getPerson().pipe(map(res => res['People']))
      .subscribe(data => {
        this.peoples = this.names$ = data;
        this.people = [];
        /** display default people*/
        let fullHeart = this.peoples[0]['rating'];
        let emptyHeart = 5 - fullHeart ? 5 - fullHeart : 0;
        this.peoples[0].fullHearts = Array(fullHeart).fill(0).map((x, i) => i);
        this.peoples[0].emptyHearts = Array(emptyHeart).fill(0).map((x, i) => i);
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
    let fullHeart = inputPeople['rating'];
    let emptyHeart = 5 - fullHeart ? 5 - fullHeart : 0;
    inputPeople.fullHearts = Array(fullHeart).fill(0).map((x, i) => i);
    inputPeople.emptyHearts = Array(emptyHeart).fill(0).map((x, i) => i);
    this.people.push(inputPeople);
  }
  /*reset search name */
  resetName() {
    this.value = '';
    this.peoples = this.names$;
  }
  /**Unsubscribe observables */
  ngOnDestroy(){
    console.log("unsubscirbe");
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }
}
