import React, { useMemo } from 'react'
import { useIntl } from 'react-intl'
import './Team.scss'

const TeamMember = ({ photo, name, position, description }) => (
  <div className="container">
    <div className="photo">
      <img src={photo} alt="Team Member" loading="lazy" />
      <div className="description">{description}</div>
    </div>
    <div className="info">
      <div className="name">{name}</div>
      <div className="position">{position}</div>
    </div>
  </div>
)

function Team() {
  const intl = useIntl()

  const teamMembers = useMemo(
    () => [
      {
        photo: './img/team/Tolstanova.png',
        name: intl.formatMessage({ id: 'team.member.name.1' }),
        position: intl.formatMessage({ id: 'team.member.position.1' }),
        description: intl.formatMessage({ id: 'team.member.description.1' }),
      },
      {
        photo: './img/team/Petrunina.png',
        name: intl.formatMessage({ id: 'team.member.name.2' }),
        position: intl.formatMessage({ id: 'team.member.position.2' }),
        description: intl.formatMessage({ id: 'team.member.description.2' }),
      },
      {
        photo: './img/team/Bovtruk.png',
        name: intl.formatMessage({ id: 'team.member.name.3' }),
        position: intl.formatMessage({ id: 'team.member.position.3' }),
        description: intl.formatMessage({ id: 'team.member.description.3' }),
      },
      {
        photo: './img/team/Gura.png',
        name: intl.formatMessage({ id: 'team.member.name.4' }),
        position: intl.formatMessage({ id: 'team.member.position.4' }),
        description: intl.formatMessage({ id: 'team.member.description.4' }),
      },
      {
        photo: './img/team/Krukevych.png',
        name: intl.formatMessage({ id: 'team.member.name.5' }),
        position: intl.formatMessage({ id: 'team.member.position.5' }),
        description: intl.formatMessage({ id: 'team.member.description.5' }),
      },
      {
        photo: './img/team/Lykhachova.png',
        name: intl.formatMessage({ id: 'team.member.name.6' }),
        position: intl.formatMessage({ id: 'team.member.position.6' }),
        description: intl.formatMessage({ id: 'team.member.description.6' }),
      },
      {
        photo: './img/team/Pochaevets.png',
        name: intl.formatMessage({ id: 'team.member.name.7' }),
        position: intl.formatMessage({ id: 'team.member.position.7' }),
        description: intl.formatMessage({ id: 'team.member.description.7' }),
      },
      {
        photo: './img/team/Shalimova.png',
        name: intl.formatMessage({ id: 'team.member.name.8' }),
        position: intl.formatMessage({ id: 'team.member.position.8' }),
        description: intl.formatMessage({ id: 'team.member.description.8' }),
      },
      {
        photo: './img/team/Konovalova.png',
        name: intl.formatMessage({ id: 'team.member.name.9' }),
        position: intl.formatMessage({ id: 'team.member.position.9' }),
        description: intl.formatMessage({ id: 'team.member.description.9' }),
      },
      {
        photo: './img/team/Gorobets.png',
        name: intl.formatMessage({ id: 'team.member.name.10' }),
        position: intl.formatMessage({ id: 'team.member.position.10' }),
        description: intl.formatMessage({ id: 'team.member.description.10' }),
      },
    ],
    [intl]
  )

  return (
    <div className="container">
      <div className="teams-page">
        <h2>{intl.formatMessage({ id: 'founders' })}</h2>
        <div className="team-members">
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              photo={member.photo}
              name={member.name}
              position={member.position}
              description={member.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team
