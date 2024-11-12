import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Root } from "./routes/root";
import { ErrorPage } from "./routes/error-page";
import { HomePage } from "./routes/home-page";
import { ShoppingCartPage } from "./routes/shopping-cart-page";
import { ClerkProvider } from "@clerk/clerk-react";
import { ProductPage } from "./routes/product-page";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing publishable key");
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Root />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/shopping-cart" element={<ShoppingCartPage />} />
      <Route path="/product/:productId" element={<ProductPage />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <RouterProvider router={router} />
    </ClerkProvider>
  </StrictMode>
);
