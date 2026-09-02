import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { MealOption } from '../../models/menu.models';
import { FoodIconComponent } from '../food-icon/food-icon.component';

@Component({
  selector: 'app-meal-picker',
  standalone: true,
  imports: [CommonModule, FoodIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="step-1" class="section-step" aria-labelledby="step-1-heading">
      <!-- Step Header -->
      <div class="step-header">
        <div class="step-badge-indicator">
          <span class="step-number">١</span>
          <!-- <span class="step-tag">الخطوة الأولى</span> -->
        </div>
        <div class="step-titles">
          <h2 id="step-1-heading" class="step-title">اختر الوجبة وحجم الدجاج</h2>
          <p class="step-subtitle">دجاج مشوي بخلطة التوابل الأردنية الشهية</p>
        </div>
      </div>

      <!-- Meal Cards Grid (Radiogroup for accessibility) -->
      <div 
        class="meal-grid" 
        role="radiogroup" 
        aria-label="خيارات أحجام وجبات الدجاج المشوي">
        
        @for (meal of orderService.meals; track meal.id) {
          <div 
            class="grill-card meal-card"
            [class.is-selected]="orderService.selectedMealId() === meal.id"
            [class.is-popular]="meal.popular"
            role="radio"
            [attr.aria-checked]="orderService.selectedMealId() === meal.id"
            [attr.aria-label]="meal.title + '، ' + meal.servesText + '، السعر ' + meal.price + ' دينار أردني'"
            tabindex="0"
            (click)="selectMeal(meal.id)"
            (keydown.enter)="selectMeal(meal.id)"
            (keydown.space)="$event.preventDefault(); selectMeal(meal.id)">
            
            <!-- Card Visual Photo (full-bleed, spans the card's top edge to edge) -->
            <div class="meal-visual">
              <app-food-icon [name]="meal.iconKey" size="full"></app-food-icon>

              <!-- Optional Badge ribbon (e.g. وجبة التوفير, الوجبة الاقتصادية, الوجبة العائلية) -->
              @if (meal.badge) {
                <div class="card-badge-container">
                  <span 
                    class="badge-pill" 
                    [class.badge-gold]="meal.badgeType === 'gold'"
                    [class.badge-flame]="meal.badgeType === 'flame'"
                    [class.badge-green]="meal.badgeType === 'green'">
                    @if (meal.badgeType === 'flame') {
                      <app-food-icon name="flame" size="sm"></app-food-icon>
                    }
                    {{ meal.badge }}
                  </span>
                </div>
              }
            </div>

            <!-- Card Content Body -->
            <div class="meal-body">
              <div class="meal-title-row">
                <h3 class="meal-title">{{ meal.title }}</h3>
                <div class="selection-indicator" aria-hidden="true">
                  <div class="radio-circle">
                    @if (orderService.selectedMealId() === meal.id) {
                      <div class="radio-dot"></div>
                    }
                  </div>
                </div>
              </div>

              <div class="meal-serves-pill">
                <span class="serves-icon">👥</span>
                <span class="serves-text">{{ meal.servesText }}</span>
              </div>

              <p class="meal-desc">{{ meal.description }}</p>

              <!-- Price & CTA Footer -->
              <div class="meal-footer">
                <div class="price-display">
                  <span class="price-number">{{ meal.price }}</span>
                  <span class="price-currency">د.أ</span>
                </div>

                <button 
                  type="button" 
                  class="select-action-btn"
                  [class.btn-selected]="orderService.selectedMealId() === meal.id"
                  [attr.aria-pressed]="orderService.selectedMealId() === meal.id"
                  (click)="$event.stopPropagation(); selectMeal(meal.id)">
                  @if (orderService.selectedMealId() === meal.id) {
                    <span>تم الاختيار ✓</span>
                  } @else {
                    <span>اختيار الوجبة</span>
                  }
                </button>
              </div>
            </div>
          </div>
        }
      </div>
    </section>
  `,
  styles: [`
    .section-step {
      margin-bottom: var(--space-3xl);
      scroll-margin-top: 24px;
    }

    .step-header {
      display: flex;
      align-items: flex-start;
      gap: var(--space-md);
      margin-bottom: var(--space-xl);
    }

    .step-badge-indicator {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, var(--color-primary) 0%, var(--color-primary-dark) 100%);
      color: #FFFFFF;
      width: 54px;
      height: 54px;
      border-radius: var(--radius-md);
      box-shadow: 0 4px 12px rgba(185, 28, 28, 0.35);
      flex-shrink: 0;
    }

    .step-number {
      font-family: var(--font-family-display);
      font-size: 1.4rem;
      font-weight: 900;
      line-height: 1;
    }

    .step-tag {
      font-size: 0.6rem;
      font-weight: 700;
      opacity: 0.9;
    }

    .step-titles {
      flex: 1;
    }

    .step-title {
      font-size: 1.65rem;
      font-weight: 800;
      color: var(--color-charcoal-900);
      margin-bottom: 4px;
    }

    .step-subtitle {
      font-size: 0.95rem;
      color: var(--color-text-muted);
    }

    /* Grid Layout: Responsive 1-col mobile, 2-col tablet, 3-col desktop */
    .meal-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 18px;
    }

    @media (min-width: 640px) {
      .meal-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (min-width: 1024px) {
      .meal-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .meal-card {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      border-width: 2px;
      user-select: none;
      position: relative;
      overflow: hidden; /* clips the full-bleed photo to the card's rounded corners */
    }

    .meal-card.is-popular {
      border-color: var(--color-accent-border);
    }

    .card-badge-container {
      position: absolute;
      top: 10px;
      left: 10px;
      z-index: 2;
    }

    .badge-pill {
      font-family: var(--font-family-display);
      font-size: 0.75rem;
      font-weight: 800;
      padding: 4px 10px;
      border-radius: var(--radius-full);
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
      display: inline-flex;
      align-items: center;
      gap: 4px;
    }

    .meal-visual {
      position: relative;
      width: 100%;
      aspect-ratio: 4 / 3;
      overflow: hidden;
      background: radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, transparent 70%);
    }

    /* subtle fade at the bottom of the photo so the badge/body edge reads cleanly */
    .meal-visual::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 0.12) 100%);
      pointer-events: none;
    }

    /* app-food-icon's host element rendered with size="full" — styled by tag since
       its internal template is view-encapsulated and not reachable from here */
    .meal-visual app-food-icon {
      display: flex;
      width: 100%;
      height: 100%;
      transition: transform var(--transition-bounce);
    }

    .meal-card:hover .meal-visual app-food-icon {
      transform: scale(1.06);
    }

    .meal-body {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: var(--space-md);
    }

    .meal-title-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      margin-bottom: 6px;
    }

    .meal-title {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--color-charcoal-900);
    }

    .radio-circle {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2px solid var(--color-card-border);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: border-color var(--transition-fast), background-color var(--transition-fast);
      background: #FFFFFF;
    }

    .meal-card.is-selected .radio-circle {
      border-color: var(--color-primary);
      background: var(--color-primary-light);
    }

    .radio-dot {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: var(--color-primary);
      box-shadow: 0 0 6px rgba(185, 28, 28, 0.6);
    }

    .meal-serves-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: var(--color-bg-subtle);
      border: 1px solid var(--color-card-border);
      padding: 3px 10px;
      border-radius: var(--radius-full);
      font-size: 0.8rem;
      font-weight: 600;
      color: var(--color-text-muted);
      width: fit-content;
      margin-bottom: var(--space-sm);
    }

    .serves-icon {
      font-size: 0.85rem;
    }

    .meal-desc {
      font-size: 0.88rem;
      color: var(--color-text-muted);
      line-height: 1.5;
      margin-bottom: var(--space-md);
      flex: 1;
    }

    .meal-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: var(--space-sm);
      border-top: 1px dashed var(--color-card-border);
    }

    .price-display {
      display: flex;
      align-items: baseline;
      gap: 3px;
    }

    .price-number {
      font-family: var(--font-family-display);
      font-size: 1.5rem;
      font-weight: 900;
      color: var(--color-primary);
    }

    .price-currency {
      font-size: 0.9rem;
      font-weight: 700;
      color: var(--color-charcoal-700);
    }

    .select-action-btn {
      font-family: var(--font-family-display);
      font-size: 0.85rem;
      font-weight: 700;
      padding: 7px 14px;
      border-radius: var(--radius-full);
      background: var(--color-bg-subtle);
      color: var(--color-charcoal-800);
      border: 1px solid var(--color-card-border);
      transition: all var(--transition-fast);
    }

    .meal-card:hover .select-action-btn {
      background: var(--color-accent-light);
      border-color: var(--color-accent-border);
      color: var(--color-accent-hover);
    }

    .select-action-btn.btn-selected {
      background: var(--color-primary);
      color: #FFFFFF;
      border-color: var(--color-primary-dark);
      box-shadow: 0 2px 8px rgba(185, 28, 28, 0.35);
    }
  `]
})
export class MealPickerComponent {
  readonly orderService = inject(OrderService);

  selectMeal(id: string): void {
    this.orderService.selectMeal(id);
  }
}