
import { MenuItem, NavItem } from './types';

export const RESTAURANT_INFO = {
  name: 'Bestia',
  address: '2121 E 7th Pl, Los Angeles, CA 90021',
  phone: '213.514.5724',
  hours: 'Monday – Sunday, 5 PM – 11 PM',
  social: {
    instagram: 'https://instagram.com/bestiala',
    facebook: 'https://facebook.com/bestiala'
  },
  links: {
    reservations: 'https://www.opentable.com/bestia',
    giftCards: 'https://www.toasttab.com/bestia/giftcards',
    careers: '#'
  }
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#/' },
  { label: 'Menu', href: '#/menu' },
  { label: 'Events', href: '#/events' },
  { label: 'About', href: '#about' },
  { label: 'Reservations', href: '#reservations' },
  { label: 'Contact', href: '#contact' }
];

export const MENU_DATA: MenuItem[] = [
  // ANTIPASTI
  { id: 'a1', category: 'ANTIPASTI', name: 'Marinated Olives', description: 'confit herbs. garlic. star anise. cinnamon. burnt chili.', price: '9' },
  { id: 'a2', category: 'ANTIPASTI', name: 'Housemade Buttermilk Ricotta', description: 'aged balsamic. fennel pollen. herb oil. lava salt. grilled bread.', price: '21' },
  { id: 'a3', category: 'ANTIPASTI', name: 'Roasted Bone Marrow', description: 'spinach gnocchetti. crispy breadcrumbs. aged balsamic.', price: '29' },
  { id: 'a4', category: 'ANTIPASTI', name: 'Wagyu Beef Tartare', description: 'shallots. capers. cornichons. parsley. olive oil. grilled bread.', price: '28' },
  { id: 'a5', category: 'ANTIPASTI', name: 'Slow Roasted Mussels', description: 'nduja. preserved lemon. housemade butter. grilled bread.', price: '25' },
  { id: 'a6', category: 'ANTIPASTI', name: 'Chicken Liver Pate', description: 'shallot confit. balsamic vinegar. grilled bread.', price: '20' },

  // PIZZE
  { id: 'p1', category: 'PIZZE', name: 'Margherita', description: 'san marzano tomatoes. mozzarella di bufala. basil. olive oil.', price: '24' },
  { id: 'p2', category: 'PIZZE', name: 'Burrata Pizza', description: 'san marzano tomatoes. burrata. oregano. sea salt. chili oil.', price: '29' },
  { id: 'p3', category: 'PIZZE', name: 'Salumi', description: 'san marzano tomatoes. mozzarella. fennel seed. housemade salumi. olives.', price: '27' },
  { id: 'p4', category: 'PIZZE', name: 'Gorgonzola & Honey', description: 'mozzarella. gorgonzola dolce. local honey. thyme.', price: '25' },

  // PASTE
  { id: 'pa1', category: 'PASTE', name: 'Cavatelli alla Norcina', description: 'ricotta dumplings. housemade pork sausage. black truffles. grana padano.', price: '34' },
  { id: 'pa2', category: 'PASTE', name: 'Spaghetti Rustichella', description: 'dungeness crab. citrus. calabrian chili. thai basil.', price: '32' },
  { id: 'pa3', category: 'PASTE', name: 'Agnolotti alla Vaccinara', description: 'braised oxtail. pine nuts. currants. cocoa. brown butter.', price: '31' },
  { id: 'pa4', category: 'PASTE', name: 'Saffron Gnocchi', description: 'bone marrow. persian saffron. crispy leeks. grana padano.', price: '33' },

  // SECONDI
  { id: 's1', category: 'SECONDI', name: 'Grilled Whole Branzino', description: 'herb salad. charred lemon. salmoriglio sauce.', price: '48' },
  { id: 's2', category: 'SECONDI', name: 'Slow Roasted Lamb Neck', description: 'polenta. charred carrots. salsa cruda. lamb jus.', price: '45' },
  { id: 's3', category: 'SECONDI', name: 'Grilled Beef Ribeye', description: '32oz dry aged. charred scallions. aged balsamic. (serves 2-3).', price: '125' },

  // DOLCI
  { id: 'd1', category: 'DOLCI', name: 'Valrhona Chocolate Budino', description: 'salted caramel. olive oil. sea salt.', price: '14' },
  { id: 'd2', category: 'DOLCI', name: 'Zeppole', description: 'ricotta fritters. local strawberries. vanilla whipped cream.', price: '15' },
  { id: 'd3', category: 'DOLCI', name: 'Mascarpone Rice Pudding', description: 'espresso gelée. cocoa nibs. candied hazelnut.', price: '14' },

  // COCKTAILS
  { id: 'c1', category: 'COCKTAILS', name: 'Bestia Negroni', description: 'gin. campari. sweet vermouth. orange peel.', price: '17' },
  { id: 'c2', category: 'COCKTAILS', name: 'Chef’s Margarita', description: 'tequila blanco. lime. agave. smoked salt rim.', price: '16' },
  { id: 'c3', category: 'COCKTAILS', name: 'Italian Greyhound', description: 'vodka. grapefruit. rosemary. aperol.', price: '16' },

  // BEER & CIDER
  { id: 'b1', category: 'BEER & CIDER', name: 'Menabrea Bionda Lager', description: 'Italy. crisp & refreshing.', price: '9' },
  { id: 'b2', category: 'BEER & CIDER', name: 'Allagash White', description: 'Maine. belgian-style wheat.', price: '10' },

  // NON-ALCOHOLIC
  { id: 'n1', category: 'NON-ALCOHOLIC', name: 'Housemade Ginger Beer', description: 'fresh ginger. lime. cane sugar.', price: '8' },
  { id: 'n2', category: 'NON-ALCOHOLIC', name: 'San Pellegrino', description: 'sparkling natural mineral water. 750ml.', price: '9' },
  { id: 'n3', category: 'NON-ALCOHOLIC', name: 'Acqua Panna', description: 'still natural mineral water. 750ml.', price: '9' }
];

export const WINE_INFO = {
  text: "Our wine list features a curated selection of small-production Italian varietals alongside classic European vintages. We focus on natural and sustainable practices that highlight the terroir and tradition of winemaking.",
  corkage: "Corkage: $40 per 750ml bottle. Maximum 2 bottles per party. We kindly ask that the wine is not currently represented on our list."
};
