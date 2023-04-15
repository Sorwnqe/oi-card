import { CardWidgetDataSource } from '@/Home/components/CardWidget';

export const infos1 = (): CardWidgetDataSource => ({
  key: 'title',
  title: 'Your money. When you what it.',
  desctipion:
    'The Earn website has a built in Digital payments platform for crypto and traditional currencies combined with concierge services saving you up to 40%* on travel, shopping, and experiences.',
  img: '/assets/616b107996325e5dde6834EARN_GIF.gif',
  items: [
    {
      key: 'Cryptocurrency',
      title: 'Cryptocurrency',
      desctipion:
        'Buy and sell crypto from our inventory with one simple low rate and quick wallet to wallet transfers.',
      icon: '/assets/cd_3466817.svg',
    },
    {
      key: 'Traditional Currency',
      title: 'Traditional Currency',
      desctipion:
        'A flexible alternative to your bank with no account fees. Bank transfers and low fees. Spend 150+ traditional currencies with EARN prepaid card.',
      icon: '/assets/cd_3466780.svg',
    },
    {
      key: 'Concierge',
      title: 'Concierge',
      desctipion:
        'Save precious time and money. Use your EARN virtual assistant for your travel needs. Exclusive events, VIP dining and much more.',
      icon: '/assets/cd_3466781.svg',
    },
  ],
});
