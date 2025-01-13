import ProductsContainer from '@/components/products/ProductsContainer';

export default function ProductsPage({
  searchParams
}: {
  searchParams: { layout?: string; search?: string };
}) {
  const { layout = 'grid', search = '' } = searchParams;

  return <ProductsContainer layout={layout} search={search} />;
}
