import React, { useState } from "react";
// Import Lucide icons for aesthetic enhancement
import { 
    Tag, FileText, LayoutList, Calendar, Image, Upload, CheckCircle, XCircle 
} from "lucide-react";

const BACKEND_URL = import.meta.env.VITE_API_URL;

// --- Custom Input Field Component ---
const FormInput = ({ Icon, ...props }) => {
    const focusRingClass = "focus:ring-2 focus:ring-rose-500 focus:border-rose-500";
    
    return (
        <div className="flex items-center space-x-3 bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-white/30 transition-all duration-300 shadow-inner hover:shadow-md">
            <Icon className="w-5 h-5 text-violet-500 flex-shrink-0" />
            <input
                {...props}
                className={`w-full bg-transparent text-gray-800 placeholder-gray-500 border-none outline-none focus:outline-none focus:ring-0 ${focusRingClass}`}
            />
        </div>
    );
};

// --- Custom Textarea Field Component ---
const FormTextarea = ({ Icon, ...props }) => {
    const focusRingClass = "focus:ring-2 focus:ring-rose-500 focus:border-rose-500";

    return (
        <div className="flex space-x-3 bg-white/70 backdrop-blur-sm p-3 rounded-xl border border-white/30 transition-all duration-300 shadow-inner hover:shadow-md">
            <Icon className="w-5 h-5 text-violet-500 flex-shrink-0 mt-2" />
            <textarea
                rows="3"
                {...props}
                className={`w-full bg-transparent text-gray-800 placeholder-gray-500 border-none outline-none focus:outline-none focus:ring-0 resize-none ${focusRingClass}`}
            />
        </div>
    );
};

export default function AddProjectForm() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        category: "",
        date: "",
    });
    const [images, setImages] = useState([]);
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setImages(e.target.files);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData();
        for (const key in formData) form.append(key, formData[key]);
        for (let i = 0; i < images.length; i++) {
            form.append("images", images[i]);
        }

        try {
            const res = await fetch(`${BACKEND_URL}/api/projects`, {
                method: "POST",
                body: form,
            });

            const data = await res.json();
            if (res.ok) {
                setMessage("✅ Project added successfully!");
                setFormData({ title: "", description: "", category: "", date: "" });
                setImages([]);
            } else {
                setMessage("❌ Error: " + data.error);
            }
        } catch (err) {
            setMessage("❌ Upload failed: " + err.message);
        }
    };

    const fileCountText = images.length > 0 
        ? `${images.length} file(s) selected` 
        : 'Select multiple images...';

    return (
        <div 
            className="min-h-screen flex items-center justify-center p-6 sm:p-10 transition-all duration-500"
            style={{ 
                backgroundImage: 'linear-gradient(135deg, #e75480 0%, #8A2BE2 50%, #FFC107 100%)' 
            }}
        >
            <form
                onSubmit={handleSubmit}
                className="mt-16 sm:mt-20 bg-white/40 backdrop-blur-lg p-6 sm:p-10 rounded-3xl shadow-2xl w-full max-w-lg space-y-6 
                           transition-all duration-1000 transform"
                style={{ 
                    '--tw-shadow': '0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)',
                    opacity: 1,
                }}
            >
                <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-1 bg-clip-text text-transparent bg-gradient-to-r from-rose-500 to-violet-700">
                    Add New Project
                </h2>
                <p className="text-center text-gray-800/80 mb-6 text-sm font-medium">
                    Upload new project details below
                </p>

                <FormInput
                    Icon={Tag}
                    type="text"
                    name="title"
                    placeholder="Project Title (Required)"
                    value={formData.title}
                    onChange={handleChange}
                    required
                />

                <FormTextarea
                    Icon={FileText}
                    name="description"
                    placeholder="Description (What was the impact?)"
                    value={formData.description}
                    onChange={handleChange}
                />

                <FormInput
                    Icon={LayoutList}
                    type="text"
                    name="category"
                    placeholder="Category (e.g., Education, Health, Empowerment)"
                    value={formData.category}
                    onChange={handleChange}
                />

                <FormInput
                    Icon={Calendar}
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />

                <div className="relative">
                    <input
                        type="file"
                        name="images"
                        multiple
                        onChange={handleFileChange}
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        aria-label="Upload multiple project images"
                    />
                    <div 
                        className={`flex items-center space-x-3 p-3 rounded-xl border border-white/50 transition-all duration-300 shadow-inner 
                                    ${images.length > 0 
                                        ? 'bg-amber-400/50 text-gray-900 border-amber-600 shadow-lg' 
                                        : 'bg-white/70 text-gray-500 hover:bg-white/80'}`}
                    >
                        <Image className={`w-5 h-5 flex-shrink-0 ${images.length > 0 ? 'text-gray-900' : 'text-violet-500'}`} />
                        <span className="truncate text-sm font-medium">
                            {fileCountText}
                        </span>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full text-white py-4 rounded-xl font-bold uppercase tracking-wider transition-all duration-300 transform 
                                bg-gradient-to-r from-rose-600 via-violet-600 to-amber-500 
                                hover:scale-[1.02] hover:shadow-2xl hover:shadow-violet-400/50 
                                active:scale-[0.98] focus:outline-none focus:ring-4 focus:ring-violet-300"
                >
                    <div className="flex items-center justify-center space-x-2">
                        <Upload className="w-5 h-5" />
                        <span>Upload Project</span>
                    </div>
                </button>

                {message && (
                    <div className={`p-4 rounded-xl text-center text-sm font-semibold transition-all duration-500 ease-out ${
                        message.startsWith('✅')
                            ? 'bg-green-100/80 text-green-800 border-l-4 border-green-500'
                            : 'bg-red-100/80 text-red-800 border-l-4 border-red-500'
                    }`}>
                        <div className="flex items-center justify-center space-x-2">
                            {message.startsWith('✅') 
                                ? <CheckCircle className="w-5 h-5 text-green-500" /> 
                                : <XCircle className="w-5 h-5 text-red-500" />}
                            <p>{message}</p>
                        </div>
                    </div>
                )}
            </form>
        </div>
    );
}
