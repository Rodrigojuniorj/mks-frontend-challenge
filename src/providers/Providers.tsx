"use client";

import { ProviderStyle } from "@/app/styles/Theme";
import { ReactNode } from "react";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductsDataProvider } from "@/context/data/useProductData";
import { ShoppingProvider } from "@/context/shopping/useShopping";

const queryClient = new QueryClient();

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProviderStyle>
      <QueryClientProvider client={queryClient}>
        <ProductsDataProvider>
          <ShoppingProvider>{children}</ShoppingProvider>
        </ProductsDataProvider>
      </QueryClientProvider>
    </ProviderStyle>
  );
};

export default Providers;
