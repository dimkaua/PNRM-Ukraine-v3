import React, { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import './SliderStyles.scss'

const networkPhotos = [
  { url: './img/network/01.jpg', alt: '01' },
  { url: './img/network/02.jpg', alt: '02' },
  { url: './img/network/03.jpg', alt: '03' },
  { url: './img/network/04.jpg', alt: '04' },
  { url: './img/network/05.jpg', alt: '05' },
  { url: './img/network/06.jpg', alt: '06' },
  { url: './img/network/07.jpg', alt: '07' },
  { url: './img/network/08.jpg', alt: '08' },
  { url: './img/network/09.jpg', alt: '09' },
  { url: './img/network/10.jpg', alt: '10' },
  { url: './img/network/11.jpg', alt: '11' },
  { url: './img/network/12.jpg', alt: '12' },
  { url: './img/network/13.jpg', alt: '13' },
  { url: './img/network/14.jpg', alt: '14' },
  { url: './img/network/15.jpg', alt: '15' },
  { url: './img/network/16.jpg', alt: '16' },
  { url: './img/network/17.jpg', alt: '17' },
  { url: './img/network/18.jpg', alt: '18' },
  { url: './img/network/19.jpg', alt: '19' },
  { url: './img/network/20.jpg', alt: '20' },
  { url: './img/network/21.jpg', alt: '21' },
  { url: './img/network/22.jpg', alt: '22' },
  { url: './img/network/23.jpg', alt: '23' },
  { url: './img/network/24.jpg', alt: '24' },
  { url: './img/network/25.jpg', alt: '25' },
  { url: './img/network/26.jpg', alt: '26' },
  { url: './img/network/27.jpg', alt: '27' },
  { url: './img/network/28.jpg', alt: '28' },
  { url: './img/network/29.jpg', alt: '29' },
  { url: './img/network/30.jpg', alt: '30' },
  { url: './img/network/31.jpg', alt: '31' },
  { url: './img/network/32.jpg', alt: '32' },
  { url: './img/network/33.jpg', alt: '33' },
  { url: './img/network/34.jpg', alt: '34' },
  { url: './img/network/35.jpg', alt: '35' },
  { url: './img/network/36.jpg', alt: '36' },
  { url: './img/network/37.jpg', alt: '37' },
]

function NetworkSliderGallery() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % networkPhotos.length)
  }

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + networkPhotos.length) % networkPhotos.length
    )
  }

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const openPhotoInNewTab = () => {
    window.open(networkPhotos[currentSlide].url, '_blank')
  }

  return (
    <div className="slider-container">
      <button className="slider-arrow arrow-left" onClick={prevSlide}>
        <ChevronLeft size={28} />
      </button>

      <div className="slider-content" onClick={openPhotoInNewTab}>
        <img
          key={currentSlide}
          src={networkPhotos[currentSlide].url}
          alt={networkPhotos[currentSlide].alt}
          className="slider-photo fade-in"
        />
      </div>

      <button className="slider-arrow arrow-right" onClick={nextSlide}>
        <ChevronRight size={28} />
      </button>

      {/* dots navigation */}
      <div className="slider-dots">
        {networkPhotos.map((_, index) => (
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

export default NetworkSliderGallery
