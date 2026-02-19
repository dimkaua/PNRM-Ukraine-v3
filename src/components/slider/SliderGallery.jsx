import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './SliderStyles.scss'

const photos = [
  { url: './img/photos/photo_1.png', alt: 'Photo 1' },
  { url: './img/photos/photo_2.png', alt: 'Photo 2' },
  { url: './img/photos/photo_3.png', alt: 'Photo 3' },
  { url: './img/photos/photo_4.png', alt: 'Photo 4' },
  { url: './img/photos/photo_5.png', alt: 'Photo 5' },
  { url: './img/photos/photo_6.png', alt: 'Photo 6' },
  { url: './img/photos/photo_7.png', alt: 'Photo 7' },
  { url: './img/photos/photo_8.png', alt: 'Photo 8' },
  { url: './img/photos/photo_9.png', alt: 'Photo 9' },
  { url: './img/photos/photo_10.png', alt: 'Photo 10' },
  { url: './img/photos/photo_11.png', alt: 'Photo 11' },
  { url: './img/photos/photo_12.png', alt: 'Photo 12' },
  { url: './img/photos/photo_13.png', alt: 'Photo 13' },
  { url: './img/photos/photo_14.png', alt: 'Photo 14' },
  { url: './img/photos/photo_15.png', alt: 'Photo 15' },
  { url: './img/photos/photo_16.png', alt: 'Photo 16' },
  { url: './img/photos/photo_17.png', alt: 'Photo 17' },
  { url: './img/photos/photo_18.png', alt: 'Photo 18' },
]

function SliderGallery() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % photos.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + photos.length) % photos.length)
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const openPhotoInNewTab = () => {
    window.open(photos[currentSlide].url, '_blank')
  }

  return (
    <div className="slider-container">
      <button className="slider-arrow arrow-left" onClick={prevSlide}>
        <ChevronLeft size={28} />
      </button>

      <div className="slider-content" onClick={openPhotoInNewTab}>
        <img
          key={currentSlide}
          src={photos[currentSlide].url}
          alt={photos[currentSlide].alt}
          className="slider-photo fade-in"
        />
      </div>

      <button className="slider-arrow arrow-right" onClick={nextSlide}>
        <ChevronRight size={28} />
      </button>

      {/* dots navigation */}
      <div className="slider-dots">
        {photos.map((_, index) => (
          <div
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default SliderGallery
