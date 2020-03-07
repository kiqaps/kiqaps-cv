import React from 'react'
import strings from '../../strings'

export const SkillsSection = ({ lang }) => {
  return (
    <div className="container">
      <hr/>
      <h4><strong>{strings[lang.currentLang]["skillsTitle"]}</strong></h4>
      <ul className="list-group my-list-group">
        {
          strings[lang.currentLang]["skillsItems"]
            .map((item, idx) => <li key={idx} className="list-group-item">{item}</li>)
        }
      </ul>
    </div>
  )
}