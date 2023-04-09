import { Injectable } from '@angular/core';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  getFoods(): Food[] {
    return [
      {
        id: 1,
        title: 'Enchiladas',
        price: 35,
        image: 'assets/images/foods/enchiladas.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 2,
        title: 'Tacos',
        price: 16,
        image: 'assets/images/foods/tacos.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 3,
        title: 'Sopes',
        price: 26,
        image: 'assets/images/foods/sopes.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 4,
        title: 'Quesadillas',
        price: 20,
        image: 'assets/images/foods/quesadillas.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 5,
        title: 'Pozole',
        price: 80,
        image: 'assets/images/foods/pozole.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 6,
        title: 'Mole',
        price: 63,
        image: 'assets/images/foods/mole.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 7,
        title: 'Huevos',
        price: 40,
        image: 'assets/images/foods/huevo.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 8,
        title: 'Aguachile',
        price: 130,
        image: 'assets/images/foods/aguachile.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 9,
        title: 'Birria',
        price: 100,
        image: 'assets/images/foods/birria.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 10,
        title: 'Barbacoa',
        price: 10,
        image: 'assets/images/foods/barbacoa.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 11,
        title: 'Chiles rellenos',
        price: 30,
        image: 'assets/images/foods/chiles.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
      {
        id: 12,
        title: 'Carne asada',
        price: 100,
        image: 'assets/images/foods/carne.png',
        description:
          'In addition to the freshet seafood, there are corn, cilantro, and tomatoes: their first became mayonnise, the second - cream, the third - spice tomato water.',
      },
    ];
  }

  getFood(id: number): Food {
    return this.getFoods().find((food) => food.id === id);
  }
}
