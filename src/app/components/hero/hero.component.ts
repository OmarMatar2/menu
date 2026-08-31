import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { FoodIconComponent } from '../food-icon/food-icon.component';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, FoodIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header class="hero-section">
      <div class="hero-banner-ribbon">
        <span class="ribbon-flame"><app-food-icon name="flame" size="sm"></app-food-icon></span>
        <span>مشوي على الحطب بتتبيلة أردنية أصيلة يومياً — التوصيل متوفر في عمان</span>
        <span class="ribbon-flame"><app-food-icon name="flame" size="sm"></app-food-icon></span>
      </div>

      <div class="hero-container">
        <!-- Artisanal Brand Seal / Stamp -->
        <div class="brand-seal-wrapper">
          <div class="brand-seal">
            <div class="seal-inner-border">
              <div class="seal-icon-glow">
                <app-food-icon name="whole-chicken" size="lg"></app-food-icon>
              </div>
            </div>
            <div class="seal-woodfire-badge">
              <span class="seal-woodfire-dot"></span>
              مشوي على الحطب
            </div>
          </div>
        </div>

        <!-- Restaurant Title & Slogan -->
        <div class="hero-content">
          <div class="hero-pre-badge">
            <span class="pre-badge-text">مطعم ومشاوي</span>
          </div>

          <h1 class="hero-title">
            <span class="title-main">دجاجة بالقنية</span>
          </h1>

          <p class="hero-tagline">
            « من طلبك تبدأ الحكاية »
          </p>

          <!-- Star Accent Row -->
          <div class="stars-accent-row" aria-label="تقييم وجودة عالية">
            <div class="accent-line"></div>
            <div class="stars-cluster">
              <app-food-icon name="star" size="sm"></app-food-icon>
              <app-food-icon name="star" size="sm"></app-food-icon>
              <app-food-icon name="star" size="sm"></app-food-icon>
              <app-food-icon name="star" size="sm"></app-food-icon>
              <app-food-icon name="star" size="sm"></app-food-icon>
            </div>
            <div class="accent-line"></div>
          </div>

          <p class="hero-description">
            تجربة الدجاج المحمر على الحطب بالطريقة البلدية الأصيلة، طري وغني بالنكهات ومقرمش من أطرافه. اختر حجم وجبتك ونوع تقديمك المفضل بثلاث خطوات سهلة.
          </p>

          <!-- Key Highlights Pills -->
          <div class="hero-features-grid">
            <div class="feature-chip">
              <span class="feature-icon"><app-food-icon name="flame" size="sm"></app-food-icon></span>
              <span class="feature-text">فحم وحطب 100%</span>
            </div>
            <div class="feature-chip">
              <span class="feature-icon"><app-food-icon name="check" size="sm"></app-food-icon></span>
              <span class="feature-text">دجاج طازج يومياً</span>
            </div>
            <div class="feature-chip">
              <span class="feature-icon"><app-food-icon name="phone" size="sm"></app-food-icon></span>
              <span class="feature-text">للطلب: {{ orderService.restaurant.phone }}</span>
            </div>
          </div>

          <!-- Quick Navigation Jump -->
          <div class="hero-cta-group">
            <a href="#step-1" class="hero-order-btn">
              <span>ابدأ باختيار وجبتك الآن</span>
              <span class="btn-arrow">↓</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`
    .hero-section {
      background: linear-gradient(180deg, #1C1512 0%, #2A1C16 70%, #FAF6F0 100%);
      color: #FFFFFF;
      padding: 0 0 var(--space-2xl) 0;
      position: relative;
      overflow: hidden;
      border-bottom: 2px solid var(--color-card-border);
    }

    .hero-banner-ribbon {
      background: #B91C1C;
      color: #FFFFFF;
      font-family: var(--font-family-display);
      font-size: 0.85rem;
      font-weight: 700;
      padding: 8px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 12px;
      text-align: center;
      letter-spacing: 0.2px;
      box-shadow: 0 2px 8px rgba(185, 28, 28, 0.4);
    }

    .ribbon-flame {
      display: inline-flex;
      animation: flameFlicker 2s infinite ease-in-out;
    }

    .hero-container {
      max-width: 900px;
      margin: 0 auto;
      padding: var(--space-2xl) var(--space-md) var(--space-lg);
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .brand-seal-wrapper {
      margin-bottom: var(--space-lg);
      position: relative;
    }

    .brand-seal {
      width: 130px;
      height: 130px;
      border-radius: var(--radius-full);
      background: radial-gradient(circle, #38241B 0%, #1A110D 100%);
      border: 3px solid #D97706;
      box-shadow: 0 0 30px rgba(217, 119, 6, 0.3), inset 0 0 15px rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
    }

    .seal-inner-border {
      width: 110px;
      height: 110px;
      border-radius: var(--radius-full);
      border: 1.5px dashed #F59E0B;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .seal-icon-glow {
      filter: drop-shadow(0 4px 10px rgba(245, 158, 11, 0.4));
      animation: pulseSubtle 3s infinite ease-in-out;
    }

    .seal-woodfire-badge {
      position: absolute;
      bottom: -12px;
      background: #B91C1C;
      color: #FFFFFF;
      font-size: 0.72rem;
      font-weight: 700;
      padding: 3px 12px;
      border-radius: var(--radius-full);
      border: 1.5px solid #FCA5A5;
      display: flex;
      align-items: center;
      gap: 5px;
      white-space: nowrap;
      box-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
    }

    .seal-woodfire-dot {
      width: 6px;
      height: 6px;
      background: #FDE047;
      border-radius: 50%;
      animation: flameFlicker 1.5s infinite;
    }

    .hero-pre-badge {
      display: inline-block;
      background: rgba(217, 119, 6, 0.18);
      border: 1px solid rgba(217, 119, 6, 0.4);
      padding: 4px 16px;
      border-radius: var(--radius-full);
      margin-bottom: var(--space-xs);
    }

    .pre-badge-text {
      color: #FBBF24;
      font-size: 0.85rem;
      font-weight: 700;
      letter-spacing: 0.5px;
    }

    .hero-title {
      font-size: 2.75rem;
      font-weight: 900;
      margin: var(--space-xs) 0;
      letter-spacing: -0.5px;
      line-height: 1.15;
    }

    .title-main {
      background: linear-gradient(135deg, #FFFFFF 0%, #FEF3C7 50%, #F59E0B 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      filter: drop-shadow(0 2px 8px rgba(0, 0, 0, 0.5));
    }

    .hero-tagline {
      font-family: var(--font-family-traditional);
      font-size: 1.6rem;
      font-weight: 700;
      color: #FDE047;
      margin-top: 4px;
      margin-bottom: var(--space-md);
      text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
    }

    .stars-accent-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 16px;
      width: 100%;
      max-width: 360px;
      margin: 0 auto var(--space-md);
    }

    .accent-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(217, 119, 6, 0.6), transparent);
    }

    .stars-cluster {
      display: flex;
      align-items: center;
      gap: 4px;
    }

    .hero-description {
      font-size: 1.05rem;
      line-height: 1.7;
      color: #E2CFBB;
      max-width: 640px;
      margin: 0 auto var(--space-lg);
    }

    .hero-features-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 10px;
      margin-bottom: var(--space-xl);
    }

    .feature-chip {
      background: rgba(44, 30, 24, 0.85);
      border: 1px solid rgba(217, 119, 6, 0.3);
      padding: 6px 14px;
      border-radius: var(--radius-full);
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 0.85rem;
      font-weight: 600;
      color: #FEF3C7;
      backdrop-filter: blur(4px);
    }

    .hero-cta-group {
      margin-top: var(--space-xs);
    }

    .hero-order-btn {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      background: linear-gradient(135deg, #B91C1C 0%, #991B1B 100%);
      color: #FFFFFF;
      font-family: var(--font-family-display);
      font-size: 1.05rem;
      font-weight: 700;
      padding: 12px 28px;
      border-radius: var(--radius-full);
      text-decoration: none;
      box-shadow: 0 4px 16px rgba(185, 28, 28, 0.5), 0 0 0 2px rgba(254, 202, 202, 0.2);
      transition: transform var(--transition-fast), box-shadow var(--transition-fast);
    }

    .hero-order-btn:hover {
      transform: translateY(-2px);
      box-shadow: 0 8px 24px rgba(185, 28, 28, 0.6);
    }

    .hero-order-btn:active {
      transform: translateY(0);
    }

    .btn-arrow {
      font-size: 1.2rem;
      transition: transform 0.2s ease;
    }

    .hero-order-btn:hover .btn-arrow {
      transform: translateY(3px);
    }

    @media (max-width: 640px) {
      .hero-title {
        font-size: 2.1rem;
      }
      .hero-tagline {
        font-size: 1.35rem;
      }
      .hero-description {
        font-size: 0.95rem;
      }
      .brand-seal {
        width: 110px;
        height: 110px;
      }
      .seal-inner-border {
        width: 92px;
        height: 92px;
      }
      .hero-banner-ribbon {
        font-size: 0.78rem;
        padding: 6px 10px;
        gap: 6px;
      }
    }
  `]
})
export class HeroComponent {
  readonly orderService = inject(OrderService);
}
