import React from 'react'
import Title from './components/title/Title'
import Anime from './components/animation/Anime'
import Phones from './components/phones/Phones'
import { Box } from '@mui/system'
import AccordionUsage from './components/accordion/Accordion'
import NestedGrid from "./components/photoes/photo"
export default function page() {
  return (
    <Box>
      <Title/>
      <Anime/>
      <Phones/>
      <AccordionUsage/>
      <NestedGrid/>
    </Box>
  )
}
