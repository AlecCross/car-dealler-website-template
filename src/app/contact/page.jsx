import React from 'react'
import styles from './Contact.module.css'
// import GrowYourBusiness from '@/components/GrowYourBusiness/GrowYourBusiness'
import Logos from '@/components/Logos/Logos'
import Section5 from '@/components/Section5/Section5'
import OfficesAddresses from '@/components/OfficesAddresses/OfficesAddresses'

export default function Cotacts() {
  return (
    <div>
      <div className={styles.container}>
        <di className={styles.contact}>Cotacts</di>
        <p className={styles.text}>
          We value diversity, sustainability and cultural transformation and will continue to work with various collaborators who share the same values.
        </p>
      </div>
      <Logos/>
      <Section5/>
      <Logos/>
      <OfficesAddresses/>
    </div>
  )
}
