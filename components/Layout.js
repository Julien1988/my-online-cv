import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
    <>        
    <Head>
        <title>Julien Broens - Mon CV en ligne</title>
        <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />
        {children}
    <Footer />
    </>


)

export default Layout;