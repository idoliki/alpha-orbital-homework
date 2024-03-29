import Document, { Head, Html, Main, NextScript } from 'next/document';

import { getCssText } from '@/ui/stitches.config';

class MyDocument extends Document {
   render() {
      return (
         <Html>
            <Head>
               <link rel='preconnect' href='https://fonts.googleapis.com' />
               <link
                  rel='preconnect'
                  href='https://fonts.gstatic.com'
                  crossOrigin='true'
               />
               <link
                  href='https://fonts.googleapis.com/css2?family=Inter:wght@300;500;700&display=swap'
                  rel='stylesheet'
               />
               <style
                  id='stitches'
                  dangerouslySetInnerHTML={{ __html: getCssText() }}
               />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;
