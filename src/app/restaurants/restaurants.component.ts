import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
//import { RESTAURANTS } from '../mock-restaurants';
import { RestaurantService } from '../restaurant.service';
//import { MessageService } from '../message.service';
import { Meal } from '../meal';
import {MealService} from '../meal.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]; //array of restaurant
  meals: Meal[];

  selectedRestaurant: Restaurant; //restaurant object

  getRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
  }
  getMeals(): void{
    this.mealService.getMeals().subscribe(meals => this.meals = meals);
  }


  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.restaurantService.addRestaurant({ name } as Restaurant)
      .subscribe(restaurant => {
        this.restaurants.push(restaurant);
      });
  }

  delete(restaurant: Restaurant): void {
    this.restaurants = this.restaurants.filter(h => h !== restaurant);
    this.restaurantService.deleteRestaurant(restaurant).subscribe();
  }

  constructor(private restaurantService: RestaurantService, private mealService: MealService) { }

  ngOnInit() {
    this.getRestaurants();
    this.getMeals();
    
  }

}
