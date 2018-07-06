import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import { map } from "rxjs/operators";
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import { fromEvent, Observable } from 'rxjs';

import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements AfterViewInit {
  public data;
  value = 'Name';
  peoples: any;
  people: any;
  names$: any;
  @ViewChild('input') input: ElementRef;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.names$ = this.peopleService.getPerson().pipe(map(res => res['People']))
      .subscribe(data => {
        this.peoples = data;
      });
  }

  ngAfterViewInit() {
    console.log('test');
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(350),
        distinctUntilChanged(),
        tap(() => {
          this.peoples = this.names$
            .map(x => {
              console.log("heelllo");
              return x.filter(y => y.toLowerCase().indexOf(this.input.nativeElement.value.toLowerCase()) > -1);
            })
        })
      ).subscribe()
  }

  showDetails(inputPeople) {
    this.people = inputPeople;
  }

}