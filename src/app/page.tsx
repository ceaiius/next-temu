import { getCurrentSession } from '@/actions/auth'
import { getAllProducts } from '@/sanity/lib/client';
import SalesCampaignBanner from './component/layout/SalesCampaignBanner';
import ProductGrid from './component/product/ProductGrid';

const Home = async () =>  {
  const products  = await getAllProducts();
  const {user} = await getCurrentSession();
  return (
    <div>
      <SalesCampaignBanner/>
      <section className='container mx-auto py-8'>
        <ProductGrid products={products}/>
      </section>
    </div>
  )
}

export default Home;
