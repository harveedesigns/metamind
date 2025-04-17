"use client";

import { observer } from "mobx-react-lite";
import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import { lato } from "./theme/theme";
import MainLayout from "./layouts/mainLayout/MainLayout";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import stores from "./store/stores";
import Notification from "./component/common/Notification/Notification";
import Script from "next/script";
import { Montserrat } from "next/font/google";
import WhatsAppButton from "./component/common/whatsApp/whatsAppButton";
import Image from "next/image";
import { getMetadataForPath, PageMetadata } from "./metadata";

const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const RootLayout = observer(({ children }: { children: React.ReactNode }) => {
  const { companyStore: { getCompanyDetails } } = stores;
  const pathname = usePathname();
  const [metadata, setMetadata] = useState<PageMetadata>({
    title: 'Mental Health Clinic In Noida | Best Psychologist In Noida | Metamind',
    description: 'Searching for the best mental health doctor in Noida? Metamind, a trusted mental health clinic in Noida, offers expert care from top psychologists. Consult the best psychologist in Noida for therapy, counseling, and mental wellness now.'
  });

  useEffect(() => {
    getCompanyDetails();
  }, [getCompanyDetails]);

  useEffect(() => {
    if (pathname) {
      const pageMetadata = getMetadataForPath(pathname);
      setMetadata(pageMetadata);
      document.title = pageMetadata.title;
    }
  }, [pathname]);

  const getLayout = () => {
    return MainLayout;
  };

  const LayoutComponent = getLayout();

  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta property="og:image" content="https://www.metamindhealth.com/images/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />

        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l;j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-WQW7482D');
          `}
        </Script>

        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '615471921116956');
            fbq('track', 'PageView');
          `}
        </Script>

        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "qv8puuyx6y");
          `}
        </Script>

        <ColorModeScript initialColorMode="light" />
      </head>

      <body className={`${lato.className} ${montserrat.className}`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WQW7482D"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <noscript>
          <Image
            alt="Mental Health Clinic In Noida"
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=615471921116956&ev=PageView&noscript=1"
          />
        </noscript>

        <ChakraProvider theme={theme}>
          <Notification />
          <LayoutComponent>{children}</LayoutComponent>

          <Box display={{ base: "none", lg: "block" }}>
            <WhatsAppButton />
          </Box>

          <Script
            id="tawk-to"
            strategy="lazyOnload"
            dangerouslySetInnerHTML={{
              __html: `
                var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
                (function(){
                  var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
                  s1.async = true;
                  s1.src = 'https://embed.tawk.to/${process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID}/${process.env.NEXT_PUBLIC_TAWK_WIDGET_ID}';
                  s1.charset = 'UTF-8';
                  s1.setAttribute('crossorigin', '*');
                  s0.parentNode.insertBefore(s1, s0);
                })();
              `,
            }}
          />
        </ChakraProvider>
      </body>
    </html>
  );
});

export default RootLayout;