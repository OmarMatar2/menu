import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { FoodIconComponent } from '../food-icon/food-icon.component';

@Component({
  selector: 'app-order-summary',
  standalone: true,
  imports: [CommonModule, FoodIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <aside id="order-summary" class="summary-section" aria-label="ملخص تفاصيل الطلب والمجموع">
      <div class="summary-card">
        <!-- Receipt Top Header -->
        <div class="receipt-header">
          <div class="receipt-seal">
            <app-food-icon name="flame" size="sm"></app-food-icon>
          </div>
          <h2 class="receipt-title">ملخص طلبك</h2>
          <p class="receipt-sub">« من طلبك تبدأ الحكاية »</p>
        </div>

        <!-- Perforated Tear Line -->
        <div class="perforated-line" aria-hidden="true">
          <div class="tear-notch notch-right"></div>
          <div class="tear-dots"></div>
          <div class="tear-notch notch-left"></div>
        </div>

        <!-- Live Breakdown Items -->
        <div class="receipt-body">
          <!-- Main Meal Selected -->
          <div class="receipt-item main-item">
            <div class="item-visual">
              <!-- <app-food-icon [name]="orderService.selectedMeal().iconKey" size="sm"></app-food-icon> -->
            </div>
            <div class="item-info">
              <span class="item-name">{{ orderService.selectedMeal().title }}</span>
              <span class="item-note">{{ orderService.selectedMeal().servesText }}</span>
            </div>
            <div class="item-price">
              <span>{{ orderService.selectedMeal().price.toFixed(2) }}</span>
              <span class="curr">د.أ</span>
            </div>
          </div>

          <!-- Side Selected (Free) -->
          <div class="receipt-item side-item">
            <div class="item-visual">
              <app-food-icon [name]="orderService.selectedSide().iconKey" size="sm"></app-food-icon>
            </div>
            <div class="item-info">
              <span class="item-name">{{ orderService.selectedSide().title }}</span>
              <span class="item-note">({{ orderService.selectedSide().includedItems.join('، ') }})</span>
            </div>
            <div class="item-price free-price">
              <span>مجاناً</span>
            </div>
          </div>

          <!-- Extras Selected List -->
          @if (orderService.selectedExtras().length > 0) {
            <div class="extras-divider">
              <span>الإضافات المختارة ({{ orderService.selectedExtras().length }})</span>
            </div>

            @for (extra of orderService.selectedExtras(); track extra.id) {
              <div class="receipt-item extra-item">
                <div class="item-visual">
                  <app-food-icon [name]="extra.iconKey" size="sm"></app-food-icon>
                </div>
                <div class="item-info">
                  <span class="item-name">{{ extra.title }}</span>
                  <button 
                    type="button" 
                    class="remove-extra-btn" 
                    (click)="orderService.toggleExtra(extra.id)"
                    aria-label="إزالة الإضافة">
                    إلغاء ✕
                  </button>
                </div>
                <div class="item-price">
                  <span>+{{ extra.price.toFixed(2) }}</span>
                  <span class="curr">د.أ</span>
                </div>
              </div>
            }
          }

          <!-- Calculation Subtotals -->
          <div class="subtotal-rows">
            <div class="calc-row">
              <span class="calc-label">سعر الوجبة الأساسية</span>
              <span class="calc-val">{{ orderService.mealPrice().toFixed(2) }} د.أ</span>
            </div>
            
            <div class="calc-row">
              <span class="calc-label">نوع التقديم والمرفقات</span>
              <span class="calc-val text-green">0.00 د.أ (مجاناً)</span>
            </div>

            @if (orderService.extrasPrice() > 0) {
              <div class="calc-row">
                <span class="calc-label">مجموع الإضافات</span>
                <span class="calc-val">+{{ orderService.extrasPrice().toFixed(2) }} د.أ</span>
              </div>
            }
          </div>

          <!-- Total Callout -->
          <div class="total-block">
            <div class="total-label-group">
              <span class="total-title">المجموع الإجمالي</span>
              <span class="total-sub">شامل الوجبة والمرفقات والإضافات</span>
            </div>
            <div class="total-amount-box">
              <span class="total-amount">{{ orderService.totalPriceFormatted() }}</span>
              <span class="total-currency">دينار أردني (د.أ)</span>
            </div>
          </div>

          <!-- Action Buttons Progression -->
          <div class="receipt-actions">
            <!-- WhatsApp Main Order CTA -->
            <a 
              [href]="orderService.whatsappUrl()" 
              target="_blank" 
              rel="noopener noreferrer"
              class="action-btn-whatsapp"
              aria-label="إرسال وتثبيت الطلب عبر تطبيق واتساب">
              <app-food-icon name="whatsapp" size="sm"></app-food-icon>
              <span>اطلب الآن عبر واتساب</span>
            </a>

            <!-- Direct Call CTA -->
            <a 
              href="tel:0789898226" 
              class="action-btn-call"
              aria-label="الاتصال بالمطعم هاتفياً على الرقم 0789898226">
              <app-food-icon name="phone" size="sm"></app-food-icon>
              <span>اتصل للطلب: 0789898226</span>
            </a>

            <!-- Copy Order Details CTA -->
            <button 
              type="button" 
              class="action-btn-copy" 
              (click)="orderService.copyOrderSummary()"
              [attr.aria-label]="orderService.isCopied() ? 'تم نسخ الطلب' : 'نسخ ملخص تفاصيل الطلب'">
              <app-food-icon name="copy" size="sm"></app-food-icon>
              <span>
                @if (orderService.isCopied()) {
                  تم نسخ تفاصيل الطلب بنجاح ✓
                } @else {
                  نسخ ملخص الطلب
                }
              </span>
            </button>
          </div>

          <!-- Trust & Freshness Footer -->
          <div class="receipt-footer-pledge">
            <span class="pledge-icon">✨</span>
            <span class="pledge-text">{{ orderService.restaurant.freshnessPromise }} — {{ orderService.restaurant.closingSlogan }}</span>
          </div>
        </div>
      </div>
    </aside>
  `,
  styles: [`
    .summary-section {
      position: sticky;
      top: 24px;
      margin-bottom: var(--space-3xl);
    }

    .summary-card {
      background: #FFFFFF;
      border: 2px solid var(--color-charcoal-800);
      border-radius: var(--radius-lg);
      box-shadow: var(--shadow-lg), 0 0 0 1px rgba(217, 119, 6, 0.15);
      position: relative;
      overflow: hidden;
    }

    .receipt-header {
      background: linear-gradient(135deg, var(--color-charcoal-900) 0%, var(--color-charcoal-800) 100%);
      color: #FFFFFF;
      padding: var(--space-lg) var(--space-md) var(--space-md);
      text-align: center;
      position: relative;
    }

    .receipt-seal {
      width: 38px;
      height: 38px;
      background: rgba(217, 119, 6, 0.2);
      border: 1.5px solid #D97706;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 8px;
    }

    .receipt-title {
      font-size: 1.5rem;
      font-weight: 800;
      color: #FEF3C7;
      margin-bottom: 2px;
    }

    .receipt-sub {
      font-family: var(--font-family-traditional);
      font-size: 1.05rem;
      color: #FDE047;
    }

    /* Perforated Tear Line Styling */
    .perforated-line {
      position: relative;
      height: 20px;
      background: #FFFFFF;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }

    .tear-dots {
      width: 100%;
      height: 0;
      border-top: 2px dashed var(--color-card-border);
      margin: 0 12px;
    }

    .tear-notch {
      position: absolute;
      width: 18px;
      height: 18px;
      background: var(--color-bg-parchment);
      border-radius: 50%;
      top: 50%;
      transform: translateY(-50%);
      border: 1.5px solid var(--color-charcoal-800);
      z-index: 2;
    }

    .notch-right {
      right: -9px;
    }

    .notch-left {
      left: -9px;
    }

    .receipt-body {
      padding: var(--space-md) var(--space-lg) var(--space-lg);
    }

    .receipt-item {
      display: flex;
      align-items: center;
      gap: 10px;
      padding: 10px 0;
      border-bottom: 1px solid var(--color-bg-subtle);
    }

    .item-visual {
      width: 32px;
      height: 32px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .item-info {
      flex: 1;
      display: flex;
      flex-direction: column;
    }

    .item-name {
      font-size: 0.95rem;
      font-weight: 800;
      color: var(--color-charcoal-900);
    }

    .item-note {
      font-size: 0.76rem;
      color: var(--color-text-muted);
      line-height: 1.3;
    }

    .remove-extra-btn {
      font-size: 0.72rem;
      color: var(--color-primary);
      font-weight: 700;
      text-align: right;
      padding: 0;
      margin-top: 2px;
      background: none;
      cursor: pointer;
    }

    .remove-extra-btn:hover {
      text-decoration: underline;
    }

    .item-price {
      font-family: var(--font-family-display);
      font-size: 1.05rem;
      font-weight: 800;
      color: var(--color-charcoal-900);
      display: flex;
      align-items: baseline;
      gap: 2px;
    }

    .free-price {
      color: var(--color-fresh-green);
      font-size: 0.9rem;
      font-weight: 800;
    }

    .curr {
      font-size: 0.75rem;
      font-weight: 600;
      color: var(--color-text-muted);
    }

    .extras-divider {
      padding: 10px 0 4px;
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--color-accent-hover);
      border-bottom: 1px dashed var(--color-accent-border);
    }

    .subtotal-rows {
      padding: var(--space-sm) 0;
      margin-top: 6px;
      border-bottom: 1.5px solid var(--color-card-border);
    }

    .calc-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.82rem;
      color: var(--color-text-muted);
      margin-bottom: 4px;
    }

    .text-green {
      color: var(--color-fresh-green);
      font-weight: 700;
    }

    .total-block {
      background: var(--color-bg-selected);
      border: 1.5px solid var(--color-primary-border);
      border-radius: var(--radius-md);
      padding: 14px 16px;
      margin: var(--space-md) 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 12px;
    }

    .total-label-group {
      display: flex;
      flex-direction: column;
    }

    .total-title {
      font-size: 1.15rem;
      font-weight: 900;
      color: var(--color-charcoal-900);
    }

    .total-sub {
      font-size: 0.72rem;
      color: var(--color-text-muted);
    }

    .total-amount-box {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .total-amount {
      font-family: var(--font-family-display);
      font-size: 1.85rem;
      font-weight: 900;
      color: var(--color-primary);
      line-height: 1;
    }

    .total-currency {
      font-size: 0.75rem;
      font-weight: 700;
      color: var(--color-charcoal-700);
    }

    .receipt-actions {
      display: flex;
      flex-direction: column;
      gap: 10px;
      margin-bottom: var(--space-md);
    }

    .action-btn-whatsapp {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: #25D366;
      color: #FFFFFF;
      font-family: var(--font-family-display);
      font-size: 1.05rem;
      font-weight: 800;
      padding: 13px 20px;
      border-radius: var(--radius-md);
      text-decoration: none;
      box-shadow: 0 4px 14px rgba(37, 211, 102, 0.4);
      transition: all var(--transition-fast);
    }

    .action-btn-whatsapp:hover {
      background: #20BA5A;
      transform: translateY(-2px);
      box-shadow: 0 6px 20px rgba(37, 211, 102, 0.5);
    }

    .action-btn-call {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      background: var(--color-charcoal-800);
      color: #FFFFFF;
      font-family: var(--font-family-display);
      font-size: 0.95rem;
      font-weight: 700;
      padding: 11px 18px;
      border-radius: var(--radius-md);
      text-decoration: none;
      transition: all var(--transition-fast);
    }

    .action-btn-call:hover {
      background: var(--color-charcoal-900);
    }

    .action-btn-copy {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      background: var(--color-bg-subtle);
      color: var(--color-charcoal-800);
      border: 1px solid var(--color-card-border);
      font-size: 0.85rem;
      font-weight: 700;
      padding: 9px 16px;
      border-radius: var(--radius-md);
      transition: all var(--transition-fast);
    }

    .action-btn-copy:hover {
      background: var(--color-accent-light);
      border-color: var(--color-accent-border);
    }

    .receipt-footer-pledge {
      background: var(--color-bg-subtle);
      border-radius: var(--radius-sm);
      padding: 8px 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 6px;
      font-size: 0.78rem;
      font-weight: 700;
      color: var(--color-charcoal-800);
      text-align: center;
    }
  `]
})
export class OrderSummaryComponent {
  readonly orderService = inject(OrderService);
}
