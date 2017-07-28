import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {JsonpModule, HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {DbSelectComponent} from './db/db-select/db-select.component';
import {PeopleFormComponent} from './db/people-form/people-form.component';
import {PeopleService} from './db/people.service'
import {Routes, RouterModule} from "@angular/router";
import {PeopleDetailComponent} from './db/people-detail/people-detail.component';
import {PagerService} from "./db/pager.service";
import {LastnamePipe} from "./db/db-select/lastname.pipe";

const routes: Routes = [
  { path: '', component: DbSelectComponent  },
  { path: 'detail/:id', component: PeopleDetailComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    DbSelectComponent,
    PeopleFormComponent,
    PeopleDetailComponent,
    LastnamePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    RouterModule.forRoot(routes),
  ],
  providers: [PeopleService, PagerService],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule { }
