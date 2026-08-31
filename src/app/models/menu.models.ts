export type BadgeType = 'gold' | 'flame' | 'green';

export interface MealOption {
  id: string;
  title: string;
  price: number;
  servesText: string;
  chickensCount: number;
  badge?: string;
  badgeType?: BadgeType;
  description: string;
  iconKey: string;
  popular?: boolean;
}

export interface SideOption {
  id: string;
  title: string;
  includedItems: string[];
  description: string;
  iconKey: string;
  badgeText?: string;
}

export interface ExtraOption {
  id: string;
  title: string;
  price: number;
  category: 'drink' | 'salad' | 'dairy' | 'sauce';
  description: string;
  iconKey: string;
}

export interface OrderBreakdown {
  meal: MealOption;
  side: SideOption;
  extras: ExtraOption[];
  mealPrice: number;
  extrasPrice: number;
  totalPrice: number;
}
