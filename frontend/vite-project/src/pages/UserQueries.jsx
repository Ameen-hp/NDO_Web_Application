import React, { useEffect, useState } from "react";
import { 
    User, Mail, MessageSquare, Tag, Trash2, CheckCircle, X, Loader2, MessageCircle 
} from "lucide-react"; 

const BACKEND_URL = "http://localhost:5000";

// --- Sub-Components for UI/UX Enhancement ---

// 1. Loading Skeleton
const LoadingSkeleton = () => (
    <div className="animate-pulse grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[...Array(3)].map((_, i) => (
            <div key={i} className="bg-white/70 backdrop-blur-lg shadow-xl p-6 rounded-2xl h-64 space-y-4">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                <div className="h-3 bg-gray-200 rounded w-full"></div>
                <div className="h-16 bg-gray-200 rounded"></div>
                <div className="flex justify-end space-x-3 mt-4">
                    <div className="h-10 w-24 bg-rose-200 rounded-full"></div>
                    <div className="h-10 w-24 bg-violet-200 rounded-full"></div>
                </div>
            </div>
        ))}
    </div>
);

// 2. Notification Toast Component (Replaces alert)
const NotificationToast = ({ notification, onClose }) => {
    if (!notification) return null;

    const isSuccess = notification.type === 'success';
    const bgColor = isSuccess ? 'bg-green-500' : 'bg-red-500';
    const Icon = isSuccess ? CheckCircle : X;

    return (
        <div className="fixed top-5 right-5 z-[100] transition-all duration-300 animate-in fade-in slide-in-from-right-10">
            <div className={`flex items-center p-4 rounded-xl shadow-2xl text-white ${bgColor}`}>
                <Icon className="w-6 h-6 mr-3 flex-shrink-0" />
                <p className="font-medium">{notification.message}</p>
                <button onClick={onClose} className="ml-4 p-1 rounded-full hover:bg-white/20">
                    <X className="w-4 h-4" />
                </button>
            </div>
        </div>
    );
};

// 3. Delete Confirmation Modal (Replaces window.confirm)
const DeleteConfirmationModal = ({ isOpen, onDelete, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 animate-in fade-in">
            <div className="bg-white p-8 rounded-2xl w-full max-w-sm shadow-2xl relative border-4 border-transparent animate-in zoom-in-50"
                 style={{ borderImage: `linear-gradient(45deg, #FFC107, #E75480) 1` }}
            >
                <h2 className="text-xl font-bold text-rose-600 mb-4">Confirm Deletion</h2>
                <p className="text-gray-700 mb-6">
                    Are you sure you want to permanently delete this user query? This action cannot be undone.
                </p>
                <div className="flex justify-end space-x-3">
                    <button
                        onClick={onClose}
                        className="px-5 py-2 rounded-full text-gray-700 border border-gray-300 hover:bg-gray-100 transition duration-200"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onDelete}
                        className="px-5 py-2 rounded-full text-white font-semibold shadow-md 
                                   bg-gradient-to-r from-rose-600 to-red-500 hover:scale-[1.05] hover:shadow-red-400/50 transition duration-300"
                    >
                        <Trash2 className="inline w-4 h-4 mr-1" /> Delete
                    </button>
                </div>
            </div>
        </div>
    );
};


// --- Main Component ---

