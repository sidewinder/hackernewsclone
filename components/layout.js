import Head from 'next/head'

export default ({title, children}) => {

    return ( 
        <div>
          <Head>
            <title><span className="Logo"></span> { title }</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />

            <meta name="theme-color" content="#ff6600" />
            <link rel="apple-touch-icon" href="/public/icon.png" />
            <meta name="apple-mobile-web-app-title" content="Hacker News" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="mobile-web-app-capable" content="yes" />
            <link rel="manifest" href="/public/manifest.webmanifest" />
          </Head>
     
          { children }

          <style global jsx>{`
              body {
                background: #eee;
                font-family: system-ui;
                margin: 0;
              }
              .Logo {
                background-image: url(public/icon.png);
              }
          `}</style>
        </div>
    )
}