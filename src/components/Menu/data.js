import product1 from '../../images/menu/product-1.jpg';
import product2 from '../../images/menu/product-2.jpg';
import product3 from '../../images/menu/product-3.jpg';

import drink1 from '../../images/menu/drink-1.jpg';
import drink2 from '../../images/menu/drink-2.jpg';
import drink3 from '../../images/menu/drink-3.jpg';

export const productData = [
  {
    id: 1,
    img: product1,
    alt: 'Pizza',
    name: 'Supreme Pizza',
    desc:
      'Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '40',
    button: 'Add to Cart'
  },
  {
    id: 2,
    img: product2,
    alt: 'Pizza',
    name: 'Hawaiian Paradise',
    desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '23',
    button: 'Add to Cart'
  },
  {
    id: 3,
    img: product3,
    alt: 'Pizza',
    name: 'Veggie Overload',
    desc:
      ' Marinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto',
    price: '35',
    button: 'Add to Cart'
  }
];

export const productDataTrie = [
  {
    id: 4,
    img: drink1,
    alt: 'Donuts',
    name: 'Espresso',
    desc:
      'Panas / Dingin Tetap Enak',
    price: '19',
    button: 'Add to Cart'
  },
  {
    id: 5,
    img: drink2,
    alt: 'Ice Cream',
    name: 'Cappuccino',
    desc:
      ' Panas / Dingin Tetap Enak',
    price: '99',
    button: 'Add to Cart'
  },
  {
    id: 6,
    img: drink3,
    alt: 'Brownie',
    name: 'Macchiato',
    desc:
      'Panas / Dingin Tetap Enak',
    price: '56',
    button: 'Add to Cart'
  }
];

export default productData;