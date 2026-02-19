import React from 'react'
import { FormattedMessage } from 'react-intl'
import './YouTubeChannel.scss'

function YouTubeChannel() {
  return (
    <div>
      <p>
        <FormattedMessage
          id="youtube.channel"
          values={{
            link: (
              <a href="https://www.youtube.com/@PNRMUkraine/featured">
                <FormattedMessage id="youtube.link" />
              </a>
            ),
          }}
        />
      </p>
    </div>
  )
}

export default YouTubeChannel
