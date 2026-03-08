import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Address: React.FC = () => {

    const [addresses, setAddresses] = useState<any[]>([]);
    const [selectedAddress, setSelectedAddress] = useState<any>(null);

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address1, setAddress1] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [postcode, setPostcode] = useState("");

    const [error, setError] = useState("");

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

    const isFormValid =
        name &&
        phone &&
        address1 &&
        district &&
        city &&
        country &&
        postcode;


    const handleConfirm = () => {

        if (selectedAddress) {

            localStorage.setItem(
                "shippingAddress",
                JSON.stringify(selectedAddress)
            );

        } else if (isFormValid) {

            const newAddress = {
                name,
                phone,
                address1,
                district,
                city,
                country,
                postcode
            };

            localStorage.setItem(
                "shippingAddress",
                JSON.stringify(newAddress)
            );

        } else {

            setError("Please select an address or fill in all fields");
            return;

        }

        navigate("/order-success");

    };

    return (

        <div className="bg-gray-100 min-h-screen py-16">

            <div className="max-w-4xl mx-auto">

                {/* Title */}

                <h1 className="text-3xl font-semibold mb-10 ">
                    Shipping Address
                </h1>

                {/* Form Box */}

                <div className="bg-white p-10 rounded-lg shadow">
                    <h3 className="text-lg font-medium mb-4">Select Address</h3>

                    <div className="space-y-4 mb-8">

                        {addresses.map((addr) => (

                            <div
                                key={addr._id}
                                onClick={() => setSelectedAddress(addr)}
                                className={`border p-4 rounded cursor-pointer
                                ${selectedAddress?._id === addr._id ? "border-black bg-gray-50" : ""}`}
                            >

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

                        ))}

                    </div>

                    {/* Name */}

                    <label className="block mb-2">Name</label>

                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="border w-full p-2 mb-6"
                    />

                    {/* Phone */}

                    <label className="block mb-2">Phone</label>

                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="border w-full p-2 mb-6"
                    />

                    {/* Address */}

                    <label className="block mb-2">Address Line 1</label>

                    <input
                        type="text"
                        value={address1}
                        onChange={(e) => setAddress1(e.target.value)}
                        className="border w-full p-2 mb-6"
                    />

                    {/* District + City */}

                    <div className="grid grid-cols-2 gap-6 mb-6">

                        <div>
                            <label className="block mb-2">
                                Subdistrict / District
                            </label>

                            <input
                                type="text"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                className="border w-full p-2"
                            />
                        </div>

                        <div>
                            <label className="block mb-2">
                                City / Province
                            </label>

                            <input
                                type="text"
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                className="border w-full p-2"
                            />
                        </div>

                    </div>

                    {/* Country + Postcode */}

                    <div className="grid grid-cols-2 gap-6 mb-10">

                        <div>
                            <label className="block mb-2">Country</label>

                            <input
                                type="text"
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}
                                className="border w-full p-2"
                            />
                        </div>

                        <div>
                            <label className="block mb-2">Post Code</label>

                            <input
                                type="text"
                                value={postcode}
                                onChange={(e) => setPostcode(e.target.value)}
                                className="border w-full p-2"
                            />
                        </div>

                    </div>

                    {/* Confirm Button */}

                    <div className="flex justify-between items-center mt-10">

                        {/* Back button */}

                        <button
                            onClick={() => navigate(-1)}
                            className="border border-gray-400 px-6 py-3 rounded-md text-gray-700 hover:bg-gray-100 transition"
                        >
                            ← Back
                        </button>

                        {/* Confirm button */}

                        <button
                            onClick={handleConfirm}
                            disabled={!(selectedAddress || isFormValid)}
                            className={`px-8 py-3 rounded-md text-white ${selectedAddress || isFormValid
                                    ? "bg-black hover:bg-gray-800"
                                    : "bg-gray-400 cursor-not-allowed"
                                }`}
                        >
                            Confirm Address
                        </button>

                    </div>


                    {/* Error */}

                    {error && (
                        <p className="text-red-500 text-center mt-4">
                            {error}
                        </p>
                    )}

                </div>

            </div>

        </div>

    );

};

export default Address;