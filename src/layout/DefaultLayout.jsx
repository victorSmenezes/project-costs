import { Outlet } from 'react-router-dom';

import Footer from '../components/Footer/Footer';
import Navbar from '../components/Header/Navbar';

function DefaultLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default DefaultLayout;
