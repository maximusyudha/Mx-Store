"use client";
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShare, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import axios from 'axios';

const ProductDetail = () => {
    const router = useRouter();
    const [product, setProduct] = useState(null);
    const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get("id");

    const fetchProduct = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/products/${id}`
        );
        setProduct(response.data.data);
      } catch (error) {
        console.error("Error fetching Product:", error);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [router.query]);

  const goBack = () => {
    router.back();
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="container mx-auto flex mb-80 mt-24">
        <div className="w-1/2 ml-40 rounded-lg object-cover">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto rounded obeject-cover"
            style={{ height: "461px", width: "463px" }}
          />
        </div>
        <div className="ml-16">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            </div>
            <div className="flex space-x-4 mr-40">
              <button className="rounded-full h-8 w-8 bg-gray-500 text-white flex justify-center items-center">
                <FontAwesomeIcon icon={faHeart} className="" />
              </button>
              <button
                className="rounded-full h-8 w-8 bg-gray-500 text-white flex justify-center items-center"
                onClick={handleCopyLink}
              >
                <FontAwesomeIcon icon={faShare} className="" />
              </button>
            </div>
          </div>
          <p className="text-lg flex items-center">
            <FontAwesomeIcon icon={faMapMarker} className="mr-2" />
            {product.price}
          </p>
          <p className="font-bold text-sm mt-10">Deskripsi</p>
          <p className="text-gray-600 text-sm mb-8 mr-32">{product.description}</p>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
