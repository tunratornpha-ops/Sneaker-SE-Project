import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {

    

    const [cartCount, setCartCount] = useState(0);
    const [user, setUser] = useState<any>(null);
    const [search, setSearch] = useState("");
    const [products, setProducts] = useState<any[]>([]);
    const [results, setResults] = useState<any[]>([]);

    const handleSearch = (value: string) => {

        setSearch(value);

        if (!value) {
            setResults([]);
            return;
        }

        const filtered = products.filter((p: any) =>
            p.name.toLowerCase().includes(value.toLowerCase())
        );

        setResults(filtered.slice(0, 5)); // แสดง 5 อัน
    };

    useEffect(() => {

        const fetchProducts = async () => {

            const res = await fetch("/api/products");

            const data = await res.json();

            setProducts(data);

        };

        fetchProducts();

    }, []);



    useEffect(() => {

        const updateUser = () => {
            const storedUser = localStorage.getItem("user");

            if (storedUser) {
                setUser(JSON.parse(storedUser));
            } else {
                setUser(null);
            }
        };

        const updateCart = () => {
            const cart = JSON.parse(localStorage.getItem("cart") || "[]");
            setCartCount(cart.length);
        };

        updateUser();
        updateCart();

        window.addEventListener("cartUpdated", updateCart);
        window.addEventListener("userUpdated", updateUser);

        return () => {
            window.removeEventListener("cartUpdated", updateCart);
            window.removeEventListener("userUpdated", updateUser);
        };


    }, []);

    return (
        <div className="w-full border-b">

            {/* top navbar */}
            <div className="grid grid-cols-3 items-center px-6 ">

                {/* logo */}
                <div className="flex items-center gap-3">
                    <Link to="/">
                        <img src="./imageProjects/Logo.png" alt="" className="w-[350px] h-50 object-cover" />
                    </Link>
                </div>

                {/* search bar */}
                <div className="flex justify-center">
                    <div className="flex w-[500px] justify-center relative">
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => handleSearch(e.target.value)}
                            className="w-full border px-4 py-2 rounded"
                        />

                        <span className="absolute right-3 top-2">
                            🔍
                        </span>
                        {results.length > 0 && (

                            <div className="absolute top-12 w-full bg-white border rounded  shadow-lg z-50">

                                {results.map((product) => (

                                    <Link
                                        key={product._id}
                                        to={`/product/${product._id}`}
                                        className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100"
                                    >

                                        <img
                                            src={product.image}
                                            className="w-10 h-10 object-contain"
                                        />

                                        <span className="text-black">{product.name}</span>

                                    </Link>

                                ))}

                            </div>

                        )}

                    </div>
                </div>

            </div>

            {/* menu */}
            <div className="flex justify-center gap-28">
                <div className="flex gap-16 py-4">
                    <Link to="/men" className="text-black hover:text-black hover:font-bold hover:underline">MEN</Link>
                    <Link to="/women" className="text-black hover:text-black hover:font-bold hover:underline">WOMEN</Link>
                    <Link to="/kids" className="text-black hover:text-black hover:font-bold hover:underline">KIDS</Link>
                </div>

                <div className="flex gap-12 py-4 text-xl">
                    <Link to={user ? "/user" : "/login"} className="flex items-center gap-2">

                        <img
                            src="./imageProjects/user.png"
                            alt=""
                            className="w-[26px] h-[26px]"
                        />

                        {user && (
                            <span className="text-sm text-black font-medium">
                                {user.name}
                            </span>
                        )}

                    </Link>
                    <Link to="/bag">

                        <div className="relative">

                            <img
                                src="./imageProjects/bag.png"
                                alt=""
                                className="w-[26px] h-[26px]"
                            />


                            <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                                {cartCount}
                            </span>


                        </div>

                    </Link>
                </div>
            </div>




        </div>
    );
};

export default Navbar;