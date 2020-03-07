import React from 'react'

export const EducationSectionItem = ({ item }) => (
  <li className="list-group-item">
    <div className="row">
      <div className="col-12 col-md-4"><strong>{item["role"]}</strong></div>
      <div className="col-12 col-md-8 text-md-right where-when">{item["whereAndWhen"]}</div>
    </div>
    <div className="row">
      <div className="col text-indent mt-1">{item["description"]}</div>
    </div>
  </li>
)