import { Noto_Sans_JP } from 'next/font/google';

export const notoSansJP = Noto_Sans_JP({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});
