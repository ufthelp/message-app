import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Peoples } from '../../models/peoples.model';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.css']
})
export class SendMessageComponent {

  name: string;

  constructor(
    private dialogRef: MatDialogRef<SendMessageComponent>,
    @Inject(MAT_DIALOG_DATA) {
      name
    }: Peoples) {
    this.name = name;
  }
  /**
  * This is the close function to close the send message dialog
  */
  close() {
    this.dialogRef.close();
  }

}
