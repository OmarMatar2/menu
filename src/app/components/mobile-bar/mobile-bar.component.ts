import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { FoodIconComponent } from '../food-icon/food-icon.component';

@Component({
  selector: 'app-mobile-bar',
  standalone: true,
  imports: [CommonModule, FoodIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="mobile-sticky-bar" aria-label="شريط الطلب السريع">
      <div class="bar-content">
        <!-- Order Info Summary -->
        <div class="bar-info">
          <div class="bar-meal-title">
            <span class="meal-badge">{{ orderService.selectedMeal().title }}</span>
            <span class="side-badge">+ {{ orderService.selectedSide().title }}</span>
          </div>
          <div class="bar-price-row">
            <span class="price-label">المجموع:</span>
            <span class="price-val">{{ orderService.totalPriceFormatted() }}</span>
            <span class="price-curr">د.أ</span>
          </div>
        </div>

        <!-- Action CTAs -->
        <div class="bar-actions">
          <a 
            href="#order-summary" 
            class="btn-view-summary"
            aria-label="عرض ملخص الطلب">
            الملخص
          </a>

          <a 
            [href]="orderService.whatsappUrl()" 
            target="_blank" 
            rel="noopener noreferrer"
            class="btn-quick-order"
            aria-label="إرسال الطلب عبر واتساب">
            <app-food-icon name="whatsapp" size="sm"></app-food-icon>
            <span>اطلب الآن</span>
          </a>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .mobile-sticky-bar {
      display: none;
      position: fixed;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(28, 21, 18, 0.96);
      backdrop-filter: blur(10px);
      -webkit-backdrop-filter: blur(10px);
      border-top: 2px solid var(--color-primary);
      padding: 10px 16px calc(10px + env(safe-area-inset-bottom));
      box-shadow: 0 -4px 20px rgba(0, 0, 0, 0.35);
      z-index: 999;
    }

    @media (max-width: 991px) {
      .mobile-sticky-bar {
        display: block;
      }
    }

    .bar-content {
      max-width: 600px;
      margin: 0 auto;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .bar-info {
      display: flex;
      flex-direction: column;
      min-width: 0;
    }

    .bar-meal-title {
      display: flex;
      align-items: center;
      gap: 6px;
      margin-bottom: 2px;
      overflow: hidden;
      white-space: nowrap;
    }

    .meal-badge {
      font-size: 0.82rem;
      font-weight: 800;
      color: #FEF3C7;
      text-overflow: ellipsis;
      overflow: hidden;
    }

    .side-badge {
      font-size: 0.72rem;
      color: #D1D5DB;
    }

    .bar-price-row {
      display: flex;
      align-items: baseline;
      gap: 4px;
    }

    .price-label {
      font-size: 0.75rem;
      color: #9CA3AF;
    }

    .price-val {
      font-family: var(--font-family-display);
      font-size: 1.3rem;
      font-weight: 900;
      color: #F87171;
    }

    .price-curr {
      font-size: 0.75rem;
      font-weight: 700;
      color: #E5E7EB;
    }

    .bar-actions {
      display: flex;
      align-items: center;
      gap: 8px;
      flex-shrink: 0;
    }

    .btn-view-summary {
      background: rgba(255, 255, 255, 0.12);
      color: #FFFFFF;
      font-family: var(--font-family-display);
      font-size: 0.82rem;
      font-weight: 700;
      padding: 9px 14px;
      border-radius: var(--radius-full);
      text-decoration: none;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .btn-quick-order {
      display: flex;
      align-items: center;
      gap: 6px;
      background: #25D366;
      color: #FFFFFF;
      font-family: var(--font-family-display);
      font-size: 0.9rem;
      font-weight: 800;
      padding: 9px 18px;
      border-radius: var(--radius-full);
      text-decoration: none;
      box-shadow: 0 2px 10px rgba(37, 211, 102, 0.4);
    }
  `]
})
export class MobileBarComponent {
  readonly orderService = inject(OrderService);
}
