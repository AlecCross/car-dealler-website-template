import Section1About from '@/components/AboutUS/Section1/Section1-About'
import Section2 from '@/components/AboutUS/Section2/Section2'
import Section3About from '@/components/AboutUS/Section3/Section3About'
import Section4About from '@/components/AboutUS/Section4/Section4About'
import Section5About from '@/components/AboutUS/Section5/Section5About'
import Logos from '@/components/Logos/Logos'
import React from 'react'

export default function About() {
  return (
    <div>
      <Section1About />
      <Section2 />
      <Logos />
      <Section3About />
      <Logos />
      <Section4About />
      <Section5About />
    </div>
  )
}
