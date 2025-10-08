import React, { useState, useEffect } from "react";
import { 
    Pencil, Trash2, PlusCircle, X, 
    Tag, LayoutList, FileText, Image, Globe 
} from "lucide-react";

const BACKEND_URL = "http://localhost:5000";

// --- Custom Components & Styles ---

// Base style for buttons
const baseButtonClass = "p-2 rounded-full shadow-md transition duration-300 transform hover:scale-110";

// Edit Button style
const EditButton = ({ onClick, title }) => (
    <button
        onClick={onClick}
        title={title}
        className={`${baseButtonClass} bg-gradient-to-r from-blue-500 to-violet-500 text-white hover:shadow-violet-400/50 focus:ring-2 focus:ring-violet-300`}
    >
        <Pencil className="w-5 h-5" />
    </button>
);

// Delete Button style
const DeleteButton = ({ onClick, title }) => (
    <button
        onClick={onClick}
        title={title}
        className={`${baseButtonClass} bg-gradient-to-r from-rose-600 to-red-500 text-white hover:shadow-rose-400/50 focus:ring-2 focus:ring-rose-300`}
    >
        <Trash2 className="w-5 h-5" />
    </button>
);

// Close Modal Button style
const CloseButton = ({ onClick }) => (
    <button
        className="absolute top-4 right-4 p-2 text-gray-700 bg-white/70 rounded-full shadow-lg transition duration-500 hover:text-rose-600 hover:rotate-90 hover:scale-110 z-10"
        onClick={onClick}
        aria-label="Close Modal"
    >
        <X className="w-6 h-6" />
    </button>
);

// --- Main Component ---

