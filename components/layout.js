import Head from 'next/head';
import Header from './header';

const Layout = (props) => (
  <>
    <Head>
      <title>Magic</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>

    <Header />
    <main>
      <div className='container'>{props.children}</div>
    </main>
    <style jsx global>{`
      * {
        font-family: sans-serif !important;
        outline: none;
        background-color: black;
      }
      .container {
        max-width: 42rem;
        margin: 0 auto;
        padding: 0 10px;
                background-color: black;

      }
    `}</style>
  </>
);

export default Layout;
