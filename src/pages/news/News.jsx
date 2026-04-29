import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FormattedMessage, useIntl } from 'react-intl'
import './News.scss'

const initialNews = [
  {
    id: 20,
    title:
      'EUComplianceM4UA: третя транскордонна зустріч підтвердила практичну цінність проєкту для українських університетів',
    date: '17-19 березня 2026 року',
    imageUrlUk: '/img/photo_news/news20.png',
    imageUrlEn: '/img/photo_news/news20.png',
  },
  {
    id: 19,
    title:
      'ПНРМ провели перший тренінг для менеджерів науки України: від мрії до плану',
    date: '4–5 грудня 2025 року',
    imageUrlUk: '/img/photo_news/news19.png',
    imageUrlEn: '/img/photo_news/news19.png',
  },
  {
    id: 18,
    title:
      'PNRM Ukraine запрошує на ІІІ щорічну зустріч членів та партнерів мережі',
    date: '4–5 грудня 2025 року',
    imageUrlUk: '/img/photo_news/news18_ua.png',
    imageUrlEn: '/img/photo_news/news18_en.png',
  },
  {
    id: 17,
    title: 'Запрошуємо до участі в міжнародному дослідженні RAAAP-4',
    date: 'жовтень 2025',
    imageUrlUk: '/img/photo_news/news17_ua.png',
    imageUrlEn: '/img/photo_news/news17_en.png',
  },
  {
    id: 16,
    title: 'Представники ПНРМ на 35-й щорічній конференції EAIE у Готенбурзі',
    date: '9–12 вересня 2025',
    imageUrlUk: '/img/photo_news/news16.png',
    imageUrlEn: '/img/photo_news/news16.png',
  },
  {
    id: 15,
    title:
      'ВІДКРИТО РЕЄСТРАЦІЮ НА ПРОГРАМУ MINT-UKRAINE: MICRO-CREDENTIALS AS AN INTERNATIONALISATION TOOL FOR UKRAINIAN UNIVERSITIES',
    date: '11 вересня 2025',
    imageUrlUk: '/img/photo_news/news15.png',
    imageUrlEn: '/img/photo_news/news15.png',
  },
  {
    id: 14,
    title:
      'Участь PNRM Ukraine у першому kick-off TPM проєкту #EUComplianceM4UA',
    date: '20-21 січня 2025',
    imageUrlUk: '/img/photo_news/news14.png',
    imageUrlEn: '/img/photo_news/news14.png',
  },
  {
    id: 13,
    title:
      'ВЗАЄМОДІЯ, ІННОВАЦІЇ ТА ЛІДЕРСТВО: ЩОРІЧНА ЗУСТРІЧ ПРОФЕСІЙНОЇ МЕРЕЖІ МЕНЕДЖЕРІВ НАУКИ ТА ОСВІТИ УКРАЇНИ',
    date: '21-22 жовтня 2024',
    imageUrlUk: '/img/photo_news/news13.png',
    imageUrlEn: '/img/photo_news/news13.png',
  },
  {
    id: 12,
    title:
      'PNRM Ukraine та німецька мережа наукового менеджменту (Netzwerk Wissenschaftsmanagement) обмінялися досвідом ',
    date: '14 травня 2024',
    imageUrlUk: '/img/photo_news/news12.png',
    imageUrlEn: '/img/photo_news/news12.png',
  },
  {
    id: 1,
    title: 'PNRM-вці взяли участь у 3-му проєктному семінарі',
    date: '2 червня 2023',
    imageUrlUk: '/img/photo_news/новина 1.png',
    imageUrlEn: '/img/photo_news/новина 1.png',
  },
  {
    id: 2,
    title: 'PNRM почала формуватися за напрямками',
    date: '23 грудня 2022',
    imageUrlUk: '/img/photo_news/новина 2.png',
    imageUrlEn: '/img/photo_news/новина 2.png',
  },
  {
    id: 3,
    title: 'Мережа тепер має PNRM-канал',
    date: '16 грудня 2022',
    imageUrlUk: '/img/photo_news/новина 3.png',
    imageUrlEn: '/img/photo_news/новина 3.png',
  },
  {
    id: 4,
    title: 'PNRM пропонує ознайомитися зі звітом опитування',
    date: '3 грудня 2022',
    imageUrlUk: '/img/photo_news/новина 4.png',
    imageUrlEn: '/img/photo_news/новина 4.png',
  },
  {
    id: 5,
    title: 'Від масованих ракетних ударів рф постраждали офіси PNRM',
    date: '11 жовтня 2022',
    imageUrlUk: '/img/photo_news/новина 5.png',
    imageUrlEn: '/img/photo_news/новина 5.png',
  },
]

