import { getCurrentSession } from '@/actions/auth'
import { getAllProducts } from '@/sanity/lib/client';

const Home = async () =>  {
  const products  = await getAllProducts();
  const {user} = await getCurrentSession();
  return (
    <div>{JSON.stringify(products)}</div>
  )
}

export default Home;
