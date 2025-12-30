import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Camera, Upload, X, Check } from 'lucide-react';

interface ProfileImageUploadProps {
  currentImage: string;
  onImageChange: (imageUrl: string) => void;
  className?: string;
}

const ProfileImageUpload: React.FC<ProfileImageUploadProps> = ({
  currentImage,
  onImageChange,
  className = ''
}) => {
  const [isUploading, setIsUploading] = useState(false);
  const [showUrlInput, setShowUrlInput] = useState(false);
  const [urlInput, setUrlInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setIsUploading(true);
      
      // Create a FileReader to convert file to base64 or handle file upload
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setTimeout(() => {
          onImageChange(result);
          setIsUploading(false);
        }, 1000); // Simulate upload delay
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUrlSubmit = () => {
    if (urlInput.trim()) {
      setIsUploading(true);
      setTimeout(() => {
        onImageChange(urlInput.trim());
        setUrlInput('');
        setShowUrlInput(false);
        setIsUploading(false);
      }, 1000);
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative group">
        {/* Profile Image */}
        <div className="w-full aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500 to-purple-600 p-1">
          <img
            src={currentImage}
            alt="Profile"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>

        {/* Upload Overlay */}
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl flex items-center justify-center">
          <div className="flex space-x-2">
            <motion.button
              onClick={() => fileInputRef.current?.click()}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={isUploading}
            >
              <Upload className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              onClick={() => setShowUrlInput(true)}
              className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              disabled={isUploading}
            >
              <Camera className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Loading Overlay */}
        {isUploading && (
          <div className="absolute inset-0 bg-black/70 rounded-2xl flex items-center justify-center">
            <div className="text-center text-white">
              <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin mx-auto mb-2" />
              <p className="text-sm">Updating...</p>
            </div>
          </div>
        )}
      </div>

      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileUpload}
        className="hidden"
      />

      {/* URL Input Modal */}
      {showUrlInput && (
        <motion.div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-white dark:bg-gray-800 rounded-2xl p-6 w-full max-w-md"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add Image URL
              </h3>
              <button
                onClick={() => setShowUrlInput(false)}
                className="p-1 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="space-y-4">
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://example.com/image.jpg"
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                autoFocus
              />
              
              <div className="flex space-x-3">
                <button
                  onClick={() => setShowUrlInput(false)}
                  className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleUrlSubmit}
                  disabled={!urlInput.trim()}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                  <Check className="w-4 h-4" />
                  <span>Update</span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default ProfileImageUpload;