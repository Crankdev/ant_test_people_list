import {Injectable}              from '@angular/core';
import {Http, Response}          from '@angular/http';
import {Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {People} from './people';


@Injectable()
export class PeopleService {
  private peopleUrl = 'http://localhost/ang-mysql/php/';  // URL to web API

  constructor (private http: Http) {}
  getPeoples(): Observable<People[]> {
    return this.http.get(this.peopleUrl+'db_select.php')
        .map((res: Response) => res.json())
        .catch(this.handleError);
  }
  getPeopl(id): Promise<People> {
    var url = this.peopleUrl+'db_select_one.php';
    console.log( url+' / '+JSON.stringify(id));
    let header = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(url, JSON.stringify(id), { headers: header }) .toPromise()
        .then((res: Response) => res.json())
        .catch(this.handleError);
  }
  updatePeopl(people:People): Promise<any> {
    var url = this.peopleUrl+'db_update.php';
    console.log( url+' / '+JSON.stringify(people));
    let header = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(url, JSON.stringify(people), { headers: header }) .toPromise()
        .then((res: Response) => res.json())
        .catch(this.handleError);
  }
  creatPeopl(people:People): Promise<any> {
    var url = this.peopleUrl+'db_insert.php';
    console.log( url+' / '+JSON.stringify(people));
    let header = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(url, JSON.stringify(people), { headers: header }) .toPromise()
        .then((res: Response) => res.json())
        .catch(this.handleError);
  }
  deletePeopl( people ): Promise<any> {
    var url = this.peopleUrl+'db_delete.php';
    console.log( url+' / '+JSON.stringify(people));
    let header = new Headers({ 'Content-Type': 'application/json' });
    return this.http.post(url, JSON.stringify(people), { headers: header }) .toPromise()
        .then((res: Response) => res.json())
        .catch(this.handleError);
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
  private handleErrorPromise (error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
