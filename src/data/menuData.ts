
export type MenuItem = {
  id: string;
  name: string;
  price: number;
  description?: string;
  image?: string;
  category: 'fries' | 'nuggets' | 'samosa' | 'momos' | 'rolls';
  featured?: boolean;
};

export type CartItem = MenuItem & {
  quantity: number;
};

export const menuItems: MenuItem[] = [
  // FRIES
  {
    id: 'fries-classic',
    name: 'Classic Salted Fries',
    price: 69,
    description: 'Perfectly crispy golden fries with a sprinkle of salt',
    category: 'fries',
    featured: true,
    image: '/fries-classic.jpg'
  },
  {
    id: 'fries-cheese',
    name: 'Cheese Fries',
    price: 89,
    description: 'Golden fries topped with melted premium cheese',
    category: 'fries',
    image: '/fries-cheese.jpg'
  },
  {
    id: 'fries-peri',
    name: 'Peri Peri Fries',
    price: 79,
    description: 'Crispy fries tossed in our signature peri peri spice mix',
    category: 'fries',
    featured: true,
    image: '/fries-peri.jpg'
  },
  {
    id: 'fries-spicy',
    name: 'Spicy Fries',
    price: 69,
    description: 'Hot and spicy fries with our special seasoning',
    category: 'fries',
    image: '/fries-spicy.jpg'
  },
  
  // NUGGETS
  {
    id: 'nuggets-veggie',
    name: 'Veggie Nuggets',
    price: 79,
    description: 'Crispy vegetable nuggets, perfect for snacking',
    category: 'nuggets',
    featured: true,
    image: '/nuggets-veggie.jpg'
  },
  {
    id: 'nuggets-corn',
    name: 'Corn Nuggets',
    price: 89,
    description: 'Crispy golden nuggets filled with sweet corn',
    category: 'nuggets',
    image: '/nuggets-corn.jpg'
  },
  {
    id: 'nuggets-cheese',
    name: 'Cheese Nuggets',
    price: 99,
    description: 'Crispy nuggets with a gooey cheese filling',
    category: 'nuggets',
    featured: true,
    image: '/nuggets-cheese.jpg'
  },
  {
    id: 'nuggets-paneer',
    name: 'Paneer Nuggets',
    price: 99,
    description: 'Crispy nuggets filled with soft paneer',
    category: 'nuggets',
    image: '/nuggets-paneer.jpg'
  },
  {
    id: 'nuggets-smilies',
    name: 'Smilies (5 pcs)',
    price: 69,
    description: 'Smile-shaped potato nuggets, a favorite with kids',
    category: 'nuggets',
    image: '/nuggets-smilies.jpg'
  },
  
  // SAMOSA
  {
    id: 'samosa-veg',
    name: 'Veg Samosa (2 pcs)',
    price: 25,
    description: 'Crispy triangular pastry filled with spiced vegetables',
    category: 'samosa',
    featured: true,
    image: '/samosa-veg.jpg'
  },
  {
    id: 'samosa-corn',
    name: 'Corn Samosa (2 pcs)',
    price: 29,
    description: 'Crispy samosa filled with spiced sweet corn',
    category: 'samosa',
    image: '/samosa-corn.jpg'
  },
  {
    id: 'samosa-paneer',
    name: 'Paneer Samosa (2 pcs)',
    price: 39,
    description: 'Crispy pastry filled with spiced paneer stuffing',
    category: 'samosa',
    image: '/samosa-paneer.jpg'
  },
  
  // MOMOS
  {
    id: 'momos-classic',
    name: 'Classic Veg Momos (Steamed/Fried)',
    price: 79,
    description: 'Soft dumplings filled with spiced vegetables',
    category: 'momos',
    featured: true,
    image: '/momos-classic.jpg'
  },
  {
    id: 'momos-paneer',
    name: 'Paneer Momos (Steamed/Fried)',
    price: 89,
    description: 'Soft dumplings filled with spiced paneer',
    category: 'momos',
    image: '/momos-paneer.jpg'
  },
  {
    id: 'momos-cheese',
    name: 'Corn and Cheese Momos (Steamed/Fried)',
    price: 99,
    description: 'Soft dumplings filled with corn and cheese',
    category: 'momos',
    featured: true,
    image: '/momos-cheese.jpg'
  },
  {
    id: 'momos-mushroom',
    name: 'Mushroom Momos (Steamed/Fried)',
    price: 99,
    description: 'Soft dumplings filled with spiced mushrooms',
    category: 'momos',
    image: '/momos-mushroom.jpg'
  },
  
  // ROLLS
  {
    id: 'rolls-spring',
    name: 'Spring Roll (3 pcs)',
    price: 49,
    description: 'Crispy rolls filled with vegetables and noodles',
    category: 'rolls',
    featured: true,
    image: '/rolls-spring.jpg'
  },
  {
    id: 'rolls-paneer',
    name: 'Paneer Roll (3 pcs)',
    price: 75,
    description: 'Crispy rolls filled with spiced paneer',
    category: 'rolls',
    image: '/rolls-paneer.jpg'
  }
];

export const categories = [
  { id: 'fries', name: 'FRIES', icon: '🍟' },
  { id: 'nuggets', name: 'NUGGETS', icon: '🧆' },
  { id: 'samosa', name: 'SAMOSA', icon: '🔺' },
  { id: 'momos', name: 'MOMOS', icon: '🥟' },
  { id: 'rolls', name: 'ROLLS', icon: '🌯' },
];

export function getItemsByCategory(category: string): MenuItem[] {
  return menuItems.filter(item => item.category === category);
}

export function getFeaturedItems(): MenuItem[] {
  return menuItems.filter(item => item.featured);
}

export function getItemById(id: string): MenuItem | undefined {
  return menuItems.find(item => item.id === id);
}
