import SliderNetwork from '../../components/slider/SliderNetwork'
import { FormattedMessage } from 'react-intl'
import IntegrationMapUA from '../../components/map/IntegrationMapUA'
import geoJsonData from '../../data/ukraine.geo.json'
import './Network.scss'

function Network() {
  return (
    <div className="container">
      {/* Карта України */}
      <div className="map-section">
        <IntegrationMapUA geoJsonData={geoJsonData} />
      </div>

      {/* Діалог */}
      <div className="dialog">
        <div className="dialog__box-1">
          <p>
            <FormattedMessage id="dialog.1" />
          </p>
        </div>
        <div className="dialog__box-2">
          <p>
            <FormattedMessage
              id="dialog.linkText"
              values={{
                statuteLink: (
                  <a
                    href="https://drive.google.com/drive/folders/1MxXYK9sjfqpkt2bFm8J_0Qbfdf-b4Lb5"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="dialog.statuteLink" />
                  </a>
                ),
                formLink: (
                  <a
                    href="https://forms.gle/zdM6ZSNsT48XuGVi9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="dialog.formLink" />
                  </a>
                ),
              }}
            />
          </p>
        </div>

        <div className="dialog__box-3">
          <p className="text">
            <FormattedMessage id="dialog.3" />
          </p>
        </div>
      </div>

      {/* Слайдер */}
      <div className="slider-network">
        <SliderNetwork />
      </div>
    </div>
  )
}

export default Network
