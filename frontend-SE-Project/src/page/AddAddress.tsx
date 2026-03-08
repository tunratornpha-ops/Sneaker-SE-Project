import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";

const AddAddress: React.FC = () => {

    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address1, setAddress1] = useState("");
    const [district, setDistrict] = useState("");
    const [city, setCity] = useState("");
    const [country, setCountry] = useState("");
    const [postcode, setPostcode] = useState("");


    const handleSave = async () => {

        const user = JSON.parse(localStorage.getItem("user") || "null");

        const address = {
            userId: user._id,
            name,
            phone,
            address1,
            district,
            city,
            country,
            postcode
        };

        await fetch("/api/addresses", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(address)
        });

        alert("Address saved");

        navigate("/user");

    };

    return (

        <div className="bg-gray-100 min-h-screen py-16">
            <div className=" px-20 mb-6 text-gray-500">

                <Link to="/user" className="hover:underline">
                    Account
                </Link>

                <span> › Address</span>

            </div>

            <div className="max-w-4xl mx-auto">

                <h1 className="text-3xl font-semibold mb-10">
                    Add Address
                </h1>

                <div className="bg-white p-10 rounded shadow">

                    <label>Name</label>
                    <input
                        className="border w-full p-2 mb-6"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label>Phone</label>
                    <input
                        className="border w-full p-2 mb-6"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />

                    <label>Address</label>
                    <input
                        className="border w-full p-2 mb-6"
                        value={address1}
                        onChange={(e) => setAddress1(e.target.value)}
                    />

                    <div className="grid grid-cols-2 gap-6 mb-6">

                        <input
                            placeholder="District"
                            className="border p-2"
                            value={district}
                            onChange={(e) => setDistrict(e.target.value)}
                        />

                        <input
                            placeholder="City"
                            className="border p-2"
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                        />

                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-10">

                        <input
                            placeholder="Country"
                            className="border p-2"
                            value={country}
                            onChange={(e) => setCountry(e.target.value)}
                        />

                        <input
                            placeholder="Postcode"
                            className="border p-2"
                            value={postcode}
                            onChange={(e) => setPostcode(e.target.value)}
                        />

                    </div>

                    <div className="flex justify-end">

                        <button
                            onClick={handleSave}
                            className="bg-black text-white px-8 py-3 rounded"
                        >
                            Save Address
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default AddAddress;