import { createBrowserRouter } from "react-router";
import { RootLayout } from '@/pages/RootLayout';
import PricePages from './pages/PricePages';

export const router = createBrowserRouter([
    {
      path:'/',
      element:<RootLayout />,
       children: [
        {
            index:true,
            element: <PricePages />,
        },
     

    }
])