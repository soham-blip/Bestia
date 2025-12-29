
export interface MenuItem {
  id: string;
  category: string;
  name: string;
  description: string;
  price: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum Section {
  HERO = 'hero',
  MENU = 'menu',
  ABOUT = 'about',
  RESERVATIONS = 'reservations',
  EVENTS = 'events',
  CONTACT = 'contact'
}
