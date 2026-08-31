import { Component, ChangeDetectionStrategy, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-food-icon',
  standalone: true,
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="food-icon-container" [class.icon-sm]="size() === 'sm'" [class.icon-md]="size() === 'md'" [class.icon-lg]="size() === 'lg'" [class.icon-xl]="size() === 'xl'">
      @switch (name()) {
        @case ('half-chicken') {
          <!-- Half Chicken: Golden crisp roasted half bird with grill marks and spice dusting -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <ellipse cx="40" cy="65" rx="30" ry="8" fill="#1C1512" fill-opacity="0.1" />
            <!-- Plate base -->
            <path d="M12 62C12 62 24 67 40 67C56 67 68 62 68 62" stroke="#E5D3C1" stroke-width="2.5" stroke-linecap="round"/>
            <!-- Half chicken body -->
            <path d="M22 55C18 45 20 32 30 24C38 18 48 18 56 25C62 31 64 42 61 52C58 59 48 62 38 62C28 62 23 58 22 55Z" fill="url(#grad-half-roast)" stroke="#B45309" stroke-width="1.5"/>
            <!-- Crisp Wing section -->
            <path d="M46 32C52 35 56 42 53 48C50 53 43 53 38 48" fill="#D97706" stroke="#92400E" stroke-width="1.2"/>
            <!-- Drumstick bone -->
            <path d="M24 45L15 48C13 49 12 52 14 54C15 55 17 55 18 54L26 49" fill="#FEF3C7" stroke="#B45309" stroke-width="1.2"/>
            <!-- Bone tip -->
            <circle cx="13" cy="51" r="2.5" fill="#FEF3C7" stroke="#B45309" stroke-width="1"/>
            <circle cx="14" cy="55" r="2.5" fill="#FEF3C7" stroke="#B45309" stroke-width="1"/>
            <!-- Char / Grill Marks -->
            <path d="M34 27L42 33M36 38L47 43M30 46L40 52" stroke="#78350F" stroke-width="1.8" stroke-linecap="round"/>
            <!-- Golden highlights & spices -->
            <path d="M35 22C42 19 49 20 53 25" stroke="#FDE68A" stroke-width="1.5" stroke-linecap="round"/>
            <circle cx="44" cy="28" r="0.8" fill="#B91C1C"/>
            <circle cx="50" cy="36" r="0.8" fill="#B91C1C"/>
            <circle cx="38" cy="42" r="0.8" fill="#B91C1C"/>
            <!-- Steam wisp -->
            <path d="M40 16C39 12 43 10 41 6M48 18C47 14 50 12 49 8" stroke="#D97706" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="2 3" opacity="0.7"/>
            <defs>
              <linearGradient id="grad-half-roast" x1="20" y1="20" x2="60" y2="60" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F59E0B"/>
                <stop offset="0.6" stop-color="#D97706"/>
                <stop offset="1" stop-color="#B45309"/>
              </linearGradient>
            </defs>
          </svg>
        }

        @case ('whole-chicken') {
          <!-- Whole Chicken: Golden Rotisserie Roasted Whole Bird -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <ellipse cx="40" cy="67" rx="34" ry="7" fill="#1C1512" fill-opacity="0.12" />
            <!-- Oval Platter -->
            <ellipse cx="40" cy="62" rx="32" ry="9" fill="#FFFFFF" stroke="#E2CFBB" stroke-width="2"/>
            <ellipse cx="40" cy="62" rx="28" ry="7" fill="#FDF8F3"/>
            <!-- Chicken Breast and Body -->
            <path d="M23 48C21 34 28 22 40 22C52 22 59 34 57 48C56 57 49 61 40 61C31 61 24 57 23 48Z" fill="url(#grad-whole-body)" stroke="#92400E" stroke-width="1.5"/>
            <!-- Left Drumstick -->
            <path d="M24 46C20 44 16 48 18 54C20 60 27 58 29 53L24 46Z" fill="#D97706" stroke="#92400E" stroke-width="1.2"/>
            <path d="M16 54L11 57" stroke="#FEF3C7" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="10" cy="57" r="2" fill="#FEF3C7" stroke="#B45309" stroke-width="1"/>
            <!-- Right Drumstick -->
            <path d="M56 46C60 44 64 48 62 54C60 60 53 58 51 53L56 46Z" fill="#D97706" stroke="#92400E" stroke-width="1.2"/>
            <path d="M64 54L69 57" stroke="#FEF3C7" stroke-width="2.5" stroke-linecap="round"/>
            <circle cx="70" cy="57" r="2" fill="#FEF3C7" stroke="#B45309" stroke-width="1"/>
            <!-- Breast Separation & Golden Glaze -->
            <path d="M40 24C39 34 39 46 40 55" stroke="#78350F" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Char grill marks -->
            <path d="M30 32L36 36M44 36L50 32M29 42L36 45M44 45L51 42" stroke="#78350F" stroke-width="1.8" stroke-linecap="round"/>
            <!-- Rosemary garnish -->
            <path d="M40 63C43 60 48 61 52 59" stroke="#15803D" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M44 61L45 59M48 60L49 58" stroke="#16A34A" stroke-width="1.2" stroke-linecap="round"/>
            <!-- Steam -->
            <path d="M36 17C35 12 39 10 38 6M44 17C43 12 47 10 46 6" stroke="#F59E0B" stroke-width="1.4" stroke-linecap="round" stroke-dasharray="2 3"/>
            <defs>
              <linearGradient id="grad-whole-body" x1="40" y1="20" x2="40" y2="61" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F59E0B"/>
                <stop offset="0.7" stop-color="#D97706"/>
                <stop offset="1" stop-color="#B45309"/>
              </linearGradient>
            </defs>
          </svg>
        }

        @case ('one-half-chicken') {
          <!-- 1.5 Chickens: Whole + Half Chicken Duo -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <ellipse cx="40" cy="68" rx="36" ry="7" fill="#1C1512" fill-opacity="0.12" />
            <!-- Back Half Chicken -->
            <g opacity="0.95" transform="translate(-10, -4)">
              <path d="M22 55C18 45 20 32 30 24C38 18 48 18 56 25C62 31 64 42 61 52C58 59 48 62 38 62C28 62 23 58 22 55Z" fill="#CA8A04" stroke="#854D0E" stroke-width="1.2"/>
              <path d="M34 27L42 33M36 38L47 43" stroke="#713F12" stroke-width="1.5" stroke-linecap="round"/>
            </g>
            <!-- Foreground Whole Chicken -->
            <g transform="translate(10, 2)">
              <path d="M23 48C21 34 28 22 40 22C52 22 59 34 57 48C56 57 49 61 40 61C31 61 24 57 23 48Z" fill="url(#grad-duo-main)" stroke="#92400E" stroke-width="1.5"/>
              <path d="M40 24C39 34 39 46 40 55" stroke="#78350F" stroke-width="1.4" stroke-linecap="round"/>
              <path d="M29 36L35 40M45 40L51 36" stroke="#78350F" stroke-width="1.6" stroke-linecap="round"/>
              <path d="M24 46C20 44 16 48 18 54C20 60 27 58 29 53L24 46Z" fill="#D97706" stroke="#92400E" stroke-width="1.2"/>
              <circle cx="10" cy="57" r="2" fill="#FEF3C7" stroke="#B45309" stroke-width="1"/>
            </g>
            <!-- +0.5 Tag Badge -->
            <rect x="6" y="10" width="24" height="15" rx="7.5" fill="#B91C1C" />
            <text x="18" y="21" font-size="9" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="'Cairo', sans-serif">١.٥</text>
            <defs>
              <linearGradient id="grad-duo-main" x1="40" y1="22" x2="40" y2="61" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FBBF24"/>
                <stop offset="0.6" stop-color="#D97706"/>
                <stop offset="1" stop-color="#B45309"/>
              </linearGradient>
            </defs>
          </svg>
        }

        @case ('two-chickens') {
          <!-- 2 Chickens: Twin Golden Roast Birds with Value Crown -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <ellipse cx="40" cy="68" rx="36" ry="7" fill="#1C1512" fill-opacity="0.12" />
            <!-- Left Chicken -->
            <g transform="translate(-13, 2)">
              <path d="M23 48C21 34 28 24 38 24C48 24 54 34 52 48C51 56 45 60 38 60C31 60 24 56 23 48Z" fill="#D97706" stroke="#92400E" stroke-width="1.2"/>
              <path d="M38 26C37 34 37 44 38 52" stroke="#78350F" stroke-width="1.2" stroke-linecap="round"/>
              <path d="M28 36L34 40M42 40L48 36" stroke="#78350F" stroke-width="1.4" stroke-linecap="round"/>
            </g>
            <!-- Right Chicken -->
            <g transform="translate(13, 2)">
              <path d="M23 48C21 34 28 24 38 24C48 24 54 34 52 48C51 56 45 60 38 60C31 60 24 56 23 48Z" fill="url(#grad-twin-right)" stroke="#92400E" stroke-width="1.4"/>
              <path d="M38 26C37 34 37 44 38 52" stroke="#78350F" stroke-width="1.2" stroke-linecap="round"/>
              <path d="M28 36L34 40M42 40L48 36" stroke="#78350F" stroke-width="1.4" stroke-linecap="round"/>
            </g>
            <!-- Flame & Savings Crown -->
            <circle cx="40" cy="18" r="11" fill="#FEF3C7" stroke="#F59E0B" stroke-width="1.5"/>
            <path d="M40 10C42 13 45 15 45 19C45 22 43 24 40 25C37 24 35 22 35 19C35 15 38 13 40 10Z" fill="#DC2626"/>
            <path d="M40 14C41 16 43 17 43 19C43 21 42 22 40 23C38 22 37 21 37 19C37 17 39 16 40 14Z" fill="#FBBF24"/>
            <defs>
              <linearGradient id="grad-twin-right" x1="38" y1="24" x2="38" y2="60" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FBBF24"/>
                <stop offset="0.7" stop-color="#D97706"/>
                <stop offset="1" stop-color="#9A3412"/>
              </linearGradient>
            </defs>
          </svg>
        }

        @case ('three-chickens') {
          <!-- 3 Chickens: Trio Roasted Feast -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <ellipse cx="40" cy="69" rx="37" ry="6" fill="#1C1512" fill-opacity="0.12" />
            <!-- Back Left -->
            <g transform="translate(-18, -6) scale(0.85)">
              <path d="M23 48C21 34 28 24 38 24C48 24 54 34 52 48C51 56 45 60 38 60C31 60 24 56 23 48Z" fill="#B45309" stroke="#78350F" stroke-width="1.2"/>
            </g>
            <!-- Back Right -->
            <g transform="translate(20, -6) scale(0.85)">
              <path d="M23 48C21 34 28 24 38 24C48 24 54 34 52 48C51 56 45 60 38 60C31 60 24 56 23 48Z" fill="#B45309" stroke="#78350F" stroke-width="1.2"/>
            </g>
            <!-- Center Front -->
            <g transform="translate(2, 4)">
              <path d="M23 48C21 34 28 22 40 22C52 22 59 34 57 48C56 57 49 61 40 61C31 61 24 57 23 48Z" fill="url(#grad-trio-center)" stroke="#92400E" stroke-width="1.5"/>
              <path d="M40 24C39 34 39 46 40 55" stroke="#78350F" stroke-width="1.4" stroke-linecap="round"/>
              <path d="M29 36L35 40M45 40L51 36" stroke="#78350F" stroke-width="1.6" stroke-linecap="round"/>
            </g>
            <!-- Star Count Badge -->
            <circle cx="40" cy="14" r="10" fill="#D97706" stroke="#FEF3C7" stroke-width="1.5"/>
            <text x="40" y="18" font-size="10" font-weight="900" fill="#FFFFFF" text-anchor="middle" font-family="'Cairo', sans-serif">٣</text>
            <defs>
              <linearGradient id="grad-trio-center" x1="40" y1="22" x2="40" y2="61" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FBBF24"/>
                <stop offset="0.6" stop-color="#D97706"/>
                <stop offset="1" stop-color="#B45309"/>
              </linearGradient>
            </defs>
          </svg>
        }

        @case ('four-chickens') {
          <!-- 4 Chickens: Grand Family Banquet -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <ellipse cx="40" cy="70" rx="38" ry="6" fill="#1C1512" fill-opacity="0.15" />
            <!-- Oval Banquet Tray -->
            <ellipse cx="40" cy="66" rx="36" ry="8" fill="#FEF3C7" stroke="#D97706" stroke-width="1.5"/>
            <!-- 4 roast birds arrangement -->
            <g transform="translate(-20, -6) scale(0.75)">
              <path d="M23 48C21 34 28 24 38 24C48 24 54 34 52 48C51 56 45 60 38 60C31 60 24 56 23 48Z" fill="#B45309"/>
            </g>
            <g transform="translate(24, -6) scale(0.75)">
              <path d="M23 48C21 34 28 24 38 24C48 24 54 34 52 48C51 56 45 60 38 60C31 60 24 56 23 48Z" fill="#B45309"/>
            </g>
            <g transform="translate(-10, 4) scale(0.85)">
              <path d="M23 48C21 34 28 22 40 22C52 22 59 34 57 48C56 57 49 61 40 61C31 61 24 57 23 48Z" fill="#D97706" stroke="#92400E" stroke-width="1.2"/>
            </g>
            <g transform="translate(13, 4) scale(0.85)">
              <path d="M23 48C21 34 28 22 40 22C52 22 59 34 57 48C56 57 49 61 40 61C31 61 24 57 23 48Z" fill="#F59E0B" stroke="#92400E" stroke-width="1.2"/>
            </g>
            <!-- Family Feast Crown / Badge -->
            <rect x="26" y="8" width="28" height="15" rx="7.5" fill="#15803D" stroke="#BBF7D0" stroke-width="1"/>
            <text x="40" y="19" font-size="9" font-weight="bold" fill="#FFFFFF" text-anchor="middle" font-family="'Cairo', sans-serif">عائلي ٤</text>
          </svg>
        }

        @case ('side-rice') {
          <!-- Side 1: Aromatic Rice Platter + Daqqous cup + Laban -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <ellipse cx="40" cy="67" rx="33" ry="7" fill="#1C1512" fill-opacity="0.1" />
            <!-- Rice Bowl -->
            <path d="M14 44C14 44 20 64 40 64C60 64 66 44 66 44H14Z" fill="#F59E0B" stroke="#B45309" stroke-width="1.5"/>
            <!-- Rice Mound -->
            <ellipse cx="40" cy="44" rx="26" ry="12" fill="#FEF08A" stroke="#F59E0B" stroke-width="1.2"/>
            <path d="M20 43C22 36 30 30 40 30C50 30 58 36 60 43" fill="#FDE047"/>
            <!-- Rice Grains Texture -->
            <ellipse cx="36" cy="38" rx="2" ry="1" fill="#CA8A04" transform="rotate(-20 36 38)"/>
            <ellipse cx="44" cy="36" rx="2" ry="1" fill="#CA8A04" transform="rotate(25 44 36)"/>
            <ellipse cx="48" cy="42" rx="2" ry="1" fill="#CA8A04" transform="rotate(-15 48 42)"/>
            <ellipse cx="32" cy="43" rx="2" ry="1" fill="#CA8A04" transform="rotate(30 32 43)"/>
            <ellipse cx="40" cy="42" rx="2" ry="1" fill="#CA8A04" transform="rotate(10 40 42)"/>
            <!-- Star Anise / Cardamom Spice Garnish -->
            <circle cx="40" cy="34" r="2.5" fill="#78350F"/>
            <!-- Left Daqqous Ramekin -->
            <ellipse cx="16" cy="56" rx="9" ry="4.5" fill="#DC2626" stroke="#991B1B" stroke-width="1"/>
            <path d="M7 56C7 56 10 65 16 65C22 65 25 56 25 56" fill="#DC2626" stroke="#991B1B" stroke-width="1"/>
            <circle cx="16" cy="56" r="1.5" fill="#7F1D1D"/>
            <!-- Right Laban Cup -->
            <ellipse cx="64" cy="56" rx="9" ry="4.5" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
            <path d="M55 56C55 56 58 65 64 65C70 65 73 56 73 56" fill="#F8FAFC" stroke="#CBD5E1" stroke-width="1"/>
            <!-- Fresh Mint on Laban -->
            <path d="M64 56C65 54 67 55 67 56" stroke="#16A34A" stroke-width="1.2" stroke-linecap="round"/>
            <!-- Steam -->
            <path d="M37 26C36 21 40 18 38 13M43 26C42 21 46 18 44 13" stroke="#F59E0B" stroke-width="1.4" stroke-linecap="round" stroke-dasharray="2 3"/>
          </svg>
        }

        @case ('side-fries') {
          <!-- Side 2: Crispy French Fries Cone + Garlic Toum Dip -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <ellipse cx="40" cy="68" rx="30" ry="6" fill="#1C1512" fill-opacity="0.1" />
            <!-- Fries Box / Cone -->
            <path d="M22 42L28 66H52L58 42H22Z" fill="#DC2626" stroke="#991B1B" stroke-width="1.5"/>
            <path d="M25 42C25 42 32 47 40 47C48 47 55 42 55 42" stroke="#B91C1C" stroke-width="1.5"/>
            <!-- Emblem on fries cone -->
            <circle cx="40" cy="55" r="5" fill="#FEF2F2" />
            <path d="M40 52C41 53 42 54 42 56C42 57 41 58 40 58C39 58 38 57 38 56C38 54 39 53 40 52Z" fill="#DC2626"/>
            <!-- French Fries sticks with golden gradient -->
            <!-- Fry 1 -->
            <rect x="25" y="22" width="6" height="24" rx="2" fill="#FBBF24" stroke="#D97706" stroke-width="1" transform="rotate(-15 25 22)"/>
            <!-- Fry 2 -->
            <rect x="33" y="14" width="6.5" height="30" rx="2" fill="#FDE047" stroke="#D97706" stroke-width="1" transform="rotate(-5 33 14)"/>
            <!-- Fry 3 (Center Tall) -->
            <rect x="40" y="12" width="6" height="32" rx="2" fill="#FBBF24" stroke="#D97706" stroke-width="1" transform="rotate(4 40 12)"/>
            <!-- Fry 4 -->
            <rect x="47" y="16" width="6.5" height="28" rx="2" fill="#FDE047" stroke="#D97706" stroke-width="1" transform="rotate(14 47 16)"/>
            <!-- Fry 5 -->
            <rect x="52" y="24" width="6" height="22" rx="2" fill="#FBBF24" stroke="#D97706" stroke-width="1" transform="rotate(22 52 24)"/>
            <!-- Garlic Toum Ramekin Dip Beside -->
            <ellipse cx="64" cy="58" rx="9" ry="4.5" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
            <path d="M55 58C55 58 58 66 64 66C70 66 73 58 73 58" fill="#FEFCE8" stroke="#FEF08A" stroke-width="1"/>
            <circle cx="64" cy="58" r="3" fill="#FEF08A"/>
          </svg>
        }

        @case ('side-roasted') {
          <!-- Side 3: Roasted Whole Potato + Charred Grilled Onion + Toum -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <ellipse cx="40" cy="68" rx="34" ry="7" fill="#1C1512" fill-opacity="0.12" />
            <!-- Whole Roasted Potato (Left) -->
            <path d="M12 48C11 36 21 28 32 30C41 32 46 42 44 54C42 63 30 65 20 62C13 60 12 55 12 48Z" fill="url(#grad-potato)" stroke="#78350F" stroke-width="1.5"/>
            <!-- Potato Steam Cut & Butter/Herb Melt -->
            <path d="M22 36C26 38 32 42 36 48" stroke="#FEF08A" stroke-width="3" stroke-linecap="round"/>
            <path d="M22 36C26 38 32 42 36 48" stroke="#CA8A04" stroke-width="1" stroke-linecap="round"/>
            <!-- Char marks on potato -->
            <circle cx="18" cy="46" r="1.5" fill="#451A03"/>
            <circle cx="28" cy="54" r="1.8" fill="#451A03"/>
            <circle cx="38" cy="42" r="1.2" fill="#451A03"/>
            <!-- Whole Grilled Charred Onion (Right) -->
            <path d="M46 54C43 45 47 34 56 34C65 34 69 45 67 54C65 62 55 64 48 61C46 59 46 56 46 54Z" fill="url(#grad-onion)" stroke="#831843" stroke-width="1.5"/>
            <!-- Onion rings & char grill lines -->
            <path d="M56 34C55 42 55 52 56 61" stroke="#4C0519" stroke-width="1.2" stroke-linecap="round"/>
            <path d="M50 42C54 44 60 44 64 42" stroke="#4C0519" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M48 50C53 52 61 52 66 50" stroke="#4C0519" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Garlic dip in foreground -->
            <ellipse cx="40" cy="62" rx="8" ry="4" fill="#FFFFFF" stroke="#E2E8F0" stroke-width="1"/>
            <path d="M32 62C32 62 35 68 40 68C45 68 48 62 48 62" fill="#FEFCE8" stroke="#FEF08A" stroke-width="1"/>
            <!-- Steam from roasted potato -->
            <path d="M28 26C27 21 30 18 29 13M34 26C33 21 36 18 35 13" stroke="#D97706" stroke-width="1.2" stroke-linecap="round" stroke-dasharray="2 3"/>
            <defs>
              <linearGradient id="grad-potato" x1="15" y1="30" x2="40" y2="60" gradientUnits="userSpaceOnUse">
                <stop stop-color="#D97706"/>
                <stop offset="0.7" stop-color="#92400E"/>
                <stop offset="1" stop-color="#78350F"/>
              </linearGradient>
              <linearGradient id="grad-onion" x1="48" y1="34" x2="65" y2="60" gradientUnits="userSpaceOnUse">
                <stop stop-color="#9D174D"/>
                <stop offset="0.7" stop-color="#831843"/>
                <stop offset="1" stop-color="#500724"/>
              </linearGradient>
            </defs>
          </svg>
        }

        @case ('extra-soda') {
          <!-- Extra: Chilled Soda Can with Condensation -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <ellipse cx="40" cy="68" rx="20" ry="5" fill="#1C1512" fill-opacity="0.1" />
            <!-- Can Top Rim -->
            <ellipse cx="40" cy="24" rx="16" ry="5" fill="#E2E8F0" stroke="#94A3B8" stroke-width="1.2"/>
            <ellipse cx="40" cy="24" rx="12" ry="3.5" fill="#CBD5E1"/>
            <ellipse cx="40" cy="24" rx="3" ry="1.5" fill="#64748B"/>
            <!-- Can Body -->
            <path d="M24 24V56C24 60 31 63 40 63C49 63 56 60 56 56V24H24Z" fill="url(#grad-soda-can)" stroke="#991B1B" stroke-width="1.2"/>
            <!-- Can Base -->
            <path d="M25 56C25 59 31 62 40 62C49 62 55 59 55 56" stroke="#94A3B8" stroke-width="1"/>
            <!-- Refreshing Wave Curve on Can -->
            <path d="M24 38C30 42 36 34 44 40C50 44 54 39 56 36V46C53 48 48 51 40 48C34 45 28 48 24 50V38Z" fill="#FFFFFF" fill-opacity="0.25"/>
            <!-- Water Droplets (Condensation) -->
            <circle cx="32" cy="34" r="1.2" fill="#E0F2FE"/>
            <circle cx="48" cy="46" r="1.4" fill="#E0F2FE"/>
            <circle cx="34" cy="50" r="1.2" fill="#E0F2FE"/>
            <!-- Fizz bubbles rising -->
            <circle cx="38" cy="14" r="1.5" fill="#38BDF8" opacity="0.8"/>
            <circle cx="43" cy="10" r="2" fill="#38BDF8" opacity="0.8"/>
            <circle cx="40" cy="6" r="1.2" fill="#38BDF8" opacity="0.8"/>
            <defs>
              <linearGradient id="grad-soda-can" x1="24" y1="24" x2="56" y2="60" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EF4444"/>
                <stop offset="0.6" stop-color="#DC2626"/>
                <stop offset="1" stop-color="#991B1B"/>
              </linearGradient>
            </defs>
          </svg>
        }

        @case ('extra-salad') {
          <!-- Extra: Fresh Garden Salad Bowl -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <ellipse cx="40" cy="67" rx="28" ry="6" fill="#1C1512" fill-opacity="0.1" />
            <!-- Ceramic Salad Bowl -->
            <path d="M16 42C16 42 22 64 40 64C58 64 64 42 64 42H16Z" fill="#FFFFFF" stroke="#CBD5E1" stroke-width="1.5"/>
            <ellipse cx="40" cy="42" rx="24" ry="9" fill="#F1F5F9" stroke="#E2E8F0" stroke-width="1"/>
            <!-- Lettuce & Fresh Greens -->
            <path d="M22 40C20 34 26 28 32 32C36 26 44 26 48 31C54 27 60 33 58 40" fill="#22C55E"/>
            <path d="M28 38C26 32 33 30 38 34C43 29 50 31 52 38" fill="#16A34A"/>
            <!-- Cucumber slices -->
            <circle cx="30" cy="38" r="4.5" fill="#86EFAC" stroke="#16A34A" stroke-width="1.2"/>
            <circle cx="30" cy="38" r="2.5" fill="#DCFCE7"/>
            <circle cx="50" cy="38" r="4.5" fill="#86EFAC" stroke="#16A34A" stroke-width="1.2"/>
            <circle cx="50" cy="38" r="2.5" fill="#DCFCE7"/>
            <!-- Red Tomato wedges -->
            <path d="M38 32C42 32 45 36 43 40C39 40 37 36 38 32Z" fill="#EF4444" stroke="#B91C1C" stroke-width="1"/>
            <path d="M24 44C27 42 30 46 28 48C25 48 23 46 24 44Z" fill="#EF4444"/>
            <!-- Mint leaf garnish & Olive Oil Drop -->
            <path d="M40 28C44 26 46 30 43 32C40 32 38 30 40 28Z" fill="#15803D"/>
            <circle cx="44" cy="42" r="1.5" fill="#EAB308"/>
          </svg>
        }

        @case ('extra-laban') {
          <!-- Extra: Traditional Laban Yogurt Clay Pot -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <ellipse cx="40" cy="68" rx="24" ry="6" fill="#1C1512" fill-opacity="0.1" />
            <!-- Clay Pot Body -->
            <path d="M22 36C20 46 24 64 40 64C56 64 60 46 58 36H22Z" fill="url(#grad-laban-pot)" stroke="#78350F" stroke-width="1.5"/>
            <!-- Pot Neck & Lip -->
            <ellipse cx="40" cy="36" rx="19" ry="6" fill="#D97706" stroke="#92400E" stroke-width="1.2"/>
            <!-- Fresh Creamy White Laban Surface -->
            <ellipse cx="40" cy="36" rx="16" ry="4.5" fill="#FFFFFF"/>
            <!-- Cream Swirl & Mint Leaf -->
            <path d="M34 36C37 38 43 38 46 35" stroke="#E2E8F0" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M40 33C42 30 45 32 44 34C42 34 40 33 40 33Z" fill="#16A34A"/>
            <!-- Pot handles -->
            <path d="M19 40C15 42 15 48 19 50" stroke="#92400E" stroke-width="1.5" stroke-linecap="round"/>
            <path d="M61 40C65 42 65 48 61 50" stroke="#92400E" stroke-width="1.5" stroke-linecap="round"/>
            <defs>
              <linearGradient id="grad-laban-pot" x1="20" y1="36" x2="60" y2="64" gradientUnits="userSpaceOnUse">
                <stop stop-color="#EA580C"/>
                <stop offset="0.7" stop-color="#C2410C"/>
                <stop offset="1" stop-color="#9A3412"/>
              </linearGradient>
            </defs>
          </svg>
        }

        @case ('extra-garlic') {
          <!-- Extra: Creamy Toum Garlic Ramekin + Garlic Clove -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <ellipse cx="40" cy="68" rx="26" ry="6" fill="#1C1512" fill-opacity="0.1" />
            <!-- Ramekin Bowl -->
            <path d="M18 42C18 42 22 64 40 64C58 64 62 42 62 42H18Z" fill="#FFFFFF" stroke="#E2CFBB" stroke-width="1.5"/>
            <!-- Creamy Garlic Dip -->
            <ellipse cx="40" cy="42" rx="22" ry="8" fill="#FEFCE8" stroke="#FEF08A" stroke-width="1"/>
            <!-- Toum Swirl texture -->
            <path d="M28 42C34 46 46 46 52 41" stroke="#FEF08A" stroke-width="2" stroke-linecap="round"/>
            <path d="M33 39C38 42 44 42 47 39" stroke="#FDE047" stroke-width="1.5" stroke-linecap="round"/>
            <!-- Whole Fresh Garlic Clove Garnish (Top Right) -->
            <path d="M46 22C42 26 40 32 46 35C52 35 55 30 52 25C50 22 47 20 46 22Z" fill="#FEF3C7" stroke="#D97706" stroke-width="1.2"/>
            <path d="M47 22V34" stroke="#FDE68A" stroke-width="1" stroke-linecap="round"/>
            <!-- Olive Oil Drizzle -->
            <ellipse cx="38" cy="42" rx="3" ry="1.5" fill="#EAB308" opacity="0.85"/>
          </svg>
        }

        @case ('extra-daqqous') {
          <!-- Extra: Spicy Hot Tomato Daqqous Sauce Ramekin + Chili Pepper -->
          <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <ellipse cx="40" cy="68" rx="26" ry="6" fill="#1C1512" fill-opacity="0.1" />
            <!-- Ramekin Bowl -->
            <path d="M18 42C18 42 22 64 40 64C58 64 62 42 62 42H18Z" fill="#FFFFFF" stroke="#FECACA" stroke-width="1.5"/>
            <!-- Vibrant Red Spicy Daqqous -->
            <ellipse cx="40" cy="42" rx="22" ry="8" fill="#DC2626" stroke="#991B1B" stroke-width="1"/>
            <!-- Crushed chili specks & herbs -->
            <circle cx="32" cy="42" r="1.2" fill="#7F1D1D"/>
            <circle cx="44" cy="40" r="1.4" fill="#7F1D1D"/>
            <circle cx="38" cy="45" r="1" fill="#7F1D1D"/>
            <circle cx="48" cy="44" r="1" fill="#16A34A"/>
            <circle cx="35" cy="39" r="0.8" fill="#FEF08A"/>
            <!-- Hot Red Chili Pepper Accent -->
            <path d="M50 20C46 23 44 30 50 34C55 35 58 29 55 24C53 21 51 19 50 20Z" fill="#DC2626" stroke="#991B1B" stroke-width="1.2"/>
            <path d="M50 20C49 17 51 15 53 14" stroke="#16A34A" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
        }

        @case ('flame') {
          <!-- Wood Fire Flame -->
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <path d="M12 2C14 7 19 9 19 15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15C5 10 10 7 12 2Z" fill="#DC2626"/>
            <path d="M12 8C13.5 11 17 12.5 17 16C17 18.7614 14.7614 21 12 21C9.23858 21 7 18.7614 7 16C7 13 10.5 11 12 8Z" fill="#F59E0B"/>
            <path d="M12 13C12.8 15 15 16 15 18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18C9 16 11.2 15 12 13Z" fill="#FEF08A"/>
          </svg>
        }

        @case ('star') {
          <!-- 8-Point Arabesque Star -->
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <path d="M12 2L14.5 7.5L20 5.5L18 11L23 13.5L18 16L20 21.5L14.5 19.5L12 25L9.5 19.5L4 21.5L6 16L1 13.5L6 11L4 5.5L9.5 7.5L12 2Z" fill="#F59E0B" stroke="#B45309" stroke-width="0.8"/>
            <circle cx="12" cy="13.5" r="2.5" fill="#FEF3C7"/>
          </svg>
        }

        @case ('check') {
          <!-- Checkmark -->
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <circle cx="12" cy="12" r="10" fill="#15803D"/>
            <path d="M8 12.5L10.5 15L16 9" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        }

        @case ('phone') {
          <!-- Phone Handset -->
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.94C17.55 15.31 18.76 15.51 20 15.51C20.55 15.51 21 15.96 21 16.51V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
          </svg>
        }

        @case ('whatsapp') {
          <!-- WhatsApp Icon -->
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.63C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 6.46 17.5 2 12.04 2Z" fill="#25D366"/>
            <path d="M17.51 14.38C17.21 14.23 15.74 13.51 15.46 13.41C15.19 13.31 15 13.26 14.8 13.56C14.6 13.86 14.03 14.53 13.85 14.73C13.68 14.93 13.5 14.96 13.2 14.81C12.9 14.66 11.94 14.34 10.8 13.33C9.91 12.54 9.31 11.56 9.14 11.26C8.96 10.96 9.12 10.8 9.27 10.65C9.4 10.52 9.57 10.3 9.72 10.12C9.87 9.95 9.92 9.82 10.02 9.62C10.12 9.42 10.07 9.25 10 9.1C9.92 8.95 9.32 7.48 9.07 6.88C8.83 6.3 8.58 6.38 8.4 6.37C8.23 6.36 8.03 6.36 7.83 6.36C7.63 6.36 7.31 6.43 7.03 6.73C6.76 7.03 6 7.74 6 9.18C6 10.62 7.05 12.01 7.2 12.21C7.35 12.41 9.26 15.37 12.2 16.63C12.9 16.93 13.45 17.11 13.87 17.25C14.57 17.47 15.21 17.44 15.71 17.36C16.27 17.28 17.43 16.66 17.68 15.96C17.92 15.26 17.92 14.66 17.85 14.53C17.78 14.41 17.81 14.53 17.51 14.38Z" fill="#FFFFFF"/>
          </svg>
        }

        @case ('copy') {
          <!-- Copy Clipboard -->
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <rect x="8" y="8" width="12" height="12" rx="2" stroke="currentColor" stroke-width="1.8"/>
            <path d="M16 8V6C16 4.89543 15.1046 4 14 4H6C4.89543 4 4 4.89543 4 6V14C4 15.1046 4.89543 16 6 16H8" stroke="currentColor" stroke-width="1.8"/>
          </svg>
        }

        @default {
          <!-- Fallback Grill Flame Spark -->
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="svg-icon" aria-hidden="true">
            <circle cx="12" cy="12" r="8" fill="#F59E0B"/>
          </svg>
        }
      }
    </div>
  `,
  styles: [`
    :host {
      display: inline-flex;
      align-items: center;
      justify-content: center;
    }
    .food-icon-container {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      line-height: 0;
    }
    .svg-icon {
      width: 100%;
      height: 100%;
      display: block;
    }
    .icon-sm { width: 24px; height: 24px; }
    .icon-md { width: 44px; height: 44px; }
    .icon-lg { width: 72px; height: 72px; }
    .icon-xl { width: 96px; height: 96px; }
  `]
})
export class FoodIconComponent {
  readonly name = input.required<string>();
  readonly size = input<'sm' | 'md' | 'lg' | 'xl'>('md');
}
