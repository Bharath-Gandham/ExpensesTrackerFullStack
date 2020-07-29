import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WelcomeService {
  responseToStoreLocally:any;
responseOfTypeBehaviourSubject:BehaviorSubject<any>=new BehaviorSubject(null);;
  constructor(private http:HttpClient) { }

  setDataFromHelloWorldAPI(name){
  this.http.get(`http://localhost:8080/helloworld-bean/pathvariable/${name}`).subscribe(
    Response=>{

      this.responseToStoreLocally=Response;
      this.responseOfTypeBehaviourSubject.next(this.responseToStoreLocally);
    }

  );
  }
  getDataFromHelloWorldAPI(){
    return this.responseOfTypeBehaviourSubject.asObservable();
  }
}
