import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button'

import { AppComponent } from './app.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { PeopleService } from './services/people.service';
import { CenterPanelComponent } from './components/center-panel/center-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    CenterPanelComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [PeopleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
