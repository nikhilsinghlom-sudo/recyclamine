import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
// import StickyMenu from './components/Header/StickyMenu';
import './styles/Main.scss';

function Layout() {
  return (
    <>
      <Header/>
      {/* <StickyMenu/> */}
       <Outlet />
       <Footer/>
    </>
  );
}

export default Layout;
