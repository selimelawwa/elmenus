import { Component, OnInit } from '@angular/core';
import { Restaurant } from '../restaurant';
//import { RESTAURANTS } from '../mock-restaurants';
import { RestaurantService } from '../restaurant.service';
//import { MessageService } from '../message.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  restaurants: Restaurant[]; //array of restaurant

  selectedRestaurant: Restaurant; //restaurant object

//  onSelect(restaurant: Restaurant): void {
//     this.selectedRestaurant = restaurant;
//     this.messageService.add(this.selectedRestaurant.name);
//   } 

  getRestaurants(): void {
    this.restaurantService.getRestaurants().subscribe(restaurants => this.restaurants = restaurants);
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

  constructor(private restaurantService: RestaurantService) { }

  ngOnInit() {
    this.getRestaurants();
  }

}
