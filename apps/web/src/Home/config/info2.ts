import { CardWidgetDataSource } from '@/Home/components/CardWidget';

export const infos2 = (): CardWidgetDataSource => ({
  key: 'EARN CARD',
  title: 'Earn Card',
  desctipion:
    'A prepaid card that allows you to spend mulitiple currencies seamlessly anywhere in the world*. Spend 150+ currencies at millions of retailers and service providers, in store or online.',
  img: '/assets/616b107996325e5dde6834EARN_CARD.jpg',
  items: [
    {
      key: 'Cryptocurrency',
      title: '150+ Countries',
      desctipion: 'Spend multiple traditional currencies anywhere MasterCard is accepted.',
      icon: '/assets/cd_3466782.svg',
    },
    {
      key: 'Traditional Currency',
      title: 'Travel Discounts',
      desctipion:
        'Save precious time and money. Use your Club Swan virtual assistant for your travel needs.',
      icon: '/assets/cd_3466788.svg',
    },
    {
      key: 'Concierge',
      title: 'Luxury Concierge',
      desctipion: 'All requests, large or small, are handled with care and efficiency.',
      icon: '/assets/cd_3466789.svg',
    },
  ],
});
