import DefaultLayout from '../../layouts/component/DefaultLayout';
import SlideShow from '../../components/commons/SlideShow';
import CategoriesMenu from '../../components/commons/CategoriesMenu';
import ProductCard from '../../components/commons/ProductCard';
import slideData from '../../data/slideData';

const Home = () => {
  const products = [
    {
      id: 1,
      name: 'Fjallraven - Foldsack No. 1 Backpack',
      price: '109.95',
      image: 'https://via.placeholder.com/150',
      storeName: 'Store ABC',
      discount: '10% OFF',
    },
    {
      id: 2,
      name: 'Mens Casual Premium Slim Fit T-Shirts',
      price: '22.3',
      image: 'https://via.placeholder.com/150',
      storeName: 'Store DEF',
    },
  ];

  return (
    <DefaultLayout>
      {/* SlideShow */}
      <div className="relative z-0">
        <SlideShow slides={slideData} />
      </div>

      {/* Categories */}
      <div className="mt-6">
        <CategoriesMenu />
      </div>

      {/* Products */}
      <div className="mt-8 px-4">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              name={product.name}
              price={product.price}
              image={product.image}
              storeName={product.storeName || ''}
              discount={product.discount || ''}
            />
          ))}
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Home;
