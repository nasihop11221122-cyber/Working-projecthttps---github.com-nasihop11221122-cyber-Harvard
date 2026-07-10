import React from 'react'
import LayoutStart from '../components/sections/ProjectLayout/LayoutStart'
import LayoutDetails from '../components/sections/ProjectLayout/LayoutDetails'
import LayoutCarousal from '../components/sections/ProjectLayout/LayoutCarousal'

const ProjectLayout = () => {
  return (

    <main>
      <LayoutStart />
      <LayoutDetails />
      <LayoutCarousal/>
    </main>

  )
}

export default ProjectLayout
