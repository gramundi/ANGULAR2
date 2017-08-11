import { Injectable }    from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Observable } from 'rxjs/Observable';

import { Task } from './task';

@Injectable()
export class TaskService {

  private headers = new Headers({'Content-Type': 'application/json'});
  
  //Consume from Nodes+Express on nt001328
  //private tasksUrl = 'http://172.25.150.24:3000/todos';  // URL to web api
  //COnsume from ORDS from local machine
  private tasksUrl = 'http://localhost:8080/ords/labtec/tasks/'
  constructor(private http: Http) { }

  getTasks(): Observable<Task[]> {
    return     this.http.get(this.tasksUrl)
               //.map((response: Response) => <Task[]>(response.json()))
               .map(response => response.json().items as Task[])
               .catch(this.handleError);
  }

  private extractData(res: Response) {
        let body = res.json();
        console.log("My GOD"+body );
        return (body)
  }

  getTask(id: number): Promise<Task> {
    const url = `${this.tasksUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Task)
      .catch(this.handleError);
  }

  delete(tskid: string): Promise<void> {
     const url = `${this.tasksUrl}?id=${tskid}`;
     return this.http.delete(url,{headers: this.headers})
    .toPromise()
    .then(() => null)
    .catch(this.handleError);
  }
  
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}

