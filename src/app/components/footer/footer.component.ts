import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderService } from '../../services/order.service';
import { FoodIconComponent } from '../food-icon/food-icon.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, FoodIconComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="footer-section">
      <div class="footer-container">
        <!-- Top Stamp & Slogan -->
        <div class="footer-brand-block">
          <div class="footer-seal">
            <app-food-icon name="whole-chicken" size="md"></app-food-icon>
          </div>
          <h2 class="footer-title">{{ orderService.restaurant.name }}</h2>
          <p class="footer-tagline">« {{ orderService.restaurant.tagline }} »</p>
        </div>

        <!-- Phone & Direct Contact CTA Block -->
        <div class="footer-contact-card">
          <div class="contact-icon-circle">
            <app-food-icon name="phone" size="md"></app-food-icon>
          </div>
          <div class="contact-info">
            <span class="contact-label">للطلب والاستفسار المباشر</span>
            <a href="tel:0789898226" class="contact-phone-number" dir="ltr">0789898226</a>
          </div>
          <a [href]="orderService.whatsappUrl()" target="_blank" rel="noopener noreferrer" class="contact-whatsapp-badge">
            <app-food-icon name="whatsapp" size="sm"></app-food-icon>
            <span>راسلنا واتساب</span>
          </a>
        </div>

        <!-- Core Brand Promises -->
        <div class="footer-promises-grid">
          <div class="promise-item">
            <span class="promise-icon">🍗</span>
            <h3 class="promise-title">دجاج طازج 100%</h3>
            <p class="promise-text">{{ orderService.restaurant.freshnessPromise }}</p>
          </div>

          <div class="promise-item">
            <span class="promise-icon">🔥</span>
            <h3 class="promise-title">شواء في الفرن</h3>
            <p class="promise-text"> مع نكهة التدخين الأصيلة بتتبيلة البهارات السرية</p>
          </div>

          <div class="promise-item">
            <span class="promise-icon">✨</span>
            <h3 class="promise-title">{{ orderService.restaurant.closingSlogan }}</h3>
            <p class="promise-text">كل طلب يُحضّر بشغف وعناية فائقة ليرضي ذوقكم</p>
          </div>
        </div>

        <!-- Working Hours & Location -->
        <div class="footer-meta-row">
          <div class="meta-item">
            <span class="meta-icon">⏰</span>
            <span>{{ orderService.restaurant.hours }}</span>
          </div>
          <div class="meta-item">
            <span class="meta-icon">📍</span>
            <span>{{ orderService.restaurant.address }}</span>
          </div>
        </div>

        <!-- Bottom Copyright / Closing Sign-off -->
        <!-- <div class="footer-bottom-bar">
          <p class="copyright-text">
            جميع الحقوق محفوظة © {{ currentYear }} لمطعم <strong>دجاجة بالقنية</strong> — من طلبك تبدأ الحكاية
          </p>
          <p class="closing-quote font-traditional">
            « {{ orderService.restaurant.closingSlogan }} »
          </p>
        </div> -->
      </div>
    </footer>
  `,
  styles: [`
    .footer-section {
      background: #150E0B;
      color: #FFFFFF;
      padding: var(--space-3xl) var(--space-md) calc(var(--space-3xl) + 60px);
      border-top: 3px solid var(--color-primary);
      position: relative;
      overflow: hidden;
    }

    .footer-container {
      max-width: 900px;
      margin: 0 auto;
      text-align: center;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .footer-brand-block {
      margin-bottom: var(--space-xl);
    }

    .footer-seal {
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: radial-gradient(circle, #38241B 0%, #1A110D 100%);
      border: 2px solid #D97706;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 12px;
      box-shadow: 0 0 20px rgba(217, 119, 6, 0.25);
    }

    .footer-title {
      font-size: 2rem;
      font-weight: 900;
      color: #FEF3C7;
      margin-bottom: 4px;
    }

    .footer-tagline {
      font-family: var(--font-family-traditional);
      font-size: 1.35rem;
      color: #FBBF24;
    }

    /* Contact Card Banner */
    .footer-contact-card {
      background: linear-gradient(135deg, #261711 0%, #362016 100%);
      border: 1.5px solid #D97706;
      border-radius: var(--radius-lg);
      padding: 16px 28px;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 18px;
      margin-bottom: var(--space-2xl);
      box-shadow: 0 6px 24px rgba(0, 0, 0, 0.4);
      max-width: 600px;
      width: 100%;
    }

    .contact-icon-circle {
      width: 48px;
      height: 48px;
      background: var(--color-primary);
      color: #FFFFFF;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 12px rgba(185, 28, 28, 0.5);
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .contact-label {
      font-size: 0.8rem;
      color: #E2CFBB;
      font-weight: 600;
    }

    .contact-phone-number {
      font-family: var(--font-family-display);
      font-size: 1.6rem;
      font-weight: 900;
      color: #FEF3C7;
      text-decoration: none;
      letter-spacing: 1px;
      transition: color var(--transition-fast);
    }

    .contact-phone-number:hover {
      color: #F87171;
    }

    .contact-whatsapp-badge {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      background: #25D366;
      color: #FFFFFF;
      font-family: var(--font-family-display);
      font-size: 0.85rem;
      font-weight: 700;
      padding: 8px 16px;
      border-radius: var(--radius-full);
      text-decoration: none;
      box-shadow: 0 2px 8px rgba(37, 211, 102, 0.35);
      transition: transform var(--transition-fast);
    }

    .contact-whatsapp-badge:hover {
      transform: scale(1.05);
    }

    /* Promises Grid */
    .footer-promises-grid {
      display: grid;
      grid-template-columns: repeat(1, 1fr);
      gap: 16px;
      width: 100%;
      margin-bottom: var(--space-2xl);
    }

    @media (min-width: 640px) {
      .footer-promises-grid {
        grid-template-columns: repeat(3, 1fr);
      }
    }

    .promise-item {
      background: rgba(38, 23, 17, 0.6);
      border: 1px solid rgba(217, 119, 6, 0.2);
      border-radius: var(--radius-md);
      padding: var(--space-md);
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .promise-icon {
      font-size: 1.8rem;
      margin-bottom: 8px;
    }

    .promise-title {
      font-size: 1.1rem;
      font-weight: 800;
      color: #FEF3C7;
      margin-bottom: 4px;
    }

    .promise-text {
      font-size: 0.82rem;
      color: #D1C2B5;
      line-height: 1.5;
    }

    .footer-meta-row {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 20px;
      font-size: 0.85rem;
      color: #BDB0A4;
      margin-bottom: var(--space-xl);
      padding-bottom: var(--space-lg);
      border-bottom: 1px solid rgba(255, 255, 255, 0.08);
      width: 100%;
    }

    .meta-item {
      display: flex;
      align-items: center;
      gap: 6px;
    }

    .footer-bottom-bar {
      display: flex;
      flex-direction: column;
      gap: 6px;
    }

    .copyright-text {
      font-size: 0.82rem;
      color: #8E7C70;
    }

    .closing-quote {
      font-size: 1.15rem;
      color: #F59E0B;
      font-weight: 700;
    }

    @media (max-width: 640px) {
      .footer-contact-card {
        flex-direction: column;
        text-align: center;
      }
      .contact-info {
        align-items: center;
      }
    }
  `]
})
export class FooterComponent {
  readonly orderService = inject(OrderService);
  readonly currentYear = new Date().getFullYear();
}
