import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Peoples } from '../../models/peoples.model';
import {SendMessageComponent} from '../send-message/send-message.component';


export interface DialogData {
  animal: string;
  name: string;
}
@Component({
  selector: 'center-panel',
  templateUrl: './center-panel.component.html',
  styleUrls: ['./center-panel.component.css']
})
export class CenterPanelComponent implements OnInit {
  @Input()
  data: Peoples[];
  animal: string;
  name: string;

  public fullHearts: any;
  public emptyHearts: any;

  displayedColumns: string[] = ['likes', 'dislikes'];
  dataSource = new MatTableDataSource(this.data);

  constructor(public dialog: MatDialog){

  }
  ngOnInit() {
  }
  sendMsg({name}:Peoples){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      name
    };
    this.dialog.open(SendMessageComponent,
      dialogConfig);
    console.log("hhhh");
  }

}
