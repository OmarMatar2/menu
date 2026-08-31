import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './components/hero/hero.component';
import { MealPickerComponent } from './components/meal-picker/meal-picker.component';
import { SidePickerComponent } from './components/side-picker/side-picker.component';
import { ExtrasListComponent } from './components/extras-list/extras-list.component';
import { OrderSummaryComponent } from './components/order-summary/order-summary.component';
import { MobileBarComponent } from './components/mobile-bar/mobile-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrderService } from './services/order.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    MealPickerComponent,
    SidePickerComponent,
    ExtrasListComponent,
    OrderSummaryComponent,
    MobileBarComponent,
    FooterComponent
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  readonly orderService = inject(OrderService);
}
