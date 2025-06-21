
interface Category {
  name: string;
  description: string;
}

interface ProductCategoriesProps {
  categories: Category[];
}

const ProductCategories = ({ categories }: ProductCategoriesProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-['Playfair_Display'] text-3xl font-bold text-gray-900 mb-8 text-center">
          Available Categories
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div key={index} className="bg-mint rounded-lg p-6">
              <h3 className="font-semibold text-forest-green mb-3">{category.name}</h3>
              <p className="text-gray-700 text-sm">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;
