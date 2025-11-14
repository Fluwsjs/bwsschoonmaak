"use client";

import Image from "next/image";

interface ProjectGalleryProps {
  images: string[];
  title?: string;
}

export default function ProjectGallery({ images, title }: ProjectGalleryProps) {
  return (
    <section className="bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="container px-4 sm:px-6">
        {title && (
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-8 sm:mb-12">
            {title}
          </h2>
        )}
        
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden rounded-lg group cursor-pointer bg-gray-200 active:scale-95 transition-transform duration-300"
            >
              <Image
                src={image}
                alt={`Project foto ${index + 1}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

