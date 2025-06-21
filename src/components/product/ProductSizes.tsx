interface ProductSizesProps {
  sizes: {
    headers: string[];
    rows: string[][];
  };
}

const ProductSizes = ({ sizes }: ProductSizesProps) => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="font-['Playfair_Display'] text-3xl font-bold text-center text-black mb-10">Available Sizes</h2>

        <div className="overflow-x-auto max-w-5xl mx-auto border border-gray-200 rounded-xl shadow">
          <table className="w-full table-auto text-left text-sm text-gray-800">
            <thead className="bg-green-900 text-white">
              <tr>
                {sizes.headers.map((header, idx) => (
                  <th key={idx} className="px-6 py-4 font-semibold">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sizes.rows.map((row, i) => (
                <tr key={i} className="odd:bg-white even:bg-gray-50">
                  {row.map((cell, j) => (
                    <td key={j} className="px-6 py-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ProductSizes;
