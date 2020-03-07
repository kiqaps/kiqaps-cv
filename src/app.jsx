import React, { useState } from 'react'
import { Header } from './components/Header'
import { WorkExperienceSection } from './components/WorkExperienceSection'
import { EducationSection } from './components/EducationSection'
import { SkillsSection } from './components/SkillsSection'

export const App = () => {
  const [ currentLang, setCurrentLang ] = useState("pt-BR")
  const lang = {currentLang, setCurrentLang}

  return (
    <>
      <Header lang={lang} />
      <WorkExperienceSection lang={lang} />
      <EducationSection lang={lang} />
      <SkillsSection lang={lang} />
    </>
  )
}
