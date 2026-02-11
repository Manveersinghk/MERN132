import React from 'react';

const images = [
    "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1579165466741-7f35a4755657?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1581093458791-9f302e6838b3?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&w=300&q=80",
];

const ImageGallery = () => {
    return (
        <section className="py-20 bg-primary-light overflow-hidden relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(14,165,233,0.1),transparent)]" />

            <div className="max-w-7xl mx-auto px-4 text-center mb-16 relative z-10">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-4">
                    Innovation in <span className="text-secondary">Motion</span>
                </h2>
                <p className="text-blue-200 max-w-2xl mx-auto">
                    Explore our state-of-the-art facilities and breakthrough technologies.
                </p>
            </div>

            <div className="relative h-[400px] flex items-center justify-center gallery-container">
                <div className="relative w-[200px] h-[300px] gallery-rotator">
                    {images.map((src, index) => {
                        const rotation = index * (360 / images.length);
                        const translateZ = 350; // Distance from center

                        return (
                            <div
                                key={index}
                                className="gallery-item absolute top-0 left-0 w-full h-full rounded-2xl overflow-hidden border-2 border-secondary/30 shadow-[0_0_30px_rgba(14,165,233,0.3)] bg-primary-dark"
                                style={{
                                    transform: `rotateY(${rotation}deg) translateZ(${translateZ}px)`,
                                }}
                            >
                                <div className="w-full h-full relative group">
                                    <img
                                        src={src}
                                        alt={`Gallery ${index + 1}`}
                                        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent opacity-60" />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ImageGallery;
