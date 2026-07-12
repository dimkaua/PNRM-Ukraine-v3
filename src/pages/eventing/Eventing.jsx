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

const BoardMember = ({ photo, nameId, positionId, bioId }) => (
  <div className="board__member">
    <img src={photo} alt="board member" />
    <span className="board__member-name">
      <FormattedMessage id={nameId} />
    </span>
    <span className="board__member-position">
      <FormattedMessage id={positionId} />
    </span>
    <p className="board__member-bio">
      <FormattedMessage id={bioId} />
    </p>
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

// фото членів Наглядової ради
const boardMembers = [
  {
    id: 1,
    photo: '/img/team/ShevchukO.png',
    nameId: 'board.member1.name',
    positionId: 'board.member1.position',
    bioId: 'board.member1.bio',
  },
  {
    id: 2,
    photo: '/img/team/NesterenkoR.png',
    nameId: 'board.member2.name',
    positionId: 'board.member2.position',
    bioId: 'board.member2.bio',
  },
  {
    id: 3,
    photo: './img/team/ShalimovaN.png',
    nameId: 'board.member3.name',
    positionId: 'board.member3.position',
    bioId: 'board.member3.bio',
  },
]

const boardRegulations = [
  {
    titleId: 'board.section1.title',
    itemIds: ['board.section1.item1', 'board.section1.item2', 'board.section1.item3'],
  },
  {
    titleId: 'board.section2.title',
    itemIds: ['board.section2.item1', 'board.section2.item2'],
  },
  {
    titleId: 'board.section3.title',
    itemIds: ['board.section3.item1', 'board.section3.item2', 'board.section3.item3'],
  },
  {
    titleId: 'board.section4.title',
    itemIds: [
      'board.section4.item1',
      'board.section4.item2',
      'board.section4.item3',
      'board.section4.item4',
    ],
  },
  {
    titleId: 'board.section5.title',
    itemIds: ['board.section5.item1', 'board.section5.item2', 'board.section5.item3'],
  },
  {
    titleId: 'board.section6.title',
    itemIds: ['board.section6.item1', 'board.section6.item2'],
  },
  {
    titleId: 'board.section7.title',
    itemIds: ['board.section7.item1', 'board.section7.item2'],
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

      <div className="board">
        <h2>
          <FormattedMessage id="board.title" />
        </h2>
        <p className="board__intro">
          <FormattedMessage id="board.intro" />
        </p>

        <h3 className="board__composition-title">
          <FormattedMessage id="board.compositionTitle" />
        </h3>
        <div className="board__members">
          {boardMembers.map((member) => (
            <BoardMember
              key={member.id}
              photo={member.photo}
              nameId={member.nameId}
              positionId={member.positionId}
              bioId={member.bioId}
            />
          ))}
        </div>

        <div className="board__regulations">
          <h3 className="board__regulations-title">
            <FormattedMessage id="board.regulationsTitle" />
          </h3>
          <p className="board__regulations-approved">
            <FormattedMessage id="board.regulationsApproved" />
          </p>

          {boardRegulations.map((section, index) => (
            <div className="board__regulations-section" key={index}>
              <h4>
                <FormattedMessage id={section.titleId} />
              </h4>
              <ul>
                {section.itemIds.map((itemId) => (
                  <li key={itemId}>
                    <FormattedMessage id={itemId} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Eventing