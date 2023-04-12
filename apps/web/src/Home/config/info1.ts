import { CardWidgetDataSource } from '@/Home/components/CardWidget';

export const infos1 = (): CardWidgetDataSource => ({
  key: 'title',
  title: 'Your money. When you what it.',
  desctipion:
    'The Earn website has a built in Digital payments platform for crypto and traditional currencies combined with concierge services saving you up to 40%* on travel, shopping, and experiences.',
  img: 'https://assets.website-files.com/61632e7cbaff332d7d0bb759/616b107996325e5dde6834bd_EARN%20GIF%20PHONE.gif',
  items: [
    {
      key: 'Cryptocurrency',
      title: 'Cryptocurrency',
      desctipion:
        'Buy and sell crypto from our inventory with one simple low rate and quick wallet to wallet transfers.',
      icon: 'https://assets.website-files.com/61632e7cbaff332d7d0bb759/61632e7cbaff3378c30bb7dc_icon-6-features-dark-template.svg',
    },
    {
      key: 'Traditional Currency',
      title: 'Traditional Currency',
      desctipion:
        'A flexible alternative to your bank with no account fees. Bank transfers and low fees. Spend 150+ traditional currencies with EARN prepaid card.',
      icon: 'https://assets.website-files.com/61632e7cbaff332d7d0bb759/61632e7cbaff333c4f0bb7db_icon-2-features-dark-template.svg',
    },
    {
      key: 'Concierge',
      title: 'Concierge',
      desctipion:
        'Save precious time and money. Use your EARN virtual assistant for your travel needs. Exclusive events, VIP dining and much more.',
      icon: 'https://assets.website-files.com/61632e7cbaff332d7d0bb759/61632e7cbaff33c7080bb829_icon-3-features-dark-template.svg',
    },
  ],
});
