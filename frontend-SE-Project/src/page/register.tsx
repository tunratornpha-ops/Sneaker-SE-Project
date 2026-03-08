import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Register: React.FC = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [error, setError] = useState("");

    const navigate = useNavigate();

    const handleRegister = async () => {

        if (!email || !phone || !username || !password || !confirmPassword) {
            setError("Please fill in all fields");
            return;
        }

        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {

            const res = await fetch("/api/auth/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name: username,
                    email: email,
                    password: password,
                    phone: phone
                })
            });
    
            const data = await res.json();
    
            if (data.message === "Register success") {
    
                alert("Register successful!");
                navigate("/login");
    
            } else {
    
                setError(data.message || "Register failed");
    
            }
    
        } catch (error) {
    
            setError("Server error");
    
        }

    };


    return (

        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: "url('/imageProjects/login.jpg')" }}
        >

            <div className="bg-white w-[420px] rounded-lg shadow-lg p-8 relative">

                <Link to="/">
                    <button className="absolute bg-white right-4 top-4 text-xl">
                        ✕
                    </button>
                </Link>

                <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 border rounded-full flex items-center justify-center">
                        👟
                    </div>
                </div>

                <h1 className="text-xl font-semibold mb-6">SIGN UP</h1>

                {/* Email */}
                <div className="mb-4">
                    <label>Email address</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full border rounded-md p-3 mt-1"
                    />
                </div>

                {/* Phone */}
                <div className="mb-4">
                    <label>Phone number</label>
                    <input
                        type="text"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full border rounded-md p-3 mt-1"
                    />
                </div>

                {/* Username */}
                <div className="mb-4">
                    <label>Username</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full border rounded-md p-3 mt-1"
                    />
                </div>

                {/* Password */}
                <div className="mb-4">
                    <label>Password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full border rounded-md p-3 mt-1"
                    />
                </div>

                {/* Confirm Password */}
                <div className="mb-2">
                    <label>Confirm password</label>
                    <input
                        type={showPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="w-full border rounded-md p-3 mt-1"
                    />
                </div>

                <label className="flex items-center gap-2 text-sm mt-2">
                    <input
                        type="checkbox"
                        onChange={() => setShowPassword(!showPassword)}
                    />
                    Show password
                </label>

                {error && (
                    <p className="text-red-500 text-sm mt-3">
                        {error}
                    </p>
                )}

                <button
                    onClick={handleRegister}
                    className="w-full bg-black text-white py-3 rounded-md mt-4"
                >
                    Sign up
                </button>

                <p className="text-center text-sm mt-4">
                    Already have an account?{" "}

                    <Link to="/login">
                        <span className="text-blue-500 cursor-pointer">
                            Sign in
                        </span>
                    </Link>
                </p>

            </div>
        </div>
    );
};

export default Register;