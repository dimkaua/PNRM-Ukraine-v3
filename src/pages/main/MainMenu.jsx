import React from 'react'
import { FormattedMessage } from 'react-intl'
import { FileText } from 'lucide-react'
import SliderGallery from '../../components/slider/SliderGallery'
import './MainMenu.scss'

const MainMenu = () => {
  const handleBrandbookDownload = () => {
    // PDF
    console.log('Відкрити брендбук PDF')
    window.open('./img/pnrm_book.pdf', '_blank')
  }

  return (
    <div className="main-menu">
      <div className="main-menu__container">
        {/* 1. Баннер */}
        <section className="main-menu__banner">
          <div className="banner__image-container">
            <img
              src="./img/banner2.png"
              alt="PNRM Ukraine Banner"
              className="banner__image"
            />
          </div>
        </section>

        {/* 2. Основний текст */}
        <section className="main-menu__content">
          <div className="content__wrapper">
            <div className="content__card">
              <h1 className="content__title">
                <FormattedMessage id="welcome.title" />
              </h1>

              <div className="content__text">
                <p className="content__description--main">
                  <FormattedMessage id="welcome.description1" />
                </p>
                <p className="content__description">
                  <FormattedMessage id="welcome.description2" />
                </p>
                <p className="content__description">
                  <FormattedMessage id="welcome.description3" />
                </p>
                <p className="content__description">
                  <FormattedMessage id="welcome.description4" />
                </p>
                <p className="content__secretariat">
                  <FormattedMessage id="welcome.secretariat" />
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Секція брендбуку */}
        <section className="main-menu__brandbook">
          <div className="brandbook__wrapper">
            <div className="brandbook__card">
              <div className="brandbook__icon">
                <FileText className="brandbook__icon-svg" />
              </div>

              <h2 className="brandbook__title">
                <FormattedMessage id="brandbook.title" />
              </h2>

              <p className="brandbook__description">
                <FormattedMessage id="brandbook.description" />
              </p>

              <button
                onClick={handleBrandbookDownload}
                className="brandbook__button"
              >
                <FileText className="brandbook__button-icon" />
                <FormattedMessage id="brandbook.button" />
              </button>
            </div>
          </div>
        </section>

        {/* 4. Слайдер галереї */}
        <section className="main-menu__gallery">
          <div className="gallery__wrapper">
            <h2 className="gallery__title">
              <FormattedMessage
                id="gallery.title"
                defaultMessage="Фотогалерея"
              />
            </h2>

            <SliderGallery />
          </div>
        </section>

        {/* Декоративний елемент */}
        <div className="main-menu__divider">
          <div className="divider__line"></div>
        </div>
      </div>
    </div>
  )
}

export default MainMenu
