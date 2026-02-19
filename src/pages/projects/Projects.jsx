import React, { useState } from 'react'
import { FormattedMessage, useIntl } from 'react-intl'
import './Projects.scss'

const Projects = () => {
  const intl = useIntl()
  const [activeProject, setActiveProject] = useState(null)

  const toggleProject = (projectId) => {
    setActiveProject(activeProject === projectId ? null : projectId)
  }

  const EUComplianceContent = () => (
    <div className="project-content">
      {/* Project Logo */}
      <div className="eu-compliance__logo">
        <img
          src="./img/EUComplianceM4UA.png"
          alt={intl.formatMessage({ id: 'euCompliance.logo.alt' })}
        />
      </div>

      {/* Basic Project Info */}
      <section className="eu-compliance__section">
        <h2 className="eu-compliance__section-title">
          <FormattedMessage id="euCompliance.projectTitle" />
        </h2>
        <div className="eu-compliance__info-block">
          <p>
            <strong>
              <FormattedMessage id="euCompliance.projectNumber.label" />:
            </strong>{' '}
            101179706
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.shortName.label" />:
            </strong>{' '}
            EUComplianceM4UA
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.projectType.label" />:
            </strong>{' '}
            ERASMUS-EDU-2024-CBHE-STRAND-1 ERASMUS-LS
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.priority.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.priority.value" />
          </p>
          <ul className="eu-compliance__list">
            <li>
              <FormattedMessage id="euCompliance.priorityList.item1" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.priorityList.item2" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.priorityList.item3" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.priorityList.item4" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.priorityList.item5" />
            </li>
          </ul>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.duration.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.duration.value" />
          </p>
        </div>
      </section>

      {/* Funding Info */}
      <section className="eu-compliance__section">
        <h3 className="eu-compliance__section-title">
          <FormattedMessage id="euCompliance.funding.title" />
        </h3>
        <div className="eu-compliance__info-block">
          <p>
            <FormattedMessage id="euCompliance.funding.program" />
          </p>
          <p>
            <FormattedMessage id="euCompliance.funding.instrument" />
          </p>
          <p>
            <FormattedMessage id="euCompliance.funding.agreement" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.funding.amount.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.funding.amount.value" />
          </p>
        </div>
      </section>

      {/* Target Groups */}
      <section className="eu-compliance__section">
        <h3 className="eu-compliance__section-title">
          <FormattedMessage id="euCompliance.targetGroups.title" />:
        </h3>
        <ol className="eu-compliance__list eu-compliance__list--numbered">
          <li>
            <strong>
              <FormattedMessage id="euCompliance.targetGroups.group1.title" />.
            </strong>{' '}
            <FormattedMessage id="euCompliance.targetGroups.group1.description" />
          </li>
          <li>
            <strong>
              <FormattedMessage id="euCompliance.targetGroups.group2.title" />.
            </strong>{' '}
            <FormattedMessage id="euCompliance.targetGroups.group2.description" />
          </li>
          <li>
            <strong>
              <FormattedMessage id="euCompliance.targetGroups.group3.title" />
            </strong>{' '}
            <FormattedMessage id="euCompliance.targetGroups.group3.description" />
          </li>
        </ol>
      </section>

      {/* Grant Recipient */}
      <section className="eu-compliance__section">
        <h3 className="eu-compliance__section-title">
          <FormattedMessage id="euCompliance.grantRecipient.title" />:
        </h3>
        <div className="eu-compliance__info-block">
          <p>
            <strong>
              <FormattedMessage id="euCompliance.name.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.grantRecipient.name" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.country.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.grantRecipient.country" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.website.label" />:
            </strong>{' '}
            <a
              href="https://www.hs-wismar.de/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.hs-wismar.de/
            </a>
          </p>

          <div className="eu-compliance__contact">
            <p>
              <strong>
                <FormattedMessage id="euCompliance.coordinator.label" />:
              </strong>{' '}
              <FormattedMessage id="euCompliance.grantRecipient.coordinator" />
            </p>
            <p>
              <strong>
                <FormattedMessage id="euCompliance.projectManager.label" />:
              </strong>{' '}
              <FormattedMessage id="euCompliance.grantRecipient.projectManager" />
            </p>
            <p>
              <strong>
                <FormattedMessage id="euCompliance.contacts.label" />:
              </strong>
            </p>
            <p>
              <FormattedMessage id="euCompliance.phone.label" />: +038417537472
            </p>
            <p>
              <FormattedMessage id="euCompliance.email.label" />:{' '}
              <a href="mailto:anna.fomenko@hs-wismar.de">
                anna.fomenko@hs-wismar.de
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="eu-compliance__section">
        <h3 className="eu-compliance__section-title">
          <FormattedMessage id="euCompliance.partnership.title" />:
        </h3>
        <ul className="eu-compliance__list">
          <li>
            <FormattedMessage id="euCompliance.partnership.partner1" />
          </li>
          <li>
            <FormattedMessage id="euCompliance.partnership.partner2" />
          </li>
          <li>
            <FormattedMessage id="euCompliance.partnership.partner3" />
          </li>
        </ul>

        <h3 className="eu-compliance__section-subtitle">
          <FormattedMessage id="euCompliance.partnershipUkraine.title" />:
        </h3>
        <ul className="eu-compliance__list">
          <li>
            <FormattedMessage id="euCompliance.partnershipUkraine.partner1" />
          </li>
          <li>
            <FormattedMessage id="euCompliance.partnershipUkraine.partner2" />
          </li>
          <li>
            <FormattedMessage id="euCompliance.partnershipUkraine.partner3" />
          </li>
          <li>
            <FormattedMessage id="euCompliance.partnershipUkraine.partner4" />
          </li>
          <li>
            <FormattedMessage id="euCompliance.partnershipUkraine.partner5" />
          </li>
        </ul>

        <h3 className="eu-compliance__section-subtitle">
          <FormattedMessage id="euCompliance.associatedPartner.title" />:
        </h3>
        <ul className="eu-compliance__list">
          <li>
            <FormattedMessage id="euCompliance.associatedPartner.partner1" />
          </li>
        </ul>
      </section>

      {/* Project Goals */}
      <section className="eu-compliance__section">
        <h3 className="eu-compliance__section-title">
          <FormattedMessage id="euCompliance.goals.title" />:
        </h3>
        <div className="eu-compliance__info-block">
          <p>
            <FormattedMessage id="euCompliance.goals.description" />
          </p>

          <h4 className="eu-compliance__section-subtitle">
            <FormattedMessage id="euCompliance.tasks.title" />:
          </h4>
          <ol className="eu-compliance__list eu-compliance__list--numbered">
            <li>
              <FormattedMessage id="euCompliance.tasks.task1" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.tasks.task2" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.tasks.task3" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.tasks.task4" />
            </li>
          </ol>
        </div>
      </section>

      {/* Activity Areas */}
      <section className="eu-compliance__section">
        <h3 className="eu-compliance__section-title">
          <FormattedMessage id="euCompliance.activities.title" />:
        </h3>

        <div className="eu-compliance__activity">
          <h4 className="eu-compliance__activity-title">
            <FormattedMessage id="euCompliance.activities.activity1.title" />
          </h4>
          <ul className="eu-compliance__list">
            <li>
              <FormattedMessage id="euCompliance.activities.activity1.item1" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.activities.activity1.item2" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.activities.activity1.item3" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.activities.activity1.item4" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.activities.activity1.item5" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.activities.activity1.item6" />
            </li>
          </ul>
        </div>

        <div className="eu-compliance__activity">
          <h4 className="eu-compliance__activity-title">
            <FormattedMessage id="euCompliance.activities.activity2.title" />
          </h4>
        </div>

        <div className="eu-compliance__activity">
          <h4 className="eu-compliance__activity-title">
            <FormattedMessage id="euCompliance.activities.activity3.title" />
          </h4>
        </div>

        <div className="eu-compliance__activity">
          <h4 className="eu-compliance__activity-title">
            <FormattedMessage id="euCompliance.activities.activity4.title" />:
          </h4>
          <ul className="eu-compliance__list">
            <li>
              <FormattedMessage id="euCompliance.activities.activity4.item1" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.activities.activity4.item2" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.activities.activity4.item3" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.activities.activity4.item4" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.activities.activity4.item5" />
            </li>
          </ul>
        </div>
      </section>

      {/* Expected Results */}
      <section className="eu-compliance__section">
        <h3 className="eu-compliance__section-title">
          <FormattedMessage id="euCompliance.results.title" />:
        </h3>

        <div className="eu-compliance__result">
          <h4 className="eu-compliance__result-title">
            <FormattedMessage id="euCompliance.results.result1.title" />
          </h4>
          <ul className="eu-compliance__list">
            <li>
              <FormattedMessage id="euCompliance.results.result1.item1" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.results.result1.item2" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.results.result1.item3" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.results.result1.item4" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.results.result1.item5" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.results.result1.item6" />
            </li>
          </ul>
        </div>

        <div className="eu-compliance__result">
          <h4 className="eu-compliance__result-title">
            <FormattedMessage id="euCompliance.results.result2.title" />
          </h4>
          <ul className="eu-compliance__list">
            <li>
              <FormattedMessage id="euCompliance.results.result2.item1" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.results.result2.item2" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.results.result2.item3" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.results.result2.item4" />
            </li>
          </ul>
        </div>

        <div className="eu-compliance__result">
          <h4 className="eu-compliance__result-title">
            <FormattedMessage id="euCompliance.results.result3.title" />
          </h4>
          <ul className="eu-compliance__list">
            <li>
              <FormattedMessage id="euCompliance.results.result3.item1" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.results.result3.item2" />
            </li>
          </ul>
        </div>

        <div className="eu-compliance__result">
          <h4 className="eu-compliance__result-title">
            <FormattedMessage id="euCompliance.results.result4.title" />
          </h4>
          <ul className="eu-compliance__list">
            <li>
              <FormattedMessage id="euCompliance.results.result4.item1" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.results.result4.item2" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.results.result4.item3" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.results.result4.item4" />
            </li>
            <li>
              <FormattedMessage id="euCompliance.results.result4.item5" />
            </li>
          </ul>
        </div>
      </section>

      {/* Ukrainian Coordinator */}
      <section className="eu-compliance__section">
        <h3 className="eu-compliance__section-title">
          <FormattedMessage id="euCompliance.ukrainianCoordinator.title" />:
        </h3>
        <div className="eu-compliance__info-block">
          <p>
            <strong>
              <FormattedMessage id="euCompliance.name.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.ukrainianCoordinator.name" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.website.label" />:
            </strong>{' '}
            <a
              href="https://kntu.kr.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://kntu.kr.ua/
            </a>
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.phone.label" />:
            </strong>{' '}
            +380522559234
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.responsiblePerson.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.ukrainianCoordinator.responsiblePerson" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.contacts.label" />:
            </strong>
          </p>
          <p>
            <FormattedMessage id="euCompliance.phone.label" />: +380509086628
          </p>
          <p>
            <FormattedMessage id="euCompliance.email.label" />:{' '}
            <a href="mailto:nataliia.shalimova@gmail.com">
              nataliia.shalimova@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Ukrainian Partners */}
      <section className="eu-compliance__section">
        <h3 className="eu-compliance__section-title">
          <FormattedMessage id="euCompliance.ukrainianPartners.title" />:
        </h3>

        <div className="eu-compliance__partner">
          <p>
            <strong>
              <FormattedMessage id="euCompliance.name.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.ukrainianPartners.partner1.name" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.website.label" />:
            </strong>{' '}
            <a
              href="https://dnuvs.ukr.education"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://dnuvs.ukr.education
            </a>
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.phone.label" />:
            </strong>{' '}
            +380968904263
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.responsiblePerson.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.ukrainianPartners.partner1.responsiblePerson" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.contacts.label" />:
            </strong>
          </p>
          <p>
            <FormattedMessage id="euCompliance.phone.label" />: +380508697738
          </p>
          <p>
            <FormattedMessage id="euCompliance.email.label" />:{' '}
            <a href="mailto:nazumuch@ukr.net">nazumuch@ukr.net</a>
          </p>
        </div>

        <div className="eu-compliance__partner">
          <p>
            <strong>
              <FormattedMessage id="euCompliance.name.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.ukrainianPartners.partner2.name" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.website.label" />:
            </strong>{' '}
            <a
              href="http://idgu.edu.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              http://idgu.edu.ua/
            </a>
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.phone.label" />:
            </strong>{' '}
            +380484163001
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.responsiblePerson.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.ukrainianPartners.partner2.responsiblePerson" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.contacts.label" />:
            </strong>
          </p>
          <p>
            <FormattedMessage id="euCompliance.phone.label" />: +380962136376
          </p>
          <p>
            <FormattedMessage id="euCompliance.email.label" />:{' '}
            <a href="mailto:vms.idgu@ukr.net">vms.idgu@ukr.net</a>
          </p>
        </div>

        <div className="eu-compliance__partner">
          <p>
            <strong>
              <FormattedMessage id="euCompliance.name.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.ukrainianPartners.partner3.name" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.website.label" />:
            </strong>{' '}
            <a
              href="https://www.hneu.edu.ua/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.hneu.edu.ua/
            </a>
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.phone.label" />:
            </strong>{' '}
            +380577021832
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.responsiblePerson.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.ukrainianPartners.partner3.responsiblePerson" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.contacts.label" />:
            </strong>
          </p>
          <p>
            <FormattedMessage id="euCompliance.phone.label" />: +380677118725
          </p>
          <p>
            <FormattedMessage id="euCompliance.email.label" />:{' '}
            <a href="mailto:oleksandra.gron@hneu.net">
              oleksandra.gron@hneu.net
            </a>
          </p>
        </div>

        <div className="eu-compliance__partner">
          <p>
            <strong>
              <FormattedMessage id="euCompliance.name.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.ukrainianPartners.partner4.name" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.website.label" />:
            </strong>{' '}
            <a
              href="https://karazin.ua/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://karazin.ua/en/
            </a>{' '}
            <a
              href="https://uepa.karazin.ua/en/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://uepa.karazin.ua/en/
            </a>
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.phone.label" />:
            </strong>{' '}
            +380997044802
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.responsiblePerson.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.ukrainianPartners.partner4.responsiblePerson" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.contacts.label" />:
            </strong>
          </p>
          <p>
            <FormattedMessage id="euCompliance.phone.label" />: +380662509057
          </p>
          <p>
            <FormattedMessage id="euCompliance.email.label" />:{' '}
            <a href="mailto:marynavasylieva@karazin.ua">
              marynavasylieva@karazin.ua
            </a>
          </p>
        </div>
      </section>

      {/* Associated Partner */}
      <section className="eu-compliance__section">
        <h3 className="eu-compliance__section-title">
          <FormattedMessage id="euCompliance.associatedPartnerDetail.title" />:
        </h3>
        <div className="eu-compliance__info-block">
          <p>
            <strong>
              <FormattedMessage id="euCompliance.name.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.associatedPartnerDetail.name" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.website.label" />:
            </strong>{' '}
            <a
              href="https://pnrm.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://pnrm.org/
            </a>
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.phone.label" />:
            </strong>{' '}
            +380976964273
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.responsiblePerson.label" />:
            </strong>{' '}
            <FormattedMessage id="euCompliance.associatedPartnerDetail.responsiblePerson" />
          </p>
          <p>
            <strong>
              <FormattedMessage id="euCompliance.contacts.label" />:
            </strong>
          </p>
          <p>
            <FormattedMessage id="euCompliance.phone.label" />: +380976964273
          </p>
          <p>
            <FormattedMessage id="euCompliance.email.label" />:{' '}
            <a href="mailto:viktoriyagura2016@gmail.com">
              viktoriyagura2016@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Project Website */}
      <section className="eu-compliance__section eu-compliance__section--highlight">
        <h3 className="eu-compliance__section-title">
          <FormattedMessage id="euCompliance.projectWebsite.title" />:
        </h3>
        <p className="eu-compliance__website-link">
          <a
            href="https://EUComplianceM4UA.eu"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://EUComplianceM4UA.eu
          </a>
        </p>
      </section>

      {/* Facebook Page */}
      <section className="eu-compliance__section eu-compliance__section--highlight">
        <h3 className="eu-compliance__section-title">
          <FormattedMessage id="euCompliance.facebook.title" />:
        </h3>
        <p className="eu-compliance__website-link">
          <a
            href="https://www.facebook.com/EUComplianceM4UA"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://www.facebook.com/EUComplianceM4UA
          </a>
        </p>
        <div className="eu-compliance__info-block">
          <p>
            <FormattedMessage id="euCompliance.facebook.disclaimer" />
          </p>
        </div>
      </section>
    </div>
  )

  return (
    <div className="projects-page">
      {/* Page Header */}
      <div className="projects-page__header">
        <h1 className="projects-page__title">
          <FormattedMessage id="projects.page.title" />
        </h1>
        <p className="projects-page__description">
          <FormattedMessage id="projects.page.description" />
        </p>
      </div>

      {/* Projects Accordion */}
      <div className="projects-accordion">
        {/* EUCompliance4UA Project */}
        <div className="project-item">
          <div
            className={`project-header ${
              activeProject === 'eucompliance' ? 'active' : ''
            }`}
            onClick={() => toggleProject('eucompliance')}
          >
            <span className="project-arrow">
              {activeProject === 'eucompliance' ? '🔽' : '▶️'}
            </span>
            <div className="project-info">
              <h2 className="project-title">EUCompliance4UA</h2>
              <div className="project-subtitle">
                <FormattedMessage id="euCompliance.subtitle" />
              </div>
              <div className="project-calls">
                <FormattedMessage id="euCompliance.calls.first" />
              </div>
            </div>
          </div>

          {activeProject === 'eucompliance' && (
            <div className="project-content-wrapper">
              <EUComplianceContent />
            </div>
          )}
        </div>

        {/* TAK Program Project */}
        <div className="project-item">
          <div
            className={`project-header ${
              activeProject === 'takprogram' ? 'active' : ''
            }`}
            onClick={() => toggleProject('takprogram')}
          >
            <span className="project-arrow">
              {activeProject === 'takprogram' ? '🔽' : '▶️'}
            </span>
            <div className="project-info">
              <h2 className="project-title">
                <FormattedMessage id="takProgram.title" />
              </h2>
              <div className="project-subtitle">
                <FormattedMessage id="takProgram.subtitle" />
              </div>
              <div className="project-calls">
                <FormattedMessage id="takProgram.supportedBy" />
              </div>
            </div>
          </div>

          {activeProject === 'takprogram' && (
            <div className="project-content-wrapper">
              <div className="project-content">
                {/* Project Overview */}
                <section className="eu-compliance__section">
                  <h2 className="eu-compliance__section-title">
                    <FormattedMessage id="takProgram.overview.title" />
                  </h2>
                  <div className="eu-compliance__info-block">
                    <p>
                      <FormattedMessage id="takProgram.overview.description1" />
                    </p>
                    <p>
                      <FormattedMessage id="takProgram.overview.description2" />
                    </p>
                    <p>
                      <strong>
                        <FormattedMessage id="takProgram.officialWebsite.label" />
                        :
                      </strong>{' '}
                      <a
                        href="http://tak2023.info/about-us/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        http://tak2023.info/about-us/
                      </a>
                    </p>
                    <p>
                      <strong>LinkedIn:</strong>{' '}
                      <a
                        href="https://www.linkedin.com/company/tak2023/?viewAsMember=true"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        https://www.linkedin.com/company/tak2023/
                      </a>
                    </p>
                  </div>
                </section>

                {/* Program Goals */}
                <section className="eu-compliance__section">
                  <h3 className="eu-compliance__section-title">
                    🎯 <FormattedMessage id="takProgram.goals.title" />
                  </h3>
                  <ul className="eu-compliance__list">
                    <li>
                      <FormattedMessage id="takProgram.goals.goal1" />
                    </li>
                    <li>
                      <FormattedMessage id="takProgram.goals.goal2" />
                    </li>
                    <li>
                      <FormattedMessage id="takProgram.goals.goal3" />
                    </li>
                    <li>
                      <FormattedMessage id="takProgram.goals.goal4" />
                    </li>
                  </ul>
                </section>

                {/* 2023 Activities */}
                <section className="eu-compliance__section">
                  <h3 className="eu-compliance__section-title">
                    📚 <FormattedMessage id="takProgram.year2023.title" />
                  </h3>
                  <div className="eu-compliance__info-block">
                    <p>
                      <FormattedMessage id="takProgram.year2023.project" />
                    </p>

                    <h4 className="eu-compliance__section-subtitle">
                      <FormattedMessage id="takProgram.year2023.participation.title" />
                    </h4>
                    <p>
                      <FormattedMessage id="takProgram.year2023.participation.description" />
                    </p>

                    <ol className="eu-compliance__list eu-compliance__list--numbered">
                      <li>
                        <FormattedMessage id="takProgram.year2023.participants.person1" />
                      </li>
                      <li>
                        <FormattedMessage id="takProgram.year2023.participants.person2" />
                      </li>
                      <li>
                        <FormattedMessage id="takProgram.year2023.participants.person3" />
                      </li>
                      <li>
                        <FormattedMessage id="takProgram.year2023.participants.person4" />
                      </li>
                      <li>
                        <FormattedMessage id="takProgram.year2023.participants.person5" />
                      </li>
                    </ol>

                    <p>
                      🔹 <FormattedMessage id="takProgram.year2023.course" />
                    </p>

                    <p>
                      <FormattedMessage id="takProgram.year2023.november" />
                    </p>

                    <p>
                      <strong>
                        <FormattedMessage id="takProgram.year2023.newsLink.label" />
                        :
                      </strong>{' '}
                      <a
                        href="https://pef.mendelu.cz/en/fbe-mendelu-will-host-top-academics-and-students-from-ukraine-as-part-of-the-tak-project/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Mendel University
                      </a>
                    </p>

                    <p>
                      <strong>
                        <FormattedMessage id="takProgram.photos.label" />:
                      </strong>{' '}
                      <a
                        href="https://drive.google.com/drive/folders/1tGgtqkiQxt8CbiGPcdwI0oiwJcWnjIhU?usp=drive_link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FormattedMessage id="takProgram.photos.view" />
                      </a>
                    </p>
                  </div>
                </section>

                {/* 2024 Activities */}
                <section className="eu-compliance__section">
                  <h3 className="eu-compliance__section-title">
                    🌐 <FormattedMessage id="takProgram.year2024.title" />
                  </h3>
                  <div className="eu-compliance__info-block">
                    <p>
                      <FormattedMessage id="takProgram.year2024.project" />
                    </p>

                    <h4 className="eu-compliance__section-subtitle">
                      <FormattedMessage id="takProgram.year2024.internationalWeek.title" />
                    </h4>

                    <ol className="eu-compliance__list eu-compliance__list--numbered">
                      <li>
                        <FormattedMessage id="takProgram.year2024.participants.person1" />
                      </li>
                      <li>
                        <FormattedMessage id="takProgram.year2024.participants.person2" />
                      </li>
                      <li>
                        <FormattedMessage id="takProgram.year2024.participants.person3" />
                      </li>
                      <li>
                        <FormattedMessage id="takProgram.year2024.participants.person4" />
                      </li>
                      <li>
                        <FormattedMessage id="takProgram.year2024.participants.person5" />
                      </li>
                    </ol>

                    <p>
                      <strong>
                        <FormattedMessage id="takProgram.year2024.internationalWeek.link.label" />
                        :
                      </strong>{' '}
                      <a
                        href="https://international.mendelu.cz/en/cooperation/international-week/?psn=6638"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        International Week at Mendel University
                      </a>
                    </p>

                    <p>
                      <strong>
                        <FormattedMessage id="takProgram.photos.label" />:
                      </strong>{' '}
                      <a
                        href="https://drive.google.com/drive/folders/1S4P3YdUXynsCDhBDOMonbrulBEI_OJ8p?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FormattedMessage id="takProgram.photos.view" />
                      </a>
                    </p>

                    <h4 className="eu-compliance__section-subtitle">
                      <FormattedMessage id="takProgram.year2024.october.title" />
                    </h4>
                    <p>
                      <FormattedMessage id="takProgram.year2024.october.description" />
                    </p>

                    <p>
                      <strong>
                        <FormattedMessage id="takProgram.photos.label" />:
                      </strong>{' '}
                      <a
                        href="https://drive.google.com/drive/folders/1M4n0M5bG9VNCF9b3RaXliTNzPDcTqN8m?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FormattedMessage id="takProgram.photos.view" />
                      </a>
                    </p>
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>

        {/* Project - INORMS Partnership */}
        <div className="project-item">
          <div
            className={`project-header ${
              activeProject === 'INORMS' ? 'active' : ''
            }`}
            onClick={() => toggleProject('INORMS')}
          >
            <span className="project-arrow">
              {activeProject === 'INORMS' ? '🔽' : '▶️'}
            </span>
            <div className="project-info">
              <h2 className="project-title">
                <FormattedMessage id="INORMS.title" />
              </h2>
              <div className="project-subtitle">
                <FormattedMessage id="INORMS.subtitle" />
              </div>
              <div className="project-calls">
                <FormattedMessage id="INORMS.calls" />
              </div>
            </div>
          </div>

          {activeProject === 'INORMS' && (
            <div className="project-content-wrapper">
              <div className="project-content">
                <section className="eu-compliance__section">
                  <h2 className="eu-compliance__section-title">
                    <FormattedMessage id="INORMS.sectionTitle" />
                  </h2>

                  {/* Фото */}
                  {/* <div className="eu-compliance__images">
                    <img
                      src="./img/banner2.png"
                      alt="INORMS Partnership 1"
                      className="eu-compliance__image"
                    />
                    <img
                      src="/images/inorms2.jpg"
                      alt="INORMS Partnership 2"
                      className="eu-compliance__image"
                    />
                  </div> */}

                  {/* Текст */}
                  <div className="eu-compliance__info-block">
                    <p>
                      <FormattedMessage id="INORMS.part1" />
                    </p>
                    <p>
                      <FormattedMessage id="INORMS.part2" />
                    </p>
                    <p>
                      <FormattedMessage id="INORMS.part3" />
                    </p>
                    <p>
                      <FormattedMessage id="INORMS.part4" />
                    </p>
                    <p>
                      <FormattedMessage id="INORMS.part5" />
                    </p>
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>

        {/* Project - SUSTED */}
        <div className="project-item">
          <div
            className={`project-header ${
              activeProject === 'SUSTED' ? 'active' : ''
            }`}
            onClick={() => toggleProject('SUSTED')}
          >
            <span className="project-arrow">
              {activeProject === 'SUSTED' ? '🔽' : '▶️'}
            </span>
            <div className="project-info">
              <h2 className="project-title">
                <FormattedMessage id="SUSTED.title" />
              </h2>
              <div className="project-subtitle">
                <FormattedMessage id="SUSTED.subtitle" />
              </div>
              <div className="project-calls">
                <FormattedMessage id="SUSTED.calls" />
              </div>
            </div>
          </div>

          {activeProject === 'SUSTED' && (
            <div className="project-content-wrapper">
              <div className="project-content">
                <section className="eu-compliance__section">
                  <h2 className="eu-compliance__section-title">
                    <FormattedMessage id="SUSTED.sectionTitle" />
                  </h2>

                  {/* Фото */}
                  <div className="eu-compliance__images">
                    <img
                      src="./img/project/susted 1.jpg"
                      alt="SUSTED project 1"
                      className="eu-compliance__image"
                    />
                    <img
                      src="/img/project/susted 2.jpg"
                      alt="SUSTED project 2"
                      className="eu-compliance__image"
                    />
                  </div>

                  {/* Обновленный текст */}
                  <div className="eu-compliance__info-block">
                    <p>
                      <FormattedMessage id="SUSTED.projectDescription" />
                    </p>

                    <p>
                      <strong>
                        <FormattedMessage id="SUSTED.coordinatorTitle" />
                      </strong>
                      <br />
                      <FormattedMessage id="SUSTED.coordinator" />
                    </p>

                    <p>
                      <strong>
                        <FormattedMessage id="SUSTED.partnersTitle" />
                      </strong>
                      <br />
                      • <FormattedMessage id="SUSTED.partner1" />
                      <br />
                      • <FormattedMessage id="SUSTED.partner2" />
                      <br />
                      • <FormattedMessage id="SUSTED.partner3" />
                      <br />
                      • <FormattedMessage id="SUSTED.partner4" />
                      <br />
                      • <FormattedMessage id="SUSTED.partner5" />
                      <br />
                      • <FormattedMessage id="SUSTED.partner6" />
                      <br />
                      • <FormattedMessage id="SUSTED.partner7" />
                      <br />
                      • <FormattedMessage id="SUSTED.partner8" />
                    </p>

                    <p>
                      <strong>
                        <FormattedMessage id="SUSTED.associatedPartnerTitle" />
                      </strong>
                      <br />
                      <FormattedMessage id="SUSTED.associatedPartner" />
                    </p>

                    <p>
                      <FormattedMessage id="SUSTED.projectGoal" />
                    </p>

                    <p>
                      <strong>
                        <FormattedMessage id="SUSTED.tasksTitle" />
                      </strong>
                    </p>
                    <ol className="eu-compliance__list eu-compliance__list--numbered">
                      <li>
                        <FormattedMessage id="SUSTED.task1" />
                      </li>
                      <li>
                        <FormattedMessage id="SUSTED.task2" />
                      </li>
                      <li>
                        <FormattedMessage id="SUSTED.task3" />
                      </li>
                      <li>
                        <FormattedMessage id="SUSTED.task4" />
                      </li>
                    </ol>
                  </div>
                </section>
              </div>
            </div>
          )}
        </div>

        {/* Project 3 - Placeholder
        <div className="project-item">
          <div
            className={`project-header ${
              activeProject === 'project3' ? 'active' : ''
            }`}
            onClick={() => toggleProject('project3')}
          >
            <span className="project-arrow">
              {activeProject === 'project3' ? '🔽' : '▶️'}
            </span>
            <div className="project-info">
              <h2 className="project-title">Project3</h2>
              <div className="project-subtitle">
                Короткий опис третього проекту
              </div>
              <div className="project-calls">
                Інформація про фінансування та терміни проекту
              </div>
            </div>
          </div>

          {activeProject === 'project3' && (
            <div className="project-content-wrapper">
              <div className="project-content">
                <section className="eu-compliance__section">
                  <h2 className="eu-compliance__section-title">
                    Інформація про Project3
                  </h2>
                  <div className="eu-compliance__info-block">
                    <p>
                      <strong>Номер проекту:</strong> 987654321
                    </p>
                    <p>
                      <strong>Тип проекту:</strong> Освітній проект
                    </p>
                    <p>
                      <strong>Тривалість:</strong> 36 місяців
                    </p>
                    <p>Тут буде детальна інформація про третій проект...</p>
                  </div>
                </section>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </div>
  )
}

export default Projects
