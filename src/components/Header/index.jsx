import React from 'react'
import { Linkedin, GitHub } from 'react-feather'
import strings from '../../strings'

export const Header = ({ lang }) => {
  const changeLang = evt => lang.setCurrentLang(evt.currentTarget.dataset.lang)
  const genClass = (activateLang) => `btn btn-link${ lang.currentLang === activateLang ? ' disabled' : ''}`
  return (
    <div className="container">
      <div className="row">
        <div className="col d-flex justify-content-around justify-content-md-end">
          <button data-lang="pt-BR" onClick={changeLang} className={genClass('pt-BR')}>Português</button>
          <button data-lang="en" onClick={changeLang} className={genClass('en')}>English</button>
        </div>
      </div>

      <div className="row">
        <div className="col-12 text-center">
          <img src="https://avatars.githubusercontent.com/kiqaps" alt="Caíque Araújo Spósito" width="200" className="img-fluid rounded"/>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 col-md-8 d-flex justify-content-center justify-content-md-start text-center">
          <h1 className="mb-0">Caíque Araújo Spósito</h1>
        </div>
        <div className="col-12 col-md-4 d-flex align-items-center justify-content-center justify-content-md-end">
          <a className="mr-5 mr-md-3" href="https://github.com/kiqaps">
            <GitHub />
          </a>
          <a href="https://www.linkedin.com/in/ca%C3%ADque-ara%C3%BAjo-sp%C3%B3sito-16066a145/">
            <Linkedin />
          </a>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-8">
          <p className="text-center text-md-left mb-0 mb-md-3">{strings[lang.currentLang]["role"]}</p>
        </div>
        <div className="col-12 col-md-4">
          <p className="text-center text-md-right"><strong>E-mail:</strong> kiqaps[at]gmail[dot]com</p>
        </div>
      </div>
    </div>
  )
}