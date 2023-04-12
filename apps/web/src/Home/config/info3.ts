import { CardWidgetDataSource } from '@/Home/components/CardWidget';

export const infos3 = (): CardWidgetDataSource => ({
  key: 'Smart Accounts',
  title: 'Smart Accounts',
  desctipion:
    'The flexible accounts available through EARN gives you access to multiple traditional currency wallets, bank transfers and an elegant metal EARN prepaid card allowing you to spend in more than 150 currencies around the globe.',
  img: 'https://assets.website-files.com/61632e7cbaff332d7d0bb759/6170f9e9ac366c3f04f82f39_dollar-euro-pound-and-yen-currency-icons-vector-4465325.jpg',
  items: [
    {
      key: 'EARN CARD',
      title: 'EARN CARD',
      desctipion:
        'Hold your money in multiple currencies with quick access and ability to spend across the globe with your EARN card.',
      icon: 'https://assets.website-files.com/61632e7cbaff332d7d0bb759/617ca0785ecb8e004d14a064_credibility-mastercard.png',
    },
    {
      key: 'FIAT',
      title: 'FIAT',
      desctipion: 'USD, GBP, EUR, CNY, & JPY',
      icon: 'https://assets.website-files.com/61632e7cbaff332d7d0bb759/61632e7cbaff33aecd0bb80d_icon-8-features-dark-template.svg',
    },
    {
      key: 'ON AND OFF RAMP',
      title: 'ON AND OFF RAMP',
      desctipion:
        'Transfer funds in and out of your account with SEPA/SWIFT/Faster Payment/Fed Wire Payments.',
      icon: 'https://assets.website-files.com/61632e7cbaff332d7d0bb759/61632e7cbaff33522f0bb80e_icon-5-features-dark-template.svg',
    },
  ],
});
