import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { SideOption } from '../../models/menu.models';
import { FoodIconComponent } from '../food-icon/food-icon.component';

@Component({
  selector: 'app-side-picker',
  standalone: true,
  imports: [CommonModule, FoodIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="step-2" class="section-step" aria-labelledby="step-2-heading">
      <!-- Step Header -->
      <div class="step-header">
        <div class="step-badge-indicator">
          <span class="step-number">٢</span>
          <!-- <span class="step-tag">الخطوة الثانية</span> -->
        </div>
        <div class="step-titles">
          <div class="title-with-badge">
            <h2 id="step-2-heading" class="step-title">اختر نوع التقديم المفضل</h2>
            <span class="included-free-badge">مشمول مجاناً مع الوجبة ✨</span>
          </div>
          <p class="step-subtitle">اختر الطريقة التي تحب أن تقدم بها وجبتك مع كامل مرفقاتها</p>
        </div>
      </div>

      <!-- Sides Grid (Radiogroup for accessibility) -->
      <div 
        class="sides-grid" 
        role="radiogroup" 
        aria-label="خيارات نوع تقديم الوجبة مع المرفقات">
        
        @for (side of orderService.sides; track side.id) {
          <div 
            class="grill-card side-card"
            [class.is-selected]="orderService.selectedSideId() === side.id"
            role="radio"
            [attr.aria-checked]="orderService.selectedSideId() === side.id"
            [attr.aria-label]="side.title + '، المرفقات: ' + side.includedItems.join('، ')"
            tabindex="0"
            (click)="selectSide(side.id)"
            (keydown.enter)="selectSide(side.id)"
            (keydown.space)="$event.preventDefault(); selectSide(side.id)">
            
            <!-- Side Top Row: Icon & Radio -->
            <div class="side-top-row">
              <div class="side-icon-box">
                <app-food-icon [name]="side.iconKey" size="lg"></app-food-icon>
              </div>

              <div class="radio-circle" aria-hidden="true">
                @if (orderService.selectedSideId() === side.id) {
                  <div class="radio-dot"></div>
                }
              </div>
            </div>

            <!-- Title & Description -->
            <div class="side-content">
              <h3 class="side-title">{{ side.title }}</h3>
              <p class="side-description">{{ side.description }}</p>

              <!-- Included Items Tags Box -->
              <div class="included-box">
                <span class="included-label">مرفق مع الوجبة:</span>
                <div class="items-tags-list">
                  @for (item of side.includedItems; track item) {
                    <span class="item-tag">
                      <span class="tag-check">✓</span>
                      {{ item }}
                    </span>
                  }
                </div>
              </div>

              <!-- Free Badge & Action -->
              <div class="side-footer">
                <span class="free-pill">
                  <span class="free-text">مجاناً</span>
                  <span class="free-sub">(مشمول مع الوجبة)</span>
                </span>

                <button 
                  type="button" 
                  class="select-action-btn"
                  [class.btn-selected]="orderService.selectedSideId() === side.id"
                  [attr.aria-pressed]="orderService.selectedSideId() === side.id"
                  (click)="$event.stopPropagation(); selectSide(side.id)">
                  @if (orderService.selectedSideId() === side.id) {
                    <span>تم الاختيار ✓</span>
                  } @else {
                    <span>تحديد التقديم</span>
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
      background: linear-gradient(135deg, var(--color-accent) 0%, var(--color-accent-hover) 100%);
      color: #FFFFFF;
      width: 54px;
      height: 54px;
      border-radius: var(--radius-md);
      box-shadow: 0 4px 12px rgba(217, 119, 6, 0.35);
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

    .included-free-badge {
      background: var(--color-fresh-green-bg);
      color: var(--color-fresh-green);
      border: 1px solid var(--color-fresh-green-border);
      font-size: 0.78rem;
      font-weight: 700;
      padding: 3px 12px;
      border-radius: var(--radius-full);
    }

    .step-subtitle {
      font-size: 0.95rem;
      color: var(--color-text-muted);
    }

    /* Grid Layout for Sides: 3 items responsive */
    .sides-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 18px;
    }

    @media (min-width: 768px) {
      .sides-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .side-card {
      display: flex;
      flex-direction: column;
      cursor: pointer;
      padding: var(--space-md);
      border-width: 2px;
      user-select: none;
      height: 100%;
    }

    .side-top-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: var(--space-sm);
    }

    .side-icon-box {
      width: 76px;
      height: 76px;
      background: radial-gradient(circle, rgba(217, 119, 6, 0.08) 0%, transparent 70%);
      border-radius: var(--radius-md);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: transform var(--transition-bounce);
    }

    .side-card:hover .side-icon-box {
      transform: scale(1.08);
    }

    .radio-circle {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      border: 2px solid var(--color-card-border);
      display: flex;
      align-items: center;
      justify-content: center;
      background: #FFFFFF;
      transition: border-color var(--transition-fast), background-color var(--transition-fast);
    }

    .side-card.is-selected .radio-circle {
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

    .side-content {
      display: flex;
      flex-direction: column;
      flex: 1;
    }

    .side-title {
      font-size: 1.25rem;
      font-weight: 800;
      color: var(--color-charcoal-900);
      margin-bottom: 6px;
    }

    .side-description {
      font-size: 0.85rem;
      color: var(--color-text-muted);
      line-height: 1.5;
      margin-bottom: var(--space-md);
    }

    .included-box {
      background: var(--color-bg-subtle);
      border: 1px solid var(--color-card-border);
      border-radius: var(--radius-sm);
      padding: 10px;
      margin-bottom: var(--space-md);
      flex: 1;
    }

    .included-label {
      display: block;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--color-charcoal-700);
      margin-bottom: 6px;
    }

    .items-tags-list {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }

    .item-tag {
      font-size: 0.82rem;
      font-weight: 600;
      color: var(--color-charcoal-800);
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .tag-check {
      color: var(--color-fresh-green);
      font-weight: 800;
      font-size: 0.9rem;
    }

    .side-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: var(--space-sm);
      border-top: 1px dashed var(--color-card-border);
    }

    .free-pill {
      display: flex;
      flex-direction: column;
    }

    .free-text {
      font-family: var(--font-family-display);
      font-size: 1.15rem;
      font-weight: 800;
      color: var(--color-fresh-green);
      line-height: 1;
    }

    .free-sub {
      font-size: 0.72rem;
      color: var(--color-text-subtle);
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

    .side-card:hover .select-action-btn {
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
export class SidePickerComponent {
  readonly orderService = inject(OrderService);

  selectSide(id: string): void {
    this.orderService.selectSide(id);
  }
}