export default function HostProjects() {
    // STATE LOGIC (KEPT INTACT)
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [editingProject, setEditingProject] = useState(null);
    const [formData, setFormData] = useState({
        title: "",
        category: "",
        description: "",
        images: [],
    });
    const [error, setError] = useState("");

    // CRUD LOGIC (KEPT INTACT)
    useEffect(() => {
        fetchProjects();
    }, []);

    const fetchProjects = async () => {
        try {
            const res = await fetch(`${BACKEND_URL}/api/projects`);
            if (!res.ok) throw new Error("Failed to fetch projects");
            const data = await res.json();
            setProjects(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this project?")) return;
        try {
            const res = await fetch(`${BACKEND_URL}/api/projects/${id}`, {
                method: "DELETE",
            });
            if (!res.ok) throw new Error("Failed to delete project");
            setProjects(projects.filter((p) => p._id !== id));
        } catch (err) {
            alert(err.message);
        }
    };

    const handleEdit = (project) => {
        setEditingProject(project);
        setFormData({
            title: project.title,
            category: project.category,
            description: project.description,
            images: [], // Images array cleared for new upload
        });
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            const form = new FormData();
            form.append("title", formData.title);
            form.append("category", formData.category);
            form.append("description", formData.description);
            formData.images.forEach((file) => form.append("images", file));

            const res = await fetch(`${BACKEND_URL}/api/projects/${editingProject._id}`, {
                method: "PUT",
                body: form,
            });

            if (!res.ok) throw new Error("Failed to update project");
            await fetchProjects();
            setEditingProject(null);
            alert("Project updated successfully!");
        } catch (err) {
            alert(err.message);
        }
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "images") {
            setFormData({ ...formData, images: Array.from(files) });
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    // --- Loading and Error States (Styled) ---

    if (loading)
        return (
            <div className="flex justify-center items-center h-screen text-2xl text-violet-600 bg-gradient-to-br from-rose-50 via-violet-50 to-amber-50">
                <Globe className="w-8 h-8 mr-3 animate-spin" />
                Loading projects...
            </div>
        );

    if (error)
        return (
            <div className="flex justify-center items-center h-screen text-red-600 text-xl bg-gradient-to-br from-rose-50 via-violet-50 to-amber-50">
                <X className="w-6 h-6 mr-2" />
                Error: {error}
            </div>
        );

    // --- Main Dashboard Render ---

    return (
        <div className="min-h-screen p-4 sm:p-8 transition-all duration-500"
             style={{ backgroundImage: 'linear-gradient(135deg, #FFF5F9 0%, #F5F3FF 50%, #FFFDF5 100%)' }}
        >
            
            {/* Top Navigation / Header */}
            <header className="flex justify-between items-center mb-8 p-4 bg-white/90 backdrop-blur-sm rounded-xl shadow-lg">
                <h1 className="text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-rose-600 to-violet-600">
                    <LayoutList className="inline w-7 h-7 mr-3" />
                    Host Dashboard – Manage Projects
                </h1>
                <a href="/add-project" className="flex items-center space-x-2 p-3 rounded-xl text-white font-semibold shadow-md 
                                               bg-gradient-to-r from-amber-500 to-rose-500 hover:from-rose-600 hover:to-amber-600 transition-all">
                    <PlusCircle className="w-5 h-5" />
                    <span className="hidden sm:inline">Add New</span>
                </a>
            </header>

            {/* Projects Container (Glassmorphic) */}
            <div 
                className="bg-white/80 backdrop-blur-lg shadow-2xl rounded-3xl p-4 md:p-6 transition-all duration-700 
                           hover:shadow-rose-300/50 hover:scale-[1.005] relative overflow-x-auto"
            >
                {/* 1. Desktop Table View */}
                <table className="w-full text-left border-collapse hidden md:table">
                    <thead 
                        className="text-white rounded-t-3xl"
                        style={{ background: 'linear-gradient(90deg, #E75480, #8A2BE2, #FFC107)' }}
                    >
                        <tr>
                            <th className="p-4 rounded-tl-3xl">
                                <Tag className="inline w-5 h-5 mr-1" /> Title
                            </th>
                            <th className="p-4">
                                <LayoutList className="inline w-5 h-5 mr-1" /> Category
                            </th>
                            <th className="p-4">
                                <FileText className="inline w-5 h-5 mr-1" /> Description
                            </th>
                            <th className="p-4">
                                <Image className="inline w-5 h-5 mr-1" /> Images
                            </th>
                            <th className="p-4 text-center rounded-tr-3xl">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((p, index) => (
                            <tr
                                key={p._id}
                                className={`border-b border-gray-200 transition duration-300 transform 
                                            hover:bg-violet-50 hover:shadow-lg ${index % 2 === 0 ? 'bg-white' : 'bg-rose-50'}`}
                            >
                                <td className="p-4 font-semibold text-gray-800">{p.title}</td>
                                <td className="p-4 text-violet-600 font-medium">{p.category}</td>
                                <td className="p-4 text-gray-700 line-clamp-2 max-w-xs">{p.description}</td>
                                <td className="p-4 flex gap-2">
                                    {p.images?.slice(0, 2).map((img, i) => (
                                        <img
                                            key={i}
                                            src={`${BACKEND_URL}${img}`}
                                            alt={`Project image ${i + 1}`}
                                            className="w-16 h-16 object-cover rounded-lg border-2 border-amber-300 shadow-md"
                                        />
                                    ))}
                                </td>
                                <td className="p-4 text-center space-x-3">
                                    <EditButton onClick={() => handleEdit(p)} title="Edit Project" />
                                    <DeleteButton onClick={() => handleDelete(p._id)} title="Delete Project" />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>

                {/* 2. Mobile Card View */}
                <div className="md:hidden grid grid-cols-1 gap-6">
                    {projects.map((p) => (
                        <div 
                            key={p._id}
                            className="bg-white p-5 rounded-xl shadow-lg border-t-4 border-rose-500 space-y-3 transition duration-300 hover:shadow-xl hover:scale-[1.02]"
                        >
                            <div className="flex justify-between items-start">
                                <h3 className="text-xl font-extrabold text-violet-700">
                                    <Tag className="inline w-5 h-5 mr-2 text-rose-500" />
                                    {p.title}
                                </h3>
                                <div className="flex space-x-2">
                                    <EditButton onClick={() => handleEdit(p)} title="Edit Project" />
                                    <DeleteButton onClick={() => handleDelete(p._id)} title="Delete Project" />
                                </div>
                            </div>
                            <p className="text-gray-600 text-sm">
                                <LayoutList className="inline w-4 h-4 mr-1 text-amber-500" />
                                **Category:** {p.category}
                            </p>
                            <p className="text-gray-700">
                                <FileText className="inline w-4 h-4 mr-1 text-amber-500" />
                                **Description:** {p.description.substring(0, 100)}...
                            </p>
                            <div className="flex gap-2 pt-2">
                                {p.images?.slice(0, 3).map((img, i) => (
                                    <img
                                        key={i}
                                        src={`${BACKEND_URL}${img}`}
                                        alt={`Image ${i + 1}`}
                                        className="w-16 h-16 object-cover rounded-lg border border-amber-300"
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* No Projects Found */}
                {projects.length === 0 && (
                    <p className="text-center text-gray-500 py-8 text-lg font-medium">
                        <PlusCircle className="inline w-6 h-6 mr-2 text-amber-500" />
                        No projects found. Use the 'Add New' button to get started.
                    </p>
                )}
            </div>

            {/* --- Edit Modal (Enhanced) --- */}
            {editingProject && (
                <div 
                    className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300"
                    // Custom animation on modal container
                    style={{ animation: 'fadeIn 0.3s ease-out' }}
                >
                    <div className="bg-white p-8 rounded-3xl w-full max-w-lg shadow-2xl relative border-4 border-transparent"
                         // Gradient border effect
                         style={{ 
                             borderImage: `linear-gradient(45deg, #E75480, #FFC107) 1`,
                             animation: 'slideInUp 0.5s ease-out'
                         }}
                    >
                        <CloseButton onClick={() => setEditingProject(null)} />
                        
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-600 to-rose-600 mb-6">
                            <Pencil className="inline w-6 h-6 mr-2" />
                            Edit Project: {editingProject.title}
                        </h2>

                        <form onSubmit={handleUpdate} className="space-y-5">
                            {/* Title */}
                            <div>
                                <label className="flex items-center text-sm font-semibold mb-1 text-gray-700">
                                    <Tag className="w-4 h-4 mr-2 text-rose-500" /> Title
                                </label>
                                <input
                                    type="text"
                                    name="title"
                                    value={formData.title}
                                    onChange={handleChange}
                                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 transition duration-200"
                                    required
                                />
                            </div>

                            {/* Category */}
                            <div>
                                <label className="flex items-center text-sm font-semibold mb-1 text-gray-700">
                                    <LayoutList className="w-4 h-4 mr-2 text-rose-500" /> Category
                                </label>
                                <input
                                    type="text"
                                    name="category"
                                    value={formData.category}
                                    onChange={handleChange}
                                    className="w-full border-2 border-gray-200 rounded-xl p-3 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 transition duration-200"
                                    required
                                />
                            </div>

                            {/* Description */}
                            <div>
                                <label className="flex items-center text-sm font-semibold mb-1 text-gray-700">
                                    <FileText className="w-4 h-4 mr-2 text-rose-500" /> Description
                                </label>
                                <textarea
                                    name="description"
                                    value={formData.description}
                                    onChange={handleChange}
                                    className="w-full border-2 border-gray-200 rounded-xl p-3 h-24 focus:border-violet-400 focus:ring-2 focus:ring-violet-200 transition duration-200 resize-none"
                                    required
                                />
                            </div>

                            {/* Images */}
                            <div>
                                <label className="flex items-center text-sm font-semibold mb-1 text-gray-700">
                                    <Image className="w-4 h-4 mr-2 text-rose-500" /> Replace/Add Images
                                </label>
                                <input
                                    type="file"
                                    name="images"
                                    multiple
                                    onChange={handleChange}
                                    className="w-full file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 
                                               file:text-sm file:font-semibold file:bg-rose-50 file:text-rose-700 
                                               hover:file:bg-rose-100 mt-2"
                                />
                                <p className="text-xs text-gray-500 mt-1">
                                    *Selecting new images will **replace** existing images.
                                </p>
                            </div>

                            {/* Update Button */}
                            <button
                                type="submit"
                                className="w-full text-white py-3 rounded-xl font-bold tracking-wider transition-all duration-300 transform 
                                           bg-gradient-to-r from-violet-600 to-amber-500 
                                           hover:scale-[1.01] hover:shadow-xl hover:shadow-violet-400/50"
                            >
                                <div className="flex items-center justify-center space-x-2">
                                    <Pencil className="w-5 h-5" />
                                    <span>Update Project</span>
                                </div>
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}