import { Providers } from '@/lib/providers';
import { ThemeProvider } from '@/components/theme-provider';
import Layout from '@/layout/layout';

import './globals.css';
import { Footer, Header } from '@/modules';
import { lato } from '@/lib/utils';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <Providers>
        <body className={`${lato.className} antialiased`}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </Providers>
    </html>
  );
}
