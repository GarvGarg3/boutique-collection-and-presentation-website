'use client';

import { useState, useRef } from 'react';

interface ImageUploadProps {
  onUpload: (url: string) => void;
  onRemove?: () => void;
  existingImages?: string[];
}

export default function ImageUpload({
  onUpload,
  onRemove,
  existingImages = []
}: ImageUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleUpload = async (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Please upload an image file');
      return;
    }

    // Show preview
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);

    // Upload to server
    setIsUploading(true);
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        onUpload(data.url);
      } else {
        alert(data.error || 'Upload failed');
        setPreview(null);
      }
    } catch (error) {
      console.error('Upload error:', error);
      alert('Failed to upload image');
      setPreview(null);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setIsDragging(true);
    } else if (e.type === 'dragleave') {
      setIsDragging(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const files = e.dataTransfer.files;
    if (files && files[0]) {
      handleUpload(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      handleUpload(files[0]);
    }
  };

  const handleRemove = () => {
    setPreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    onRemove?.();
  };

  // Show existing images as thumbnails
  if (existingImages.length > 0) {
    return (
      <div className="grid grid-cols-3 gap-4">
        {existingImages.map((url, index) => (
          <div key={index} className="relative aspect-square rounded-lg overflow-hidden group">
            <img
              src={url}
              alt={`Uploaded ${index + 1}`}
              className="w-full h-full object-cover"
            />
            <button
              type="button"
              onClick={handleRemove}
              className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div
      className={`
        group relative aspect-[4/5] rounded-xl overflow-hidden
        border-2 border-dashed transition-all cursor-pointer
        ${isDragging
          ? 'border-secondary bg-secondary-fixed/10'
          : 'border-outline-variant hover:border-secondary'
        }
        ${preview ? 'border-solid' : ''}
      `}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
      onClick={() => fileInputRef.current?.click()}
    >
      {preview ? (
        <div className="relative w-full h-full">
          <img
            src={preview}
            alt="Preview"
            className="w-full h-full object-cover"
          />
          {isUploading && (
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <div className="text-white text-center">
                <span className="material-symbols-outlined animate-spin">progress_activity</span>
                <p className="text-sm mt-2">Uploading...</p>
              </div>
            </div>
          )}
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              handleRemove();
            }}
            className="absolute top-4 right-4 p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
          <div className="w-16 h-16 bg-surface-container-lowest rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
            <span
              className="material-symbols-outlined text-3xl text-secondary"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              add_photo_alternate
            </span>
          </div>
          <h3 className="font-headline text-xl italic mb-2">Drop your visual inspiration</h3>
          <p className="text-on-surface-variant text-sm max-w-xs mx-auto">
            High-resolution sketches, textile swatches, or mood board photography (JPG, PNG, TIFF)
          </p>
          <p className="text-outline-variant text-xs mt-4">or click to browse</p>
        </div>
      )}

      <input
        ref={fileInputRef}
        className="absolute inset-0 opacity-0 cursor-pointer"
        type="file"
        accept="image/*"
        onChange={handleFileSelect}
        disabled={isUploading}
      />
    </div>
  );
}
