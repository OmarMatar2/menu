import { Injectable, signal, computed } from '@angular/core';
import { MealOption, SideOption, ExtraOption } from '../models/menu.models';
import { MEAL_OPTIONS, SIDE_OPTIONS, EXTRA_OPTIONS, RESTAURANT_INFO } from '../data/menu.data';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // Available Menus Data
  readonly meals = MEAL_OPTIONS;
  readonly sides = SIDE_OPTIONS;
  readonly extras = EXTRA_OPTIONS;
  readonly restaurant = RESTAURANT_INFO;

  // Reactive State Signals
  readonly selectedMealId = signal<string>('whole-chicken');
  readonly selectedSideId = signal<string>('side-rice');
  readonly selectedExtraIds = signal<string[]>([]);
  readonly isCopied = signal<boolean>(false);

  // Computed Derived State
  readonly selectedMeal = computed<MealOption>(() => {
    return this.meals.find(m => m.id === this.selectedMealId()) || this.meals[1];
  });

  readonly selectedSide = computed<SideOption>(() => {
    return this.sides.find(s => s.id === this.selectedSideId()) || this.sides[0];
  });

  readonly selectedExtras = computed<ExtraOption[]>(() => {
    const ids = this.selectedExtraIds();
    return this.extras.filter(extra => ids.includes(extra.id));
  });

  readonly mealPrice = computed<number>(() => {
    return this.selectedMeal().price;
  });

  readonly extrasPrice = computed<number>(() => {
    return this.selectedExtras().reduce((total, extra) => total + extra.price, 0);
  });

  readonly totalPrice = computed<number>(() => {
    return this.mealPrice() + this.extrasPrice();
  });

  readonly totalPriceFormatted = computed<string>(() => {
    return this.totalPrice().toFixed(2);
  });

  readonly isStep1Complete = computed<boolean>(() => !!this.selectedMealId());
  readonly isStep2Complete = computed<boolean>(() => !!this.selectedSideId());

  // Formatted WhatsApp Message
  readonly orderSummaryMessage = computed<string>(() => {
    const meal = this.selectedMeal();
    const side = this.selectedSide();
    const extrasList = this.selectedExtras();
    const total = this.totalPriceFormatted();

    let text = `🔥 *طلب جديد من دجاجة بالقنية* 🔥\n`;
    text += `---------------------------------\n`;
    text += `🍗 *الوجبة:* ${meal.title} (${meal.price.toFixed(2)} د.أ)\n`;
    text += `🍽️ *نوع التقديم:* ${side.title} (مشمول مجاناً)\n`;
    text += `   - يحتوي: ${side.includedItems.join(' + ')}\n`;

    if (extrasList.length > 0) {
      text += `➕ *الإضافات:*\n`;
      extrasList.forEach(e => {
        text += `   • ${e.title} (+${e.price.toFixed(2)} د.أ)\n`;
      });
    } else {
      text += `➕ *الإضافات:* لا يوجد\n`;
    }

    text += `---------------------------------\n`;
    text += `💰 *المجموع الكلي:* ${total} د.أ\n\n`;
    text += `من طلبك تبدأ الحكاية ✨ دجاجنا طازج ومكوناته فريش`;
    return text;
  });

  // Direct WhatsApp Web / App Link
  readonly whatsappUrl = computed<string>(() => {
    const phone = '962789898226'; // Jordan international format
    const text = encodeURIComponent(this.orderSummaryMessage());
    return `https://wa.me/${phone}?text=${text}`;
  });

  // Action Methods
  selectMeal(id: string): void {
    this.selectedMealId.set(id);
  }

  selectSide(id: string): void {
    this.selectedSideId.set(id);
  }

  toggleExtra(id: string): void {
    this.selectedExtraIds.update(current => {
      if (current.includes(id)) {
        return current.filter(item => item !== id);
      } else {
        return [...current, id];
      }
    });
  }

  isExtraSelected(id: string): boolean {
    return this.selectedExtraIds().includes(id);
  }

  resetOrder(): void {
    this.selectedMealId.set('whole-chicken');
    this.selectedSideId.set('side-rice');
    this.selectedExtraIds.set([]);
  }

  async copyOrderSummary(): Promise<boolean> {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(this.orderSummaryMessage());
        this.isCopied.set(true);
        setTimeout(() => this.isCopied.set(false), 3000);
        return true;
      }
      return false;
    } catch {
      return false;
    }
  }
}
