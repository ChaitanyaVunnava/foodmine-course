import { Food } from "src/app/shared/models/Food";
import { Tag } from "src/app/shared/models/tag";

export const sample_foods: Food[]=[
    {
        id: '1',
        name: 'Burger',
        price: 5,
        tags: [ 'FastFood'],
        favorite: false,
        stars: 3,
        imageUrl: 'assets/burger.webp',
        origins: ['American'],
        cookTime: '10-15 min'
    },
    {
        id: '2',
        name: 'Drumsticks',
        price: 3,
        tags: [ 'FastFood'],
        favorite: false,
        stars: 3,
        imageUrl: 'assets/drumsticks.jpeg',
        origins: ['India'],
        cookTime: '15-20 min'
    },
    {
        id: '3',
        name: 'Noodle Salad',
        price: 7,
        tags: [ 'FastFood', 'Vegetarian','Lunch'],
        favorite: false,
        stars: 3.5,
        imageUrl: 'assets/noodle-salad.jpeg',
        origins: ['Spain'],
        cookTime: '20-25 min'
    },
    {
        id: '4',
        name: 'Potato Wedges',
        price: 5,
        tags: ['Vegetarian', 'FastFood'],
        favorite: true,
        stars: 4,
        imageUrl: 'assets/potato-wedges.jpeg',
        origins: ['Japan'],
        cookTime: '10-15 min'
    },
    {
        id: '5',
        name: 'Classic Cheese Pizza',
        price: 12,
        tags: ['Pizza','Vegetarian'],
        favorite: false,
        stars: 4,
        imageUrl: 'assets/classic-cheese-pizza.jpeg',
        origins: ['America'],
        cookTime: '10-15 min' 
    },
    {
        id: '6',
        name: 'Tacos',
        price: 2,
        tags: ['Tacos'],
        favorite: true,
        stars: 5,
        imageUrl: 'assets/tacos.jpeg',
        origins: ['American'],
        cookTime: '15-25 min'
    },
    {
        id: '7',
        name: 'Vegetarian Fried Rice',
        price: 10,
        tags: ['Lunch', 'Vegetarian'],
        favorite: false,
        stars: 5,
        imageUrl: 'assets/vegetarian-fried-rice.jpeg',
        origins: ['India'],
        cookTime: '20-25 min'
    },
    {
        id: '8',
        name: 'Rainbow Pizza',
        price: 10,
        tags: ['Pizza'],
        favorite: false,
        stars: 3,
        imageUrl: 'assets/rainbow-pizza.jpeg',
        origins: ['American'],
        cookTime: '10-15 min'
    },
    {
        id: '9',
        name: 'Garlic Chicken Pizza',
        price: 15,
        tags: ['Pizza'],
        favorite: true,
        stars: 4,
        imageUrl: 'assets/garlic-chicken-pizza.jpeg',
        origins: ['America'],
        cookTime: '10-15 min'
    }
]

export const sample_tags:Tag[]=[
    {name:'All', count: 9},
    {name:'FastFood', count: 4},
    {name:'Pizza', count: 3},
    {name: 'Lunch', count: 2},
    {name: 'Vegetarian', count:4},
    {name: 'Tacos', count: 1}
]