import { CardWidgetDataSource } from '@/Home/components/CardWidget';

export const infos2 = (): CardWidgetDataSource => ({
  key: 'EARN CARD',
  title: 'EARN CARD',
  desctipion:
    'A prepaid card that allows you to spend mulitiple currencies seamlessly anywhere in the world*. Spend 150+ currencies at millions of retailers and service providers, in store or online.',
  img: 'https://assets.website-files.com/61632e7cbaff332d7d0bb759/616b106ca35cb35b9fec8b49_Earn-Guild-Card-2x.jpg',
  items: [
    {
      key: 'Cryptocurrency',
      title: 'Cryptocurrency',
      desctipion:
        'Buy and sell crypto from our inventory with one simple low rate and quick wallet to wallet transfers.',
      icon: 'https://assets.website-files.com/61632e7cbaff332d7d0bb759/61632e7cbaff3319850bb7f6_icon-2-values-dark-template.svg',
    },
    {
      key: 'Traditional Currency',
      title: 'Traditional Currency',
      desctipion:
        'A flexible alternative to your bank with no account fees. Bank transfers and low fees. Spend 150+ traditional currencies with EARN prepaid card.',
      icon: 'https://assets.website-files.com/61632e7cbaff332d7d0bb759/61632e7cbaff33a1550bb82e_icon-1-careers-perks-dark-template.svg',
    },
    {
      key: 'Concierge',
      title: 'Concierge',
      desctipion:
        'Save precious time and money. Use your EARN virtual assistant for your travel needs. Exclusive events, VIP dining and much more.',
      icon: 'https://assets.website-files.com/61632e7cbaff332d7d0bb759/61632e7cbaff33051e0bb83d_icon-1-contact-links-dark-template.svg',
    },
  ],
});
