import React from "react";
import { Link } from "react-router-dom";

type Product = {
    _id: number;
    name: string;
    price: number;
    image: string;
};

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
    return (
        <Link to={`/product/${product._id}`}>
            <div className="border rounded-lg p-6 text-center hover:shadow-lg transition">
                
                <div className="overflow-hidden">
                    <img
                        src={product.image}
                        className="w-full h-40 object-contain hover:scale-110 transition"
                    />
                </div>

                <p className="mt-4 font-medium">{product.name}</p>
                <p className="text-gray-500">${product.price}</p>

            </div>
        </Link>
    );
};

export default ProductCard;