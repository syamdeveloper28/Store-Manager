import './App.css';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import AddProduct from './components/addProduct';
import ProductCatalog from './components/Product/productcatalog';
import Layout from './Layout';
import Cart from './components/Cart/cart';
import NotFound from './pages/NotFound';
import { CartProvider } from './context/CartContext';
import Inventory from './components/Inventory/inventory';
import { InventoryProvider } from './context/InventoryContext';
import { SalesProvider } from './context/SalesContext';
import Sales from './components/Sales/sales';

const router = createBrowserRouter([
  {
    element: (
      <Layout />
    ),
    children: [
      {
        path: "/",
        element: <ProductCatalog />,
      },
      {
        path: "/add-product",
        element: <AddProduct />,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/sales",
        element: <Sales />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  }
])

const App = () => {
  return (
    <InventoryProvider>
        <CartProvider>
          <SalesProvider>
            <RouterProvider router={router} />
          </SalesProvider>
        </CartProvider>
    </InventoryProvider>
  );
}

export default App
