'use client';

import { ThemeProvider } from '@/components/theme-provider';
import { useSelector } from '@/lib/redux';
import { lato } from '@/lib/utils';
import { Footer, Header } from '@/modules';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { theme } = useSelector((state) => state.theme);

  return (
    <html lang='en'>
      <body className={`${lato.className} antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default Layout;
