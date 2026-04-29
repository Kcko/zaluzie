import React from 'react'

export default function PhotoModal({ photo, onClose }) {
  if (!photo) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-5xl w-full rounded-lg bg-white p-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-2xl font-bold text-gray-700 hover:text-black"
        >
          ✕
        </button>
        <img
          src={photo.src}
          alt={photo.title}
          className="max-h-[80vh] w-full rounded object-contain"
        />
        <div className="mt-2 px-2 pb-1">
          <h2 className="text-lg font-semibold">{photo.title}</h2>
          {photo.description && (
            <p className="text-sm text-gray-600">{photo.description}</p>
          )}
        </div>
      </div>
    </div>
  )
}
