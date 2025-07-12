import BreadcrumbSection from '@/components/BreadcrumbSection'
import React from 'react'
import Section1 from './Sections/Section1/Section1'
import Section2 from './Sections/Section2/Section2'

const page = () => {
  return (
    <>
      <BreadcrumbSection />
      <Section1 />
      <Section2 />
    </>
  )
}

export default page