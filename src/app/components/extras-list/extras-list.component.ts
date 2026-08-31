import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { ExtraOption } from '../../models/menu.models';
import { FoodIconComponent } from '../food-icon/food-icon.component';

@Component({
  selector: 'app-extras-list',
  standalone: true,
  imports: [CommonModule, FoodIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="step-3" class="section-step" aria-labelledby="step-3-heading">
      <!-- Step Header -->
      <div class="step-header">
        <div class="step-badge-indicator">
          <span class="step-number">٣</span>
          <!-- <span class="step-tag">الخطوة الثالثة</span> -->
        </div>
        <div class="step-titles">
          <div class="title-with-badge">
            <h2 id="step-3-heading" class="step-title">الإضافات والمقبلات الشهية</h2>
            <span class="optional-badge">اختياري (متعدد التحديد)</span>
          </div>
          <p class="step-subtitle">أضف مشروبات باردة، سلطة بلدية طازجة أو صوصات إضافية حسب ذوقك</p>
        </div>
      </div>

      <!-- Extras Grid (Multi-select toggles) -->
      <div class="extras-grid" aria-label="قائمة الإضافات المتاحة">
        @for (extra of orderService.extras; track extra.id) {
          <div 
            class="grill-card extra-card"
            [class.is-selected]="orderService.isExtraSelected(extra.id)"
            role="checkbox"
            [attr.aria-checked]="orderService.isExtraSelected(extra.id)"
            [attr.aria-label]="extra.title + '، السعر الإضافي ' + extra.price + ' دينار أردني'"
            tabindex="0"
            (click)="toggleExtra(extra.id)"
            (keydown.enter)="toggleExtra(extra.id)"
            (keydown.space)="$event.preventDefault(); toggleExtra(extra.id)">
            
            <!-- Checkbox Switch Box -->
            <div class="extra-check-box" aria-hidden="true">
              <div class="custom-checkbox">
                @if (orderService.isExtraSelected(extra.id)) {
                  <span class="check-icon">✓</span>
                }
              </div>
            </div>

            <!-- Icon Visual -->
            <div class="extra-icon-box">
              <app-food-icon [name]="extra.iconKey" size="md"></app-food-icon>
            </div>

            <!-- Title & Info -->
            <div class="extra-details">
              <h3 class="extra-title">{{ extra.title }}</h3>
              <p class="extra-desc">{{ extra.description }}</p>
            </div>

            <!-- Extra Price Tag & Toggle Status -->
            <div class="extra-price-box">
              <span class="extra-price-tag">
                + {{ extra.price.toFixed(2) }} <span class="extra-curr">د.أ</span>
              </span>
              <span class="toggle-status-text">
                @if (orderService.isExtraSelected(extra.id)) {
                  <span class="status-added">مضاف للسلة ✓</span>
                } @else {
                  <span class="status-add">+ أضف للطلب</span>
                }
              </span>
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
      background: linear-gradient(135deg, var(--color-charcoal-700) 0%, var(--color-charcoal-900) 100%);
      color: #FFFFFF;
      width: 54px;
      height: 54px;
      border-radius: var(--radius-md);
      box-shadow: 0 4px 12px rgba(28, 21, 18, 0.35);
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

    .title-with-badge {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      gap: 10px;
      margin-bottom: 4px;
    }

    .step-title {
      font-size: 1.65rem;
      font-weight: 800;
      color: var(--color-charcoal-900);
    }

    .optional-badge {
      background: var(--color-bg-subtle);
      color: var(--color-text-muted);
      border: 1px solid var(--color-card-border);
      font-size: 0.78rem;
      font-weight: 700;
      padding: 3px 10px;
      border-radius: var(--radius-full);
    }

    .step-subtitle {
      font-size: 0.95rem;
      color: var(--color-text-muted);
    }

    /* Extras List: Responsive list/cards */
    .extras-grid {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .extra-card {
      display: flex;
      align-items: center;
      padding: 14px 18px;
      border-width: 1.5px;
      cursor: pointer;
      user-select: none;
      gap: 14px;
      border-radius: var(--radius-md);
    }

    .extra-check-box {
      flex-shrink: 0;
    }

    .custom-checkbox {
      width: 24px;
      height: 24px;
      border-radius: var(--radius-xs);
      border: 2px solid var(--color-card-border);
      background: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all var(--transition-fast);
    }

    .extra-card.is-selected .custom-checkbox {
      background: var(--color-primary);
      border-color: var(--color-primary);
      box-shadow: 0 0 8px rgba(185, 28, 28, 0.4);
    }

    .check-icon {
      color: #FFFFFF;
      font-size: 0.95rem;
      font-weight: 900;
      line-height: 1;
    }

    .extra-icon-box {
      width: 50px;
      height: 50px;
      background: radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, transparent 70%);
      border-radius: var(--radius-sm);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .extra-details {
      flex: 1;
      min-width: 0;
    }

    .extra-title {
      font-size: 1.1rem;
      font-weight: 800;
      color: var(--color-charcoal-900);
      margin-bottom: 2px;
    }

    .extra-desc {
      font-size: 0.84rem;
      color: var(--color-text-muted);
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .extra-price-box {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      flex-shrink: 0;
      gap: 2px;
    }

    .extra-price-tag {
      font-family: var(--font-family-display);
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--color-primary);
    }

    .extra-curr {
      font-size: 0.8rem;
      font-weight: 700;
      color: var(--color-charcoal-700);
    }

    .toggle-status-text {
      font-size: 0.75rem;
      font-weight: 700;
    }

    .status-added {
      color: var(--color-fresh-green);
    }

    .status-add {
      color: var(--color-accent-hover);
    }

    @media (max-width: 520px) {
      .extra-card {
        padding: 12px 14px;
        gap: 10px;
      }
      .extra-desc {
        display: none;
      }
      .extra-title {
        font-size: 1rem;
      }
    }
  `]
})
export class ExtrasListComponent {
  readonly orderService = inject(OrderService);

  toggleExtra(id: string): void {
    this.orderService.toggleExtra(id);
  }
}
