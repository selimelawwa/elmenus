import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const restaurants =
      [{ id: 1, name: 'Hardees', address: 'Alexandria City Centre, KM6 Alexandria Desert Road', phone: '19066', logo: 'assets/hardees.jpg', food: 'Burger, Fast Food, Sandwiches' },
      { id: 2, name: 'KFC', address: 'Inside 6th Of October Village, Rd.30', phone: '19019', logo: 'assets/kfc.jpg', food: 'Fast Food, Chicken' },
      { id: 3, name: 'Balbaa', address: ' 154 malk hefny street, beside elmontazah', phone: '16941', logo: 'assets/balbaa.jpg', food: 'Oriental, Grill' },
      { id: 4, name: 'Pizza Hut', address: 'Alexandria City Centre, KM6 Alexandria Desert Rd.', phone: '1900', logo: 'assets/pizzahut.jpg', food: 'Pizza, Italian' },
      { id: 5, name: 'Dominos Pizza', address: ' 705 El Guish Road, El Asafra', phone: '19223', logo: 'assets/dominos.jpg', food: 'Pizza, Fast Food, Italian' },
      { id: 6, name: 'Papa Jones', address: '464 El Guish Road, Sidi Beshr Bahary', phone: '19277', logo: 'assets/papajones.jpg', food: 'Pizza, Fast Food, Italian' },
      { id: 7, name: 'Sultan Ayub', address: ' 362 El Guish Road', phone: '16365, 01110067887, 01110067885, 16365', logo: 'assets/sa.jpg', food: 'Oriental, Grill,Chicken' },
      { id: 8, name: 'Bruxies', address: ' 26 Ismailiya Street, Kafr Abdo', phone: ' 035448994', logo: 'assets/bruxies.jpg', food: 'European, Burger' }];
    

      const meals = [
        {id:1, rid: 1, name: 'Cheese Burger',photo:'assets/burger.jpg', price: '55 EGP', ingredients:'Burger, blue cheese sauce, onions, roasted tomatoes, American cheese'},
        { id: 2, rid: 1, name: 'Italian Angus Burger', photo: 'assets/burger2.jpg', price: '65 EGP', ingredients: 'Angus burger, red onion, tomatoes, lettuce, mozzarella cheese, garlic sauce, spicy Bruschetta sauce: tomato with grilled red pepper, served in brioche bread' },
        { id: 3, rid: 1, name: 'Spicy Chicken Rapper', photo: 'assets/burger3.jpg', price: '45 EGP', ingredients: 'Spicy chicken tender, topped with American cheese, lettuce and Santa Fe sauce, served in tortilla brea' },
        { id: 4, rid: 5, name: 'Pepperoni Pizza', photo: 'assets/pizza1.jpg', price: '85 EGP', ingredients: 'layers of beef pepperoni and mozzarella cheese' },
        { id: 5, rid: 5, name: 'Deluxe Pizza', photo: 'assets/pizza2.jpg', price: '76 EGP', ingredients: 'beef pepperoni, Italian sausages, green peppers, mushrooms and onions' },
        { id: 6, rid: 5, name: 'Veggie Pizza', photo: 'assets/pizza3.jpg', price: '66 EGP', ingredients: 'green peppers, onions, mushrooms, tomatoes and black olives' },
        { id: 7, rid: 6, name: 'Pepperoni Pizza', photo: 'assets/pizza1.jpg', price: '85 EGP', ingredients: 'layers of beef pepperoni and mozzarella cheese' },
        { id: 8, rid: 6, name: 'Deluxe Pizza', photo: 'assets/pizza2.jpg', price: '78 EGP', ingredients: 'beef pepperoni, Italian sausages, green peppers, mushrooms and onions' },
        { id: 9, rid: 6, name: 'Veggie Pizza', photo: 'assets/pizza3.jpg', price: '87 EGP', ingredients: 'green peppers, onions, mushrooms, tomatoes and black olives' },
        { id: 10, rid: 4, name: 'Pepperoni Pizza', photo: 'assets/pizza1.jpg', price: '85 EGP', ingredients: 'layers of beef pepperoni and mozzarella cheese' },
        { id: 11, rid: 4, name: 'Meat lovers Pizza', photo: 'assets/pizza2.jpg', price: '76 EGP', ingredients: 'beef pepperoni, Italian sausages, green peppers, mushrooms and onions' },
        { id: 12, rid: 4, name: 'Veggie Pizza', photo: 'assets/pizza3.jpg', price: '66 EGP', ingredients: 'green peppers, onions, mushrooms, tomatoes and black olives' },
        { id: 13, rid: 8, name: 'Cheese Burger', photo: 'assets/burger.jpg', price: '55 EGP', ingredients: 'Burger, blue cheese sauce, onions, roasted tomatoes, American cheese' },
        { id: 14, rid: 8, name: 'Italian Angus Burger', photo: 'assets/burger2.jpg', price: '65 EGP', ingredients: 'Angus burger, red onion, tomatoes, lettuce, mozzarella cheese, garlic sauce, spicy Bruschetta sauce: tomato with grilled red pepper, served in brioche bread' },
        { id: 15, rid: 8, name: 'Spicy Chicken Rapper', photo: 'assets/burger3.jpg', price: '45 EGP', ingredients: 'Spicy chicken tender, topped with American cheese, lettuce and Santa Fe sauce, served in tortilla brea' },
        { id: 16, rid: 7, name: 'Grilled Kofta', photo: 'assets/kofta.jpg', price: '85 EGP', ingredients: ' 1/3 Grilled Kofta' },
        { id: 17, rid: 7, name: 'Grilled Ribs', photo: 'assets/ribs.jpg', price: '90 EGP', ingredients: ' 1/3 Grilled veal ribs' },
        { id: 18, rid: 7, name: 'Grilled Kebab', photo: 'assets/kebab.jpg', price: '90 EGP', ingredients: ' 1/3 Grilled Kebab' },
        { id: 19, rid: 7, name: 'Mombar', photo: 'assets/mombar.jpg', price: '85 EGP', ingredients: '' },
        { id: 20, rid: 3, name: 'Grilled Kofta', photo: 'assets/kofta.jpg', price: '85 EGP', ingredients: ' 1/3 Grilled Kofta' },
        { id: 21, rid: 3, name: 'Grilled Ribs', photo: 'assets/ribs.jpg', price: '90 EGP', ingredients: ' 1/3 Grilled veal ribs' },
        { id: 22, rid: 3, name: 'Grilled Kebab', photo: 'assets/kebab.jpg', price: '90 EGP', ingredients: ' 1/3 Grilled Kebab' },
        { id: 23, rid: 3, name: 'Mombar', photo: 'assets/mombar.jpg', price: '85 EGP', ingredients: '' },

      ]
    return { restaurants,meals };
  }
}