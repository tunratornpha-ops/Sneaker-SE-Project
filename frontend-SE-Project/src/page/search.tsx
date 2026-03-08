import { useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

const Search = () => {

    const [products, setProducts] = useState<any[]>([]);
    const [searchParams] = useSearchParams();

    const query = searchParams.get("q") || "";

    useEffect(() => {

        const fetchProducts = async () => {

            const res = await fetch("/api/products");
            const data = await res.json();

            const filtered = data.filter((p: any) =>
                p.name.toLowerCase().includes(query.toLowerCase())
            );

            setProducts(filtered);

        };

        fetchProducts();

    }, [query]);

    return (

        <div className="max-w-7xl mx-auto py-16 grid grid-cols-3 gap-8">

            {products.map((product) => (

                <ProductCard key={product._id} product={product} />

            ))}

        </div>

    );

};

export default Search;