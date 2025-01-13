import { fetchFeaturedProducts } from '@/utils/actions';
import EmptyList from '../global/EmptyList';
import SectionTitle from '../global/SectionTitle';
import ProductsGrid from '../products/ProductsGrid';

export default async function FeaturedProducts() {
  const products = await fetchFeaturedProducts();

  if (!products.length) return <EmptyList />;

  return (
    <section className="pt-24">
      <SectionTitle>featured products</SectionTitle>
      <ProductsGrid products={products} />
    </section>
  );
}
