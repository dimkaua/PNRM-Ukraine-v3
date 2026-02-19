import React from 'react'
import './YouTubeGallery.scss'

const youtubeVideos = ['https://www.youtube.com/watch?v=lMwLUGCdMdQ']

function extractVideoId(url) {
  const match = url.match(/(?:\?v=|\.be\/)([a-zA-Z0-9_-]{11})/)
  return match ? match[1] : null
}

const YouTubeGallery = () => {
  return (
    <div className="youtube-gallery">
      {youtubeVideos.map((url, index) => {
        const videoId = extractVideoId(url)
        return (
          <div className="youtube-gallery__item" key={index}>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="youtube-gallery__link"
            >
              <iframe
                src={`https://www.youtube.com/embed/${videoId}`}
                title={`YouTube video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="youtube-gallery__iframe"
              ></iframe>
            </a>
          </div>
        )
      })}
    </div>
  )
}

export default YouTubeGallery