function News() {
  const intl = useIntl()
  const [showAllNews, setShowAllNews] = useState(false)

  const additionalNews = [
    {
      id: 6,
      title: 'Відбулась перша сесія Віртуальної академії управління наукою',
      date: '28 вересня 2022',
      imageUrlUk: '/img/photo_news/новина 6.png',
      imageUrlEn: '/img/photo_news/новина 6.png',
    },
    {
      id: 7,
      title:
        'PNRM взяла участь у 32-й щорічній конферен-ції Європейської асоціації міжнародної освіти',
      date: '16 вересня 2022',
      imageUrlUk: '/img/photo_news/новина 7.png',
      imageUrlEn: '/img/photo_news/новина 7.png',
    },
    {
      id: 8,
      title: 'Як освітяни захищають освітній фронт під час війни?',
      date: '26 червня 2022',
      imageUrlUk: '/img/photo_news/новина 8.png',
      imageUrlEn: '/img/photo_news/новина 8.png',
    },
    {
      id: 9,
      title: 'PNRM провели спільне засідання з німецькими колегами',
      date: '24 червня 2022',
      imageUrlUk: '/img/photo_news/новина 9.png',
      imageUrlEn: '/img/photo_news/новина 9.png',
    },
    {
      id: 10,
      title: 'PNRM офіційно зареєстрована в Єдиному державному реєстрі',
      date: '15 червня 2022',
      imageUrlUk: '/img/photo_news/новина 10.png',
      imageUrlEn: '/img/photo_news/новина 10.png',
    },
    {
      id: 11,
      title: 'Відбулись установчі збори засновників PNRM',
      date: '1 червня 2022',
      imageUrlUk: '/img/photo_news/новина 11.png',
      imageUrlEn: '/img/photo_news/новина 11.png',
    },
  ]

  const newsToShow = showAllNews
    ? [...initialNews, ...additionalNews]
    : initialNews

  const handleReadMore = () => {
    setShowAllNews(true)
  }

  return (
    <div className="container">
      <div className="news">
        <div className="news__grid">
          {newsToShow.map((news) => {
            // Вибір картинки залежно від мови
            const imageUrl =
              intl.locale === 'uk' ? news.imageUrlUk : news.imageUrlEn

            return (
              <div className="news__card" key={news.id}>
                <Link to={`/news/${news.id}`} className="news__link">
                  <img
                    src={imageUrl}
                    alt={intl.formatMessage({ id: `news.item${news.id}` })}
                    className="news__card-image"
                  />
                  <div className="news__info">
                    <h3>
                      <FormattedMessage id={`news.item${news.id}`} />
                    </h3>
                    <p>
                      <FormattedMessage id={`news.date${news.id}`} />
                    </p>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>

        {!showAllNews && (
          <button className="read-more-button" onClick={handleReadMore}>
            <FormattedMessage id="news.readMore" />
          </button>
        )}

        <div className="news__form">
          <p>
            <FormattedMessage
              id="news.linkText"
              values={{
                formLink: (
                  <a
                    href="https://forms.gle/zdM6ZSNsT48XuGVi9"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FormattedMessage id="news.formLink" />
                  </a>
                ),
              }}
            />
          </p>
        </div>
      </div>
    </div>
  )
}

export default News
