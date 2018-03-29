import { Component, OnInit, Input } from '@angular/core';
import { Restaurant } from '../restaurant';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.css']
})
export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant: Restaurant;

  constructor(private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private location: Location, private router: Router) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.getRestaurant();
      }
    });
  }

  ngOnInit(): void {

    this.getRestaurant();
  }



  goBack(): void {
    this.location.back();
  }

  getRestaurant(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.restaurantService.getRestaurant(id)
      .subscribe(restaurant => this.restaurant = restaurant);
  }

  save(): void {
    this.restaurantService.updateRestaurant(this.restaurant)
      .subscribe(() => this.goBack());
  }
}
