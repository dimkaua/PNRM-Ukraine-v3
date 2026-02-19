import React, { useState } from 'react'
import { IntlProvider } from 'react-intl'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import ScrollToTopButton from './components/scroll/ScrollToTopButton'
import translationsEn from './locales/en.json'
import translationsUk from './locales/uk.json'

function App() {
  const [activeLanguage, setActiveLanguage] = useState('uk')

  const toggleLanguage = () => {
    const newLanguage = activeLanguage === 'uk' ? 'en' : 'uk'
    setActiveLanguage(newLanguage)
  }

  return (
    <IntlProvider
      locale={activeLanguage}
      messages={activeLanguage === 'en' ? translationsEn : translationsUk}
    >
      <Header
        activeLanguage={activeLanguage}
        toggleLanguage={toggleLanguage}
        messages={activeLanguage === 'en' ? translationsEn : translationsUk}
      />

      {/* Кнопка повернення наверх */}
      <ScrollToTopButton />

      <Footer activeLanguage={activeLanguage} />
    </IntlProvider>
  )
}

export default App
