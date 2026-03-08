import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";



const ProductDetail: React.FC = () => {
    const { id } = useParams();
    const [selectedSize, setSelectedSize] = useState("");
    const [selectedColor, setSelectedColor] = useState("");
    const [product, setProduct] = useState<any>(null);

    useEffect(() => {

        const fetchProduct = async () => {

            const res = await fetch(`/api/products/${id}`);


            const data = await res.json();

            setProduct(data);

        };

        fetchProduct();

    }, [id]);

    if (!product) {
        return <div>Product not found</div>;
    }


    const handleAddToCart = () => {
        if (!selectedSize) {
            alert("Please select a size");
            return;
        }

        if (!selectedColor) {
            alert("Please select a color");
            return;
        }

        const cart = JSON.parse(localStorage.getItem("cart") || "[]");

        const newItem = {
            id: product._id,
            name: product.name,
            price: product.price,
            image: product.image,
            size: selectedSize,
            color: selectedColor
        };
        if (!selectedSize) {
            alert("Please select a size");
            return;
        }

        cart.push(newItem);

        localStorage.setItem("cart", JSON.stringify(cart));
        window.dispatchEvent(new Event("cartUpdated"));

    };

    return (

        <div className="bg-gray-200">
            <div className="max-w-7xl mx-auto pt-10">

                <div className="text-lg text-gray-500 flex items-center gap-2 mb-6">

                    <Link to="/" className="text-black hover:text-white">
                        Home
                    </Link>

                    <span>›</span>

                    <span className="text-black font-medium">
                        {product.name}
                    </span>

                </div>

            </div>
            <div className="max-w-7xl mx-auto py-16 grid grid-cols-2 gap-16">

                {/* LEFT SIDE - IMAGE */}

                <div>

                    <img
                        src={product.image}
                        className="w-full object-contain rounded-2xl"
                    />

                </div>


                {/* RIGHT SIDE - PRODUCT INFO */}

                <div>

                    {/* Name */}

                    <h1 className="text-3xl font-semibold">
                        {product.name}
                    </h1>

                    <p className="text-gray-500 mt-2 text-2xl">
                        ${product.price}
                    </p>


                    {/* SIZE */}

                    <h3 className="mt-10 font-medium">
                        SIZE
                    </h3>

                    <div className="grid grid-cols-2 gap-3 mt-4">

                        {product.size?.map((size: string) => (

                            <button
                                key={size}
                                onClick={() => setSelectedSize(size)}
                                className={`border py-2 ${selectedSize === size
                                    ? "bg-black text-white"
                                    : ""
                                    }`}
                            >
                                {size}
                            </button>

                        ))}

                    </div>


                    {/* COLOR */}

                    <h3 className="mt-10 font-medium">
                        COLOR
                    </h3>

                    <div className="flex justify-center gap-8 mt-4">

                        {product.color?.map((color: string) => (

                            <button
                                key={color}
                                onClick={() => setSelectedColor(color)}
                                className={`w-12 h-12 rounded-full border-2 ${selectedColor === color
                                    ? "ring-2 ring-black"
                                    : ""
                                    }`}
                                style={{ backgroundColor: color }}
                            />

                        ))}

                    </div>


                    {/* ADD TO CART */}

                    <button onClick={handleAddToCart} className="w-full bg-black text-white py-4 mt-10 rounded">
                        ADD TO BAG
                    </button>


                    {/* FAVORITE */}

                    <button className="w-full border py-4 mt-4 rounded">
                        FAVORITE ♡
                    </button>

                </div>

            </div>
        </div>

    );
};

export default ProductDetail;