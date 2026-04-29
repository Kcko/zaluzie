import React, { useState } from 'react';
import PhotoCard from './PhotoCard';
import PhotoModal from './PhotoModal';
import { photos } from '../data/photos';

export default function PhotoList() {
    const [activePhoto, setActivePhoto] = useState(null);

    return (
        <div className="mx-auto max-w-[1024px] px-4 py-8">
            <h1 className="mb-6 text-4xl font-bold text-center">Fotky žaluzií - asymetrické, levá strana nedovírá</h1>
            <div className="space-y-6">
                {photos.map(photo => (
                    <PhotoCard key={photo.id} photo={photo} onClick={setActivePhoto} />
                ))}
            </div>
            <PhotoModal photo={activePhoto} onClose={() => setActivePhoto(null)} />
        </div>
    );
}
