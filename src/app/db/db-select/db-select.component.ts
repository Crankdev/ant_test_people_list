import {Component, OnInit} from '@angular/core';
import {People} from "../people";
import {Observable} from "rxjs";
import {PeopleService} from "../people.service";
import {PagerService} from "../pager.service";
import 'rxjs/add/operator/map'

@Component({
  selector: 'db-select',
  templateUrl: './db-select.component.html',
  styleUrls: ['./db-select.component.css'],
})

export class DbSelectComponent implements OnInit {
  peoples: Observable<People[]>;
  // array of all items to be paged
  private allItems: People[];
  // pager object
  isDesc;
  column;
  pager: any = {};
  // paged items
  pagedItems: People[];
  constructor(private persons: PeopleService, private pagerService: PagerService ) {
    //this.persons.getPeoples().subscribe(val => this.data = val);
    //console.log('this.data ' + this.data);
  }
  ngOnInit() {
    this.peoples = this.persons.getPeoples();
    this.peoples.subscribe((data) => {
      this.allItems = data;
      this.setPage(1);
    });
  }
  deletePeopl(people){
    this.persons.deletePeopl(people);
    this.peoples = this.persons.getPeoples();
    this.peoples.subscribe((data) => {
      this.allItems = data;
      this.setPage(this.pager.currentPage);
    });
  }
  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }
    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);
    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  }
  sort(property){
    this.isDesc = !this.isDesc; //change the direction
    this.column = property;
    let direction = this.isDesc ? 1 : -1;
    if(property=="age" || property =="id") {
      this.allItems.sort(function (a, b) {
        if (+a[property].toUpperCase() < +b[property].toUpperCase()) {
          return -1 * direction;
        }
        else if (+a[property].toUpperCase() > +b[property].toUpperCase()) {
          return 1 * direction;
        }
        else {
          return 0;
        }
      });
    }
    else {
      this.allItems.sort(function (a, b) {
        if (a[property].toUpperCase() < b[property].toUpperCase()) {
          return -1 * direction;
        }
        else if (a[property].toUpperCase() > b[property].toUpperCase()) {
          return 1 * direction;
        }
        else {
          return 0;
        }
      });
    }
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
  };
}

//https://www.digitalocean.com/community/questions/cors-apache-linux-access-control-allow-origin