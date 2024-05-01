import './store.scss';

import { getProducts } from "@/apis/getProducts.api";
import { Cards } from "@/components/cards/cards";
import { HydrationBoundary, QueryClient, dehydrate } from "@tanstack/react-query";

export default async function Strore() {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery({
    queryKey: ['getProducts'],
    queryFn: getProducts
  })

  return (
    <main className="container_main">
      <div className='container_cards'>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <Cards />
        </HydrationBoundary>
      </div>
    </main>
  );
}
