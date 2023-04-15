import { CardWidgetDataSource } from '@/Home/components/CardWidget';

export const infos3 = (): CardWidgetDataSource => ({
  key: 'Smart Accounts',
  title: 'Smart Accounts',
  desctipion:
    'The flexible accounts available through EARN gives you access to multiple traditional currency wallets, bank transfers and an elegant metal EARN prepaid card allowing you to spend in more than 150 currencies around the globe.',
  img: '/assets/616b107996325e5dde6834EARN_COINS.jpg',
  items: [
    {
      key: 'EARN CARD',
      title: 'Earn Card',
      desctipion:
        'Hold your money in multiple currencies with quick access and ability to spend across the globe with your EARN card.',
      icon: '/assets/cd_3466787.svg',
    },
    {
      key: 'FIAT',
      title: 'FIAT',
      desctipion: 'USD, GBP, EUR, CNY, & JPY',
      icon: '/assets/cd_3466783.svg',
    },
    {
      key: 'ON AND OFF RAMP',
      title: 'On and off Ramp',
      desctipion:
        'Transfer funds in and out of your account with SEPA/SWIFT/Faster Payment/Fed Wire Payments.',
      icon: '/assets/cd_3466784.svg',
    },
  ],
});
