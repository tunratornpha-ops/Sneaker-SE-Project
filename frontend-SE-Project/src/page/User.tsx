
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const User: React.FC = () => {

    const [user, setUser] = useState<any>(null);
    const [notification, setNotification] = useState(false);
    const [addresses, setAddresses] = useState<any[]>([]);


    const navigate = useNavigate();

    useEffect(() => {

        const fetchAddresses = async () => {

            const user = JSON.parse(localStorage.getItem("user") || "null");

            if (!user) return;

            const res = await fetch(`/api/addresses/user/${user._id}`);

            const data = await res.json();

            setAddresses(data);

        };

        fetchAddresses();

    }, []);

    useEffect(() => {

        const storedUser = localStorage.getItem("user");

        if (!storedUser) {
            navigate("/login");
        } else {
            setUser(JSON.parse(storedUser));
        }

    }, []);

    const handleDelete = async (id: string) => {

        const confirmDelete = window.confirm("Delete this address?");

        if (!confirmDelete) return;

        await fetch(`/api/addresses/${id}`, {
            method: "DELETE"
        });

        setAddresses(addresses.filter(addr => addr._id !== id));

    };

    const handleLogout = () => {

        localStorage.removeItem("user");
        window.dispatchEvent(new Event("userUpdated"));
        navigate("/");

    };

    if (!user) return null;

    return (

        <div className="bg-gray-100 min-h-screen py-16">

            <div className="max-w-5xl mx-auto">

                {/* Header */}

                <div className="flex justify-between items-center mb-10">

                    <h1 className="text-3xl font-semibold">
                        Profile
                    </h1>

                    <button
                        onClick={handleLogout}
                        className="text-red-500 border-black px-4 py-2 rounded bg-white hover:bg-gray-200"
                    >
                        Log out
                    </button>

                </div>


                {/* Order Tabs */}

                <div className="flex gap-10 bg-white p-4 rounded shadow mb-8">

                    <div onClick={() => navigate("/status")} className="flex items-center gap-2 cursor-pointer">
                        <img src="/imageProjects/delivery.png" alt="" className="w-6" />
                        <span className="text-sm">Order Tracking</span>
                    </div>

                    <div onClick={() => navigate("/complete")} className="flex items-center gap-2 cursor-pointer">
                        <img src="/imageProjects/check.png" alt="" className="w-5" />
                        <span className="text-sm">Success</span>
                    </div>

                    <div onClick={() => navigate("/review")} className="flex items-center gap-2 cursor-pointer">
                        <img src="/imageProjects/review.png" alt="" className="w-6" />
                        <span className="text-sm">Review</span>
                    </div>

                </div>


                {/* User Info */}

                <div className="bg-white p-6 rounded shadow mb-8">

                    <div className="flex justify-between items-center mb-4">

                        <p>
                            Name : {user.name}
                        </p>

                        <span className="cursor-pointer">
                            <img src="/imageProjects/edit.png" alt="" className="w-5" />
                        </span>

                    </div>

                    <div className="flex justify-between items-center mb-4">

                        <p>
                            Email : {user.email}
                        </p>

                        <span className="cursor-pointer">
                        <img src="/imageProjects/edit.png" alt="" className="w-5" />
                        </span>

                    </div>

                    <div className="flex justify-between items-center">

                        <p>
                            Phone : {user.phone}
                        </p>

                        <span className="cursor-pointer">
                        <img src="/imageProjects/edit.png" alt="" className="w-5" />
                        </span>

                    </div>

                </div>


                {/* Address */}

                <div className="bg-white p-6 rounded shadow mb-8">

                    <h2 className="text-xl mb-4">
                        Address
                    </h2>

                    {addresses.length === 0 ? (

                        <div
                            onClick={() => navigate("/add-address")}
                            className="border h-20 flex items-center justify-center text-2xl cursor-pointer hover:bg-gray-50"
                        >
                            +
                        </div>

                    ) : (

                        <div>

                            {addresses.map((addr, index) => (

                                <div key={index} className="border p-4 mb-4 rounded">
                                    <div className="flex justify-between items-start">

                                        <div>

                                            <p className="font-medium">{addr.name}</p>

                                            <p className="text-sm text-gray-500">
                                                {addr.phone}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                {addr.address1}, {addr.district}, {addr.city}
                                            </p>

                                            <p className="text-sm text-gray-500">
                                                {addr.country} {addr.postcode}
                                            </p>

                                        </div>

                                        <button
                                            onClick={() => handleDelete(addr._id)}
                                            className="text-red-500 text-sm hover:underline"
                                        >
                                            Delete
                                        </button>

                                    </div>

                                </div>

                            ))}

                            <button
                                onClick={() => navigate("/add-address")}
                                className="border px-4 py-2 rounded"
                            >
                                + Add Address
                            </button>

                        </div>

                    )}

                </div>


                {/* Notification */}

                <div className="bg-white p-6 rounded shadow flex justify-between items-center">

                    <p>Notification</p>

                    <label className="relative inline-flex items-center cursor-pointer">

                        <input
                            type="checkbox"
                            checked={notification}
                            onChange={() => setNotification(!notification)}
                            className="sr-only peer"
                        />

                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-black"></div>

                    </label>

                </div>

            </div>

        </div>
    );
};

export default User;