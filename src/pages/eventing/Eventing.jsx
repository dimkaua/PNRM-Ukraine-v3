import { FormattedMessage } from 'react-intl'
import './Eventing.scss'

const OurDirection = ({ photo, description }) => (
  <div className="direction__item">
    <div className="direction__icon">
      <img src={photo} alt="direction icon" />
      <span>
        <FormattedMessage id={description} />
      </span>
    </div>
  </div>
)

const ourDirections = [
  {
    id: 1,
    photo: './img/categories_mini/Development of Manager.png',
    description: 'direction.description1',
  },
  {
    id: 2,
    photo: './img/categories_mini/Grant Activities.png',
    description: 'direction.description2',
  },
  {
    id: 3,
    photo: './img/categories_mini/Higher Education.png',
    description: 'direction.description3',
  },
  {
    id: 4,
    photo: './img/categories_mini/Innovation and Transfer.png',
    description: 'direction.description4',
  },
  {
    id: 5,
    photo: './img/categories_mini/Science Communication.png',
    description: 'direction.description5',
  },
  {
    id: 6,
    photo: './img/categories_mini/Management of displacement.png',
    description: 'direction.description6',
  },
]

function Eventing() {
  return (
    <div className="container">
      <div className="about">
        <h2>
          <FormattedMessage id="about.title2" />
        </h2>
        <p>
          <FormattedMessage id="about.p1" />
        </p>
        <p>
          <FormattedMessage id="about.p2" />
        </p>
        <p>
          <FormattedMessage id="about.p3" />
        </p>
        <p>
          <FormattedMessage id="about.p4" />
        </p>
        <p>
          <FormattedMessage id="about.p5" />
        </p>
        <p>
          <FormattedMessage id="about.p6" />
        </p>
      </div>

      <div className="mission">
        <h2>
          <FormattedMessage id="mission.title" />
        </h2>
        <p>
          <FormattedMessage id="mission.subtitle" />
        </p>
      </div>
      <div className="direction">
        <h2>
          <FormattedMessage id="direction.title" />
        </h2>
        <div className="direction__items">
          {ourDirections.map((directions, index) => (
            <OurDirection
              key={index}
              photo={directions.photo}
              description={directions.description}
            />
          ))}
        </div>
        <div className="direction__subtitle">
          <p>
            <FormattedMessage id="direction.subtitle" />
          </p>
        </div>
      </div>
    </div>
  )
}

export default Eventing
