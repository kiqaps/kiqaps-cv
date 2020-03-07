import React from 'react'
import strings from '../../strings'
import { EducationSectionItem } from './EducationSectionItem'

export const EducationSection = ({ lang }) => {
  return (
    <div className="container">
      <hr/>
      <h4><strong>{strings[lang.currentLang]["educationTitle"]}</strong></h4>
      <ul className="list-group my-list-group">
        {
          strings[lang.currentLang]["educationItems"]
            .map((item, idx) => <EducationSectionItem key={idx} item={item} />)
        }
      </ul>
    </div>
  )
}