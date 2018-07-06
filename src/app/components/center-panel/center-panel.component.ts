import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatSort, MatTableDataSource} from '@angular/material';

import { Peoples } from '../../models/peoples.model';

@Component({
  selector: 'center-panel',
  templateUrl: './center-panel.component.html',
  styleUrls: ['./center-panel.component.css']
})
export class CenterPanelComponent implements OnInit {
  @Input()
  data: Peoples[];

  public fullHearts: any;
  public emptyHearts: any;

  displayedColumns: string[] = ['likes', 'dislikes'];
  //dataSource = new MatTableDataSource(this.data);

  @ViewChild(MatSort) sort: MatSort;
  constructor(){
    this.fullHearts = Array(this.data['rating']).fill(0).map((x,i)=>i);
    this.emptyHearts = Array(this.data['rating']).fill(0).map((x,i)=>i);
  }
  ngOnInit() {
    console.log(this.data);
    // this.fullHearts = Array(this.data['rating']).fill(0).map((x,i)=>i);
    // this.emptyHearts = Array(this.data['rating']).fill(0).map((x,i)=>i);
    //this.dataSource.sort = this.sort;
  }

}
