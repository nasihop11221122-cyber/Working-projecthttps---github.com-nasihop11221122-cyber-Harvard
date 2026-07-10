import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import api from "../../services/api.js";
import { toast } from "react-toastify";
import { COURSES_DATA } from "../../constants/courses.js";

const INPUT_CLASS = `
    w-full
    bg-secondary
    border border-border-dark/50
    rounded-xl
    px-3 py-2.5
    text-text-dark
    text-sm
    placeholder:text-text-label
    outline-none
    transition-all duration-300
    focus:border-secondary
    focus:ring-2
    focus:ring-secondary/20
`;

export const EnrollmentModal = ({ isOpen, onClose }) => {
    const [applyData, setApplyData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        phone: "",
        course: "",
    });

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isOpen]);

    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;

        setApplyData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post("/apply", applyData);

            toast.success(response.data.msg);

            setApplyData({
                firstName: "",
                lastName: "",
                email: "",
                address: "",
                phone: "",
                course: "",
            });

            onClose();
        } catch (err) {
            toast.error(
                err.response?.data?.msg || "Something went wrong"
            );
        }
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-3">

            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div
                className="
                    relative z-10
                    w-full max-w-3xl
                    bg-bg-light
                    border border-border-dark/40
                    rounded-2xl
                    shadow-2xl
                    max-h-[95vh]
                    overflow-y-auto
                    [scrollbar-width:none]
                    [&::-webkit-scrollbar]:hidden
                "
            >

                {/* Header */}
                <div
                    className="
                        sticky top-0 z-20
                        bg-bg-light/95
                        backdrop-blur-md
                        border-b border-border-light
                        px-4 sm:px-5
                        py-4
                        flex items-center justify-between
                    "
                >
                    <div>
                        <h2 className="text-xl sm:text-2xl font-bold text-text-dark">
                            Enrollment Form
                        </h2>

                        <p className="text-xs sm:text-sm text-text-muted mt-1">
                            Join upcoming professional batches.
                        </p>
                    </div>

                    {/* Close */}
                    <button
                        onClick={onClose}
                        className="
                            w-9 h-9
                            rounded-full
                            border border-border-light
                            flex items-center justify-center
                            text-text-muted
                            hover:bg-primary
                            hover:text-text-primary
                            transition-all duration-300
                            shrink-0
                            cursor-pointer
                        "
                    >
                        <X size={15} />
                    </button>
                </div>

                {/* Form */}
                <form
                    onSubmit={handleSubmit}
                    className="p-4 sm:p-5"
                >

                    {/* Grid Layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* First Name */}
                        <div>
                            <label className="block mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-text-label">
                                First Name
                            </label>

                            <input
                                type="text"
                                name="firstName"
                                value={applyData.firstName}
                                onChange={handleChange}
                                placeholder="First name"
                                className={INPUT_CLASS}
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-text-label">
                                Last Name
                            </label>

                            <input
                                type="text"
                                name="lastName"
                                value={applyData.lastName}
                                onChange={handleChange}
                                placeholder="Last name"
                                className={INPUT_CLASS}
                                required
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-text-label">
                                Email
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={applyData.email}
                                onChange={handleChange}
                                placeholder="you@example.com"
                                className={INPUT_CLASS}
                                required
                            />
                        </div>

                        {/* Phone */}
                        <div>
                            <label className="block mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-text-label">
                                Phone
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                value={applyData.phone}
                                onChange={handleChange}
                                placeholder="03XXXXXXXXX"
                                className={INPUT_CLASS}
                                required
                            />
                        </div>

                        {/* Address */}
                        <div>
                            <label className="block mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-text-label">
                                Address
                            </label>

                            <input
                                type="text"
                                name="address"
                                value={applyData.address}
                                onChange={handleChange}
                                placeholder="City / Area"
                                className={INPUT_CLASS}
                                required
                            />
                        </div>

                        {/* Course */}
                        <div>
                            <label className="block mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-text-label">
                                Course
                            </label>

                            <select
                                name="course"
                                value={applyData.course}
                                onChange={handleChange}
                                className={`${INPUT_CLASS} cursor-pointer`}
                                required
                            >
                                <option value="">
                                    Choose course
                                </option>

                                {COURSES_DATA?.map((data) => (
                                    <option
                                        key={data.id}
                                        value={data.title}
                                    >
                                        {data.title}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="
        w-full mt-4 bg-primary text-text-primary font-semibold py-3 rounded-xl border border-border-light/70 shadow-lg shadow-secondary/20 transition-all duration-300
        hover:bg-bg-main hover:text-text-dark hover:border-accent-dark active:scale-[0.98] cursor-pointer
    "
                    >
                        Submit Application
                    </button>
                </form>
            </div>
        </div>
    );
};