import {Component, OnInit} from '@angular/core';
import {People} from "../people";
import {PeopleService} from "../people.service";


@Component({
  selector: 'people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {
  people: People = new People;
  constructor(public p: PeopleService) {}

  ngOnInit() {
  }
  createItem() {
    console.log('result'+ this.p.creatPeopl( this.people ));
    location.reload();
  }
}
