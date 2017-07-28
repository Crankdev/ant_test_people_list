import {Component, OnInit} from '@angular/core';
import {People} from "../people";
import {PeopleService} from "../people.service";
import {Params, Router, ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-people-detail',
  templateUrl: './people-detail.component.html',
  styleUrls: ['./people-detail.component.css']
})
export class PeopleDetailComponent implements OnInit {
  people: People;
  constructor(public peopl : PeopleService , private route: ActivatedRoute, private router: Router) { }
  ngOnInit() {
    this.route.params
        .switchMap((params: Params) => this.peopl.getPeopl(params['id']))
        .subscribe(people => this.people = people);
  }
  updatePeopl(){
    this.peopl.updatePeopl(this.people);
    this.router.navigate(['/']);
  }
}
