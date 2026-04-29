import React from 'react';

export default function PhotoCard({ photo, onClick }) {
    return (
        <div className="rounded-lg bg-white p-4 shadow">
            <img src={photo.src} alt={photo.title} className="h-auto w-full cursor-pointer rounded object-cover" onClick={() => onClick(photo)} />
            <div className="mt-3 flex items-start justify-between gap-4">
                <div>
                    <h2 className="text-lg font-semibold">{photo.title}</h2>
                    {photo.description && <p className="mt-1 text-md text-gray-600">{photo.description}</p>}
                </div>
                <a href={photo.src} target="_blank" rel="noopener noreferrer" className="shrink-0 text-md text-blue-600 hover:underline">
                    Originál
                </a>
            </div>
        </div>
    );
}
