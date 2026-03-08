import React, { useEffect, useState } from "react";
import Bestseller from "./bestseller";
import ProductCard from "../components/ProductCard";
import Shipping from "./Shipping";

const HeroSectionWomen: React.FC = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [category, setCategory] = useState<string | null>(null);
    useEffect(() => {

        const fetchProducts = async () => {

            const res = await fetch("/api/products");

            const data = await res.json();

            setProducts(data);

        };

        fetchProducts();

    }, []);
    const filteredProducts = category
        ? products.filter((p) => p.category === category)
        : products;

    return (
        <section className="w-full mx-auto bg-white">
            <div className="relative w-full h-[600px]">
                <img
                    src="./imageProjects/Women.jpg"
                    alt="Sneakers"
                    className="w-screen h-full object-cover object-[center_10%]"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <div className="w-full h-[110px] tracking-widest bg-black text-white text-center text-6xl py-6">
                Women's
            </div>
            <div>
                <Bestseller />
            </div>

            <div className="w-full flex justify-center mt-10">

                <div className="relative w-[90%] h-[350px]">

                    {/* Image */}
                    <img
                        src="/imageProjects/Girl.jpg"
                        className="w-full h-full object-cover object-[center_70%]"
                    />

                    {/* Dark Overlay */}
                    <div className="absolute inset-0 bg-black/60"></div>

                    {/* Text */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <h1 className="text-white text-6xl font-bold tracking-wide">
                            50% OFF WOMEN'S SHOES
                        </h1>
                    </div>

                </div>

            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-[250px_1fr] gap-10 mt-10">

                {/* Sidebar */}
                <div className="space-y-6 mt-10 px-8">

                    <h2 className="font-semibold text-2xl">FILTER</h2>

                    <div className="px-6">
                        <p className="text-md mb-2">CATEGORIES</p>

                        <div className="space-y-2 text-md">
                            <label className="flex items-center gap-4">
                                <input type="checkbox" className="scale-125" onChange={(e) => setCategory(e.target.checked ? "lifestyle" : null)} />
                                <span> Lifestyle Shoes </span>
                            </label>

                            <label className="flex items-center gap-4">
                                <input type="checkbox" className="scale-125" onChange={(e) => setCategory(e.target.checked ? "sport" : null)} />
                                <span> Sport Shoes </span>
                            </label>

                            <label className="flex items-center gap-4">
                                <input type="checkbox" className="scale-125" onChange={(e) => setCategory(e.target.checked ? "sandal" : null)} />
                                <span> Sandals </span>
                            </label>

                            <label className="flex items-center gap-4">
                                <input type="checkbox" className="scale-125" onChange={(e) => setCategory(e.target.checked ? "casual" : null)} />
                                <span> Casual Shoes </span>
                            </label>
                        </div>
                    </div>
                </div>

                {/* Products */}

                <div className="grid grid-cols-3 gap-8 mb-20">
                    {filteredProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                    ))}
                </div>

            </div>
            <div>
                <Shipping />
            </div>

        </section>

    );
};

export default HeroSectionWomen;