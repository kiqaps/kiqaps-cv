import React from 'react'
import strings from '../../strings'
import { WorkExperienceItem } from './WorkExperienceItem'

export const WorkExperienceSection = ({ lang }) => {
  return (
    <div className="container">
      <hr/>
      <h4><strong>{strings[lang.currentLang]["workExperienceTitle"]}</strong></h4>
      <ul className="list-group my-list-group">
        {
          strings[lang.currentLang]["workExperienceItems"]
            .map((item, idx) => <WorkExperienceItem key={idx} item={item} />)
        }
      </ul>
    </div>
  )
}