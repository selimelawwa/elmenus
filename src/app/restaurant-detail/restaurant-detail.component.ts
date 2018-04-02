import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../restaurant';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { RestaurantService } from '../restaurant.service';
import { Meal } from '../meal';
import { MealService } from '../meal.service';


@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant: Restaurant;
  @Input() meals: Meal[];

  constructor(private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private location: Location, private router: Router, private mealService: MealService) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.getRestaurant();
      }
    });
  }

  ngOnInit(): void {

    this.getRestaurant();
    this.getMeals();
  }



  goBack(): void {
    this.location.back();
  }

  getRestaurant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurant(id)
      .subscribe(restaurant => this.restaurant = restaurant);
   
    
  }

  // getMeals(): void {
  //   this.mealService.getMeals().subscribe(meals => this.meals = meals);
  // }

  getMeals(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.mealService.getMealsofRestaurant(id).subscribe(meals => this.meals = meals);
  }


  save(): void {
    this.restaurantService.updateRestaurant(this.restaurant)
      .subscribe(() => this.goBack());
  }
}