export default function UserQueries() {
    // STATE LOGIC (KEPT INTACT)
    const [queries, setQueries] = useState([]);
    const [loading, setLoading] = useState(true);
    const [deleteTargetId, setDeleteTargetId] = useState(null);
    const [notification, setNotification] = useState(null);

    // HELPER FUNCTIONS (New)
    const showNotification = (message, type) => {
        setNotification({ message, type });
        // Auto-dismiss notification after 4 seconds
        setTimeout(() => setNotification(null), 4000);
    };

    const openDeleteModal = (id) => setDeleteTargetId(id);
    const closeDeleteModal = () => setDeleteTargetId(null);
    
    // FETCH LOGIC (KEPT INTACT)
    const fetchQueries = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${BACKEND_URL}/api/contact`);
            if (!response.ok) throw new Error("Failed to fetch queries.");
            const data = await response.json();
            setQueries(data);
        } catch (e) {
            setQueries([]); 
            showNotification("Failed to load queries from server.", 'error');
        } finally {
            setLoading(false);
        }
    };

    // DELETE LOGIC (MODIFIED to use custom modal/toast)
    const deleteQuery = async () => {
        const id = deleteTargetId;
        closeDeleteModal(); 

        try {
            const response = await fetch(`${BACKEND_URL}/api/contact/${id}`, { method: "DELETE" });
            if (!response.ok) throw new Error("Failed to delete query.");
            showNotification("Query deleted successfully!", 'success');
            fetchQueries();
        } catch (error) {
            showNotification("Deletion failed: " + error.message, 'error');
        }
    };

    // CONFIRM LOGIC (MODIFIED to use custom toast)
    const handleConfirm = async (id) => {
        try {
            const res = await fetch(`${BACKEND_URL}/api/contact/confirm/${id}`, {
                method: "PUT",
            });

            if (res.ok) {
                showNotification("Confirmation sent successfully!", 'success');
                fetchQueries(); 
            } else {
                const data = await res.json();
                showNotification("Error sending confirmation: " + (data.error || 'Unknown error'), 'error');
            }
        } catch (error) {
            showNotification("Server error.", 'error');
        }
    };

    // INITIAL DATA FETCH
    useEffect(() => {
        fetchQueries();
    }, []);

    return (
        <div 
            className="p-6 sm:p-10 min-h-screen transition-all duration-500"
            // Soft gradient background
            style={{ backgroundImage: 'linear-gradient(135deg, #FFF5F9 0%, #F5F3FF 50%, #FFFDF5 100%)' }}
        >
            <h1 className="text-4xl font-extrabold text-center mb-10 bg-clip-text text-transparent 
                           bg-gradient-to-r from-rose-600 via-violet-600 to-amber-600">
                <MessageCircle className="inline w-8 h-8 mr-3 align-text-bottom" />
                User Queries Dashboard
            </h1>

            {loading ? (
                <LoadingSkeleton />
            ) : queries.length === 0 ? (
                // Empty State
                <div className="flex flex-col items-center justify-center p-20 bg-white/70 backdrop-blur-lg shadow-xl rounded-3xl w-full max-w-xl mx-auto border border-rose-100">
                    <MessageCircle className="w-16 h-16 text-amber-500 mb-4" />
                    <p className="text-xl font-semibold text-gray-700">No user queries yet.</p>
                    <p className="text-gray-500 mt-2">Looks like your inbox is sparkling clean!</p>
                </div>
            ) : (
                // Query Grid
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {queries.map((query, index) => (
                        <div 
                            key={query._id} 
                            // Glassmorphism Card Style
                            className={`bg-white/70 backdrop-blur-lg shadow-lg p-6 rounded-2xl border border-rose-100 
                                        transition duration-500 transform hover:scale-[1.02] hover:shadow-violet-300/40 
                                        motion-safe:animate-in fade-in slide-in-from-bottom-4`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <h3 className="flex items-center font-bold text-xl text-violet-700 mb-3">
                                <Tag className="w-5 h-5 mr-2 text-rose-500" />
                                {query.subject}
                            </h3>
                            
                            <p className="flex items-center text-sm text-gray-800 mb-1">
                                <User className="w-4 h-4 mr-2 text-amber-500" />
                                <span className="font-semibold">{query.name}</span>
                            </p>
                            <p className="flex items-center text-sm text-gray-600 mb-3">
                                <Mail className="w-4 h-4 mr-2 text-amber-500" />
                                {query.email}
                            </p>
                            
                            <p className="mt-3 text-gray-700 border-t border-gray-100 pt-3">
                                <MessageSquare className="w-4 h-4 mr-2 inline text-amber-500 align-text-top" />
                                {query.message}
                            </p>
                            
                            <div className="flex justify-end space-x-3 mt-6">
                                {/* Delete Button */}
                                <button
                                    onClick={() => openDeleteModal(query._id)}
                                    className="px-4 py-2 text-white rounded-full font-semibold shadow-md 
                                               bg-gradient-to-r from-rose-500 to-pink-600 hover:scale-[1.05] hover:shadow-rose-400/50 transition duration-300"
                                >
                                    <Trash2 className="inline w-4 h-4 mr-1" />
                                    Delete
                                </button>
                                
                                {/* Confirm Button */}
                                <button
                                    onClick={() => handleConfirm(query._id)}
                                    className="px-4 py-2 text-white rounded-full font-semibold shadow-md 
                                               bg-gradient-to-r from-violet-500 to-amber-400 hover:scale-[1.05] hover:shadow-violet-400/50 transition duration-300"
                                >
                                    <CheckCircle className="inline w-4 h-4 mr-1" />
                                    Confirm
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            {/* Custom UI for Delete Confirmation */}
            <DeleteConfirmationModal 
                isOpen={deleteTargetId !== null} 
                onDelete={deleteQuery} 
                onClose={closeDeleteModal} 
            />

            {/* Custom UI for Success/Error Messages */}
            <NotificationToast 
                notification={notification} 
                onClose={() => setNotification(null)} 
            />
        </div>
    );
}
