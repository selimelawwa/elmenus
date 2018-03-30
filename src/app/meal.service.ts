import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Restaurant } from './restaurant';
import { Meal } from './meal';
import { MessageService } from './message.service';

@Injectable()
export class MealService {

  private mealsUrl = 'api/meals';

  constructor(private http: HttpClient,
    private messageService: MessageService) { }

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(this.mealsUrl)
      .pipe(
        tap(meals => console.log('fetched meals')) 
      );
  }

  getMeal(id: number): Observable<Meal> {
    const url = `${this.mealsUrl}/${id}`;
    return this.http.get<Meal>(url).pipe(
      tap(_ => this.log(`fetched meal id=${id}`)),
      catchError(this.handleError<Meal>(`getMeal id=${id}`))
    );
  }

  /**
 * Handle Http operation that failed.
 * Let the app continue.
 * @param operation - name of the operation that failed
 * @param result - optional value to return as the observable result
 */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
    
  }

  private log(message: string) {
    this.messageService.add('RestaurantService: ' + message);
  }


}

