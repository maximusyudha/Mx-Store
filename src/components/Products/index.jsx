"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Product = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  const navigateToProductDetail = (Id) => {
    router.push(`/Detail?id=${Id}`);
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 p-16">
      {data.map((item) => (
        <div key={item.id} className="card-container border rounded-lg overflow-hidden">
          <div className="flex flex-col h-full">
            <div className="flex-shrink-0 h-[250px] md:h-[400px] relative mb-4">
              <img
                className="w-[450px] h-[400px] object-screen rounded-md"
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="flex-1 bg-white rounded-lg border p-4">
              <div className="mb-4">
                <div className="text-md font-semibold">{item.title}</div>
                <div className="flex items-center text-sm text-gray-500">
                  {item.category}
                </div>
              </div>
              <div className="flex flex-col items-start">
                <div className="text-xl font-medium tracking-wide mb-4">
                  ${item.price}
                </div>
                <button
                  onClick={() => navigateToProductDetail(item.id)}
                  className="w-full px-4 py-2 rounded-[35px] border border-gray-500 text-base font-medium tracking-tight"
                >
                  View Product Details
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
