import { TestBed } from '@angular/core/testing';
import { App } from './app';
import { OrderService } from './services/order.service';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app component', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render restaurant name in hero', async () => {
    const fixture = TestBed.createComponent(App);
    fixture.detectChanges();
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.hero-title')?.textContent).toContain('دجاجة بالقنية');
    expect(compiled.querySelector('.hero-tagline')?.textContent).toContain('من طلبك تبدأ الحكاية');
  });

  it('should default to whole chicken and with rice', () => {
    const orderService = TestBed.inject(OrderService);
    expect(orderService.selectedMealId()).toBe('whole-chicken');
    expect(orderService.selectedSideId()).toBe('side-rice');
    expect(orderService.mealPrice()).toBe(6.00);
    expect(orderService.totalPrice()).toBe(6.00);
  });

  it('should calculate total price accurately when meal and extras change', () => {
    const orderService = TestBed.inject(OrderService);
    
    // Select 4 chickens (19 JD)
    orderService.selectMeal('four-chickens');
    expect(orderService.mealPrice()).toBe(19.00);
    expect(orderService.totalPrice()).toBe(19.00);

    // Toggle extra salad (0.50 JD) and extra soda (0.25 JD)
    orderService.toggleExtra('extra-salad');
    orderService.toggleExtra('extra-soda');
    expect(orderService.extrasPrice()).toBe(0.75);
    expect(orderService.totalPrice()).toBe(19.75);
    expect(orderService.totalPriceFormatted()).toBe('19.75');

    // Untoggle soda
    orderService.toggleExtra('extra-soda');
    expect(orderService.extrasPrice()).toBe(0.50);
    expect(orderService.totalPrice()).toBe(19.50);
  });

  it('should generate formatted WhatsApp URL with encoded message', () => {
    const orderService = TestBed.inject(OrderService);
    orderService.selectMeal('whole-chicken');
    orderService.selectSide('side-rice');
    const url = orderService.whatsappUrl();
    expect(url).toContain('https://wa.me/962789898226');
    expect(url).toContain('text=');
  });
});

