import Document, { Head, Main, NextScript } from 'next/document';
import { Global, css } from '@emotion/core'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="manifest" href="/favicons/site.webmanifest" />
          <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="viewport" content="minimum-scale=1">
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta name="description" content="I research, design and build valuable software solutions to empower users and increase product growth." />
          <link href="https://fonts.googleapis.com/css?family=Spartan:400,500,700,900&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <Global styles={css`
            html, body, div, span, applet, object, iframe,
            h1, h2, h3, h4, h5, h6, p, blockquote, pre,
            a, abbr, acronym, address, big, cite, code,
            del, dfn, em, img, ins, kbd, q, s, samp,
            small, strike, strong, sub, sup, tt, var,
            b, u, i, center,
            dl, dt, dd, ol, ul, li,
            fieldset, form, label, legend,
            table, caption, tbody, tfoot, thead, tr, th, td,
            article, aside, canvas, details, embed, 
            figure, figcaption, footer, header, hgroup, 
            menu, nav, output, ruby, section, summary,
            time, mark, audio, video {
              margin: 0;
              padding: 0;
              border: 0;
              font-size: 100%;
              font: inherit;
              vertical-align: baseline;
            }
            ol, ul {
              list-style: none;
            }
            blockquote, q {
              quotes: none;
            }
            blockquote:before, blockquote:after,
            q:before, q:after {
              content: '';
              content: none;
            }
            table {
              border-collapse: collapse;
              border-spacing: 0;
            }
            * {
              -webkit-font-smoothing: antialiased;
            }
            html,body {
              min-height: 100vh;
            }
            body {
              font-family: 'Spartan', sans-serif;
              line-height: 1;
              -webkit-font-smoothing: antialiased;
              text-rendering: optimizelegibility;
              background-color: #F2F8FF;
            }

            body.overflow {
              overflow: hidden;
            }
            
            #__next {
              display flex;
              flex-direction: column;
              align-items: center;

              &> div {
                background-color: #F2F8FF !important;
              }
            }

            p {
              font-size: 22px;
            }

            @media only screen and (max-width: 1024px) {
              p, h2, h3 {
                font-size: 18px;
                line-height: 22px;
              }
            }

            @media only screen and (max-width: 550px) {
              p, h2, h3 {
                font-size: 15px;
                line-height: 17px;
              }
            }
            `}
          />
        </body>
      </html>
    )
  }
}