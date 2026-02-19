import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'
import './TeamDetail.scss'

const RegulationsSection = () => {
  return (
    <div className="regulations-section">
      <div className="regulations-section__header">
        <h2 className="regulations-section__title">
          <FormattedMessage
            id="regulations.title"
            defaultMessage="ПОЛОЖЕННЯ PNRM Ukraine"
          />
        </h2>
        <p className="regulations-section__subtitle">
          <FormattedMessage
            id="regulations.subtitle"
            defaultMessage="Ознайомтеся з офіційними документами організації"
          />
        </p>
      </div>

      <div className="regulations-section__content">
        <div className="regulations-section__buttons">
          <a
            href="https://docs.google.com/document/d/1c4rUCh_F5AOUV9sypEzssClTlK0_wFT_/edit?usp=sharing&ouid=104763159760521083356&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="regulations-section__button regulations-section__button--primary"
          >
            <span className="regulations-section__button-icon">📋</span>
            <span className="regulations-section__button-text">
              <FormattedMessage
                id="regulations.supervisory.button"
                defaultMessage="Наглядова рада"
              />
            </span>
          </a>

          <a
            href="https://docs.google.com/document/d/1SExTnEtbILoS_lnfvtTiMGp6mTxSuyWF/edit?usp=sharing&ouid=104763159760521083356&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            className="regulations-section__button regulations-section__button--secondary"
          >
            <span className="regulations-section__button-icon">📝</span>
            <span className="regulations-section__button-text">
              <FormattedMessage
                id="regulations.advisory.button"
                defaultMessage="Консультативна рада"
              />
            </span>
          </a>
        </div>
      </div>
    </div>
  )
}

// Основний компонент для окремої команди
const TeamDetailSection = ({
  titleKey,
  subtitleKey,
  teamMembers = [],
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)

  return (
    <div className="team-detail">
      <div
        className={`team-detail__header ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="team-detail__arrow">{isOpen ? '🔽' : '▶️'}</span>
        <div>
          <h2 className="team-detail__title">
            <FormattedMessage id={titleKey} />
          </h2>
          <p className="team-detail__subtitle">
            <FormattedMessage id={subtitleKey} />
          </p>
        </div>
      </div>

      {isOpen && (
        <div className="team-detail__content">
          <div className="team-detail__table-container">
            <table className="team-detail__table">
              <thead>
                <tr>
                  <th>
                    <FormattedMessage id="team.table.name" />
                  </th>
                  <th>
                    <FormattedMessage id="team.table.period" />
                  </th>
                  <th>
                    <FormattedMessage id="team.table.achievements" />
                  </th>
                </tr>
              </thead>
              <tbody>
                {teamMembers.map((member, index) => (
                  <tr key={index}>
                    <td>
                      {member.nameKey ? (
                        <FormattedMessage id={member.nameKey} />
                      ) : (
                        member.name
                      )}
                    </td>
                    <td>{member.period}</td>
                    <td>
                      {member.achievementsKey ? (
                        <FormattedMessage id={member.achievementsKey} />
                      ) : (
                        member.achievements
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  )
}

// Головний компонент, який містить всі команди
const TeamDetail = () => {
  // Дані про команду - додавати нових людей
  const organizationHeadData = [
    {
      name: 'Ганна Толстанова',
      nameKey: 'team.member.hanna.name',
      period: '',
      achievementsKey: 'team.member.hanna.achievements',
    },
    {
      name: 'Вікторія Гура',
      nameKey: 'team.member.victoria.name',
      period: '',
      achievementsKey: 'team.member.victoria.achievements',
    },
  ]

  const secretaryData = [
    {
      name: 'Наталія Шалімова',
      nameKey: 'team.member.shalimova.name',
      period: '',
      achievementsKey: 'team.member.shalimova.achievements',
    },
  ]

  const supervisoryData = [
    {
      name: 'Оксана Шевчук',
      nameKey: 'team.member.shevchuk.name',
      period: '',
      achievementsKey: '',
    },
    {
      name: 'Роман Нестеренко',
      nameKey: 'team.member.nesterenko.name',
      period: '',
      achievementsKey: '',
    },
    {
      name: 'Наталія Шалімова',
      nameKey: 'team.member.nshalimova.name',
      period: '',
      achievementsKey: '',
    },
  ]

  const advisoryCouncilData = [
    {
      name: 'Dr. Johannes Freudenreich\njohannes.freudenreich@uni-potsdam.de',
      nameKey: 'team.member.freudenreich.name',
      period: '',
      achievementsKey: 'team.member.freudenreich.achievements',
    },
    {
      name: 'Nataliya Butych\nnataliya.butych@zuv.uni-hannover.de\n+49 (0)511 762 3702',
      nameKey: 'team.member.butych.name',
      period: '',
      achievementsKey: 'team.member.butych.achievements',
    },
    {
      name: 'Dr. Iryna Degtyarova\nidegty@sgh.waw.pl',
      nameKey: 'team.member.degtyarova.name',
      period: '',
      achievementsKey: 'team.member.degtyarova.achievements',
    },
    {
      name: 'Prof. Dr. Ali Arnaout\nali.arnaout@hs-wismar.de\n+49 3841 753-7168',
      nameKey: 'team.member.arnaout.name',
      period: '',
      achievementsKey: 'team.member.arnaout.achievements',
    },
  ]

  return (
    <div className="team-page">
      {/* Нова секція з положеннями */}
      <RegulationsSection />

      <TeamDetailSection
        titleKey="team.organization.head.title"
        subtitleKey="team.organization.head.subtitle"
        teamMembers={organizationHeadData}
        defaultOpen={false}
      />

      <TeamDetailSection
        titleKey="team.secretary.title"
        subtitleKey="team.secretary.subtitle"
        teamMembers={secretaryData}
      />

      <TeamDetailSection
        titleKey="team.supervisory.title"
        subtitleKey="team.supervisory.subtitle"
        teamMembers={supervisoryData}
      />

      <TeamDetailSection
        titleKey="team.advisory.council.title"
        subtitleKey="team.advisory.council.subtitle"
        teamMembers={advisoryCouncilData}
      />
    </div>
  )
}

export default TeamDetail
