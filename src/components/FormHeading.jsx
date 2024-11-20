import React from 'react'

const FormHeading = ({content}) => {
  return (
    <h2 className={`text-2xl font-bold font-montserrat text-white text-center mb-8 ${content}`}>
    {content}
  </h2>
  )
}

export default FormHeading
