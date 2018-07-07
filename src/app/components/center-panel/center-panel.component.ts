import { Component, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

import { Peoples } from '../../models/peoples.model';
import { SendMessageComponent } from '../send-message/send-message.component';


@Component({
  selector: 'center-panel',
  templateUrl: './center-panel.component.html',
  styleUrls: ['./center-panel.component.css']
})
export class CenterPanelComponent {
  @Input()
  data: Peoples[];
  animal: string;
  name: string;

  public fullHearts: any;
  public emptyHearts: any;

  displayedColumns: string[] = ['likes', 'dislikes'];
  dataSource = new MatTableDataSource(this.data);

  constructor(public dialog: MatDialog) { }

  sendMsg({ name }: Peoples) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      name
    };
    this.dialog.open(SendMessageComponent,
      dialogConfig);
  }
}
