import React from 'react'
import { useTranslation } from 'react-i18next';

const Home = () => {

  const [t, i18n] = useTranslation("global");

  return (
    <div>{t("home.main-title")}</div>
  )
}

export default Home;