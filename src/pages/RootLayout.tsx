import { Outlet } from 'react-router'
import PricePages from './PricePages'
import Footer from '@/components/layout/Footer';

export const RootLayout = () => {
  return (
    <div className=" bg-[#1C1E53] min-h-screen overflow-hidden">
      <PricePages />
      <Outlet />
      <Footer />
    </div>
  );
}
