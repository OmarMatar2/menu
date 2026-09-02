import { MealOption, SideOption, ExtraOption } from '../models/menu.models';

export const MEAL_OPTIONS: MealOption[] = [
  {
    id: 'half-chicken',
    title: 'نصف دجاجة',
    price: 3.00,
    servesText: 'تكفي شخص واحد',
    chickensCount: 0.5,
    description: 'نصف دجاجة متبلة ومحمرة على الحطب مع الخلطة الأردنية الشهية',
    iconKey: 'half-chicken'
  },
  {
    id: 'whole-chicken',
    title: 'دجاجة كاملة',
    price: 6.00,
    servesText: 'تكفي 2 - 3 أشخاص',
    chickensCount: 1.0,
    badge: 'الأكثر طلباً 🔥',
    badgeType: 'flame',
    popular: true,
    description: 'دجاجة طازجة كاملة مشوية على الحطب، مقرمشة من الخارج وطرية من الداخل',
    iconKey: 'whole-chicken'
  },
  {
    id: 'one-half-chicken',
    title: 'دجاجة ونصف',
    price: 8.00,
    servesText: 'تكفي 3 - 4 أشخاص',
    chickensCount: 1.5,
    description: 'وجبة مثالية للجلسات والجمعات الصغيرة مع أطيب نكهة حطب',
    iconKey: 'one-half-chicken'
  },
  {
    id: 'two-chickens',
    title: 'دجاجتان',
    price: 11.00,
    servesText: 'تكفي 4 - 6 أشخاص',
    chickensCount: 2.0,
    badge: 'وجبة التوفير',
    badgeType: 'gold',
    description: 'دجاجتان كاملتان مشويتان بعناية مع توفير مميز وقيمة لا تقاوم',
    iconKey: 'two-chickens'
  },
  {
    id: 'three-chickens',
    title: '3 دجاجات',
    price: 15.00,
    servesText: 'تكفي 6 - 9 أشخاص',
    chickensCount: 3.0,
    badge: 'الوجبة الاقتصادية',
    badgeType: 'gold',
    description: 'وليمة مشوية تليق بجمعة الأصحاب والأحباب مع كامل المرفقات',
    iconKey: 'three-chickens'
  },
  {
    id: 'four-chickens',
    title: '4 دجاجات',
    price: 19.00,
    servesText: 'تكفي 8 - 12 شخص',
    chickensCount: 4.0,
    badge: 'الوجبة العائلية',
    badgeType: 'green',
    description: 'العرض العائلي الأكبر لولائم العائلة ولمات نهاية الأسبوع',
    iconKey: 'four-chickens'
  }
];

export const SIDE_OPTIONS: SideOption[] = [
  {
    id: 'side-rice',
    title: 'مع الرز',
    includedItems: ['رز مبهر فاخر', 'صوص الدقوس الحار', 'لبن رائب طازج'],
    description: 'أرز فاخر مفلفل بالبهارات الأردنية الخاصة، يقدم مع صلصة الدقوس واللبن',
    iconKey: 'side-rice',
    badgeText: 'مجاني ومشمول مع الوجبة'
  },
  {
    id: 'side-fries',
    title: 'مع البطاطا المقلية',
    includedItems: ['بطاطا مقلية ذهبية مقرمشة', 'صوص الثومية الأصلي'],
    description: 'أصابع بطاطا ذهبية مقرمشة وساخنة مع ثومية محضرة يدوياً على أصولها',
    iconKey: 'side-fries',
    badgeText: 'مجاني ومشمول مع الوجبة'
  },
  {
    id: 'side-roasted',
    title: 'مع البطاطا والبصل المشوي',
    includedItems: ['بطاطا مشوية حبة كاملة', 'بصل مشوي', 'صوص الثوم'],
    description: 'بطاطا كاملة مشوية في قلب الحطب مع بصل مشوي بنكهة الدخان الرائعة وثومية كريمية',
    iconKey: 'side-roasted',
    badgeText: 'مجاني ومشمول مع الوجبة'
  }
];

export const EXTRA_OPTIONS: ExtraOption[] = [
  {
    id: 'extra-soda',
    title: 'مشروب غازي',
    price: 0.25,
    category: 'drink',
    description: 'علبة باردة ومنعشة (بيبسي / سفن آب / ميرندا)',
    iconKey: 'extra-soda'
  },
  {
    id: 'extra-salad',
    title: 'السلطات',
    price: 0.50,
    category: 'salad',
    description: 'سلطة بلدية طازجة مع الخيار، فتوش، تبولة',
    iconKey: 'extra-salad'
  },
  {
    id: 'extra-laban',
    title: 'لبن إضافي',
    price: 0.25,
    category: 'dairy',
    description: 'عبوة لبن رائب بلدي بارد ومنعش',
    iconKey: 'extra-laban'
  },
  {
    id: 'extra-garlic',
    title: 'صوص الثوم',
    price: 0.25,
    category: 'sauce',
    description: 'علبة ثومية كريمية إضافية ناعمة وغنية بالنكهة',
    iconKey: 'extra-garlic'
  },
  {
    id: 'extra-daqqous',
    title: 'صوص الدقوس',
    price: 0.25,
    category: 'sauce',
    description: 'علبة دقوس طماطم بالخلطة الخاصة',
    iconKey: 'extra-daqqous'
  }
];

export const RESTAURANT_INFO = {
  name: 'دجاجة بالقنية',
  tagline: 'من طلبك تبدأ الحكاية',
  phone: '0789898226',
  phoneDisplay: '0789898226',
  freshnessPromise: 'دجاجنا طازج ومكوناته كلها فريش',
  closingSlogan: 'ولمستنا بتفرق',
  address: 'عمان - المملكة الأردنية الهاشمية',
  hours: 'يومياً من 11:00 صباحاً حتى 12:00 منتصف الليل',
  deliveryText: 'خدمة التوصيل السريع متوفرة لجميع المناطق'
};
