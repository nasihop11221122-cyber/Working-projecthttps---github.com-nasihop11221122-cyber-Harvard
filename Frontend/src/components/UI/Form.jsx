import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";

const FIELD = `
  w-full bg-transparent
  border-b border-border-dark
  px-2 py-3
  text-text-dark text-sm
  placeholder:text-text-label
  outline-none
  focus:border-secondary
  transition
`;

const ContactForm = () => {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        setError("");

        try {
            const response = await fetch(
                "https://ik-edc.vercel.app/v1/portfolioContact/create",
                {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        description: formData.message,
                    }),
                }
            );

            if (!response.ok) throw new Error();

            toast.success("Message sent successfully!");
            setFormData({ name: "", email: "", message: "" });

        } catch {
            setError("Something went wrong.");
            toast.error("Something went wrong.");
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="space-y-8 max-w-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
        >

            {/* NAME + EMAIL */}
            <div className="grid sm:grid-cols-2 gap-6">
                <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" required className={FIELD} />
                <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required className={FIELD} />
            </div>

            {/* MESSAGE */}
            <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                placeholder="Your message..."
                className={`${FIELD} resize-none`}
            />

            {error && <p className="text-accent text-sm">{error}</p>}

            {/* BUTTON */}
            <button
                disabled={isLoading}
                className="
          px-8 py-3 rounded-full border border-border-dark bg-secondary text-text-dark text-sm font-semibold
          hover:bg-accent transition
        "
            >
                {isLoading ? "Sending..." : "Submit"}
            </button>

        </motion.form>
    );
};

export default ContactForm;