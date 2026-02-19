import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, GeoJSON } from 'react-leaflet'
import { FormattedMessage } from 'react-intl'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import './IntegrationMapUA.scss'

const universities = [
  {
    id: 'polissia',
    coords: [50.24906, 28.6679],
    logo: '/img/map/polissia.jpg',
    role: 'map.partner',
  },
  {
    id: 'karazin',
    coords: [50.00827388844488, 36.23039888165841],
    logo: '/img/map/karazina.jpg',
    role: 'map.partner',
  },
  //   {
  //     id: 'potsdam',
  //     coords: [52.388417681256826, 13.078209779239023],
  //     logo: '/img/map/bbw.png',
  //     role: 'map.partner',
  //   },
]

// Кастомний ікон для лого
const createLogoIcon = (logoUrl) =>
  L.icon({
    iconUrl: logoUrl,
    iconSize: [40, 40],
    className: 'university-logo',
  })

// Стилі для GeoJSON
const regionStyle = {
  fillColor: '#4f83cc',
  weight: 1,
  opacity: 1,
  color: 'white',
  dashArray: '2',
  fillOpacity: 0.4,
}

const IntegrationMapUA = ({ geoJsonData }) => {
  return (
    <MapContainer center={[49, 31]} zoom={6} className="integration-map">
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {/* Області України */}
      {geoJsonData && (
        <GeoJSON
          data={geoJsonData}
          style={regionStyle}
          onEachFeature={(feature, layer) => {
            if (feature.properties?.name) {
              layer.bindTooltip(feature.properties.name, {
                permanent: false,
                direction: 'top',
              })
            }
          }}
        />
      )}

      {/* Піни університетів */}
      {universities.map((uni) => (
        <Marker
          key={uni.id}
          position={uni.coords}
          icon={createLogoIcon(uni.logo)}
        >
          <Popup>
            <div className="popup-content">
              <img src={uni.logo} alt={uni.id} />
              <h3>
                <FormattedMessage id={`universities.${uni.id}.name`} />
              </h3>
              <p>
                <FormattedMessage id={`universities.${uni.id}.city`} />
              </p>
              <p>
                <b>
                  <FormattedMessage id="map.role" />:
                </b>{' '}
                <FormattedMessage id={uni.role} />
              </p>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}

export default IntegrationMapUA
