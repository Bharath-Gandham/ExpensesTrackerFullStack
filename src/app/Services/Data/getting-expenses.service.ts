import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GettingExpensesService {
  responseToStoreLocally: any;
  responseOfTypeBehaviourSubject: BehaviorSubject<any> = new BehaviorSubject(null)
  constructor(private http: HttpClient) {

  }

  //get and set all expenses
  setExpensesFromURL(loginId) {
    this.http.get(`http://localhost:8080/users/${loginId}/expenses`).subscribe(
      Response => {

        this.responseToStoreLocally = Response;
        this.responseOfTypeBehaviourSubject.next(this.responseToStoreLocally);
      }

    );
  }
  getExpensesFromAPI() {
    return this.responseOfTypeBehaviourSubject.asObservable();
  }

  //Delete expense
  deleteExpenseWithId(loginId, expenseId) {
    this.http.delete(`http://localhost:8080/users/${loginId}/expenses/${expenseId}`).subscribe(
      Response => {
        this.responseToStoreLocally = Response;
        this.responseOfTypeBehaviourSubject.next(this.responseToStoreLocally);
      }
    );
    return this.responseOfTypeBehaviourSubject.asObservable();
  }

  //get and set single expense helpful for viewing and editing
setSingleExpenseWithIdAndUserName(loginId, expenseId){
  this.http.get(`http://localhost:8080/users/${loginId}/expenses/${expenseId}`).subscribe(
    Response => {
      this.responseToStoreLocally = Response;
      this.responseOfTypeBehaviourSubject.next(this.responseToStoreLocally);
    }
  );
}
getSingleExpenseWithIdAndUserName(){
  return this.responseOfTypeBehaviourSubject.asObservable();
}
updateExpenseWithIdAndUserNameAndExpense(loginId, expenseId, expense){
return this.http.put(`http://localhost:8080/users/${loginId}/expenses/${expenseId}`,expense);
}
createExpenseWithUserNameAndExpense(loginId,expense){
  return this.http.post(`http://localhost:8080/users/${loginId}/expenses`,expense);
}


}
