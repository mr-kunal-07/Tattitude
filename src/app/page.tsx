import Artists from '@/components/artists'
import Footer from '@/components/footer'
import Hero from '@/components/Hero'
import WhyChooseUs from '@/components/LeadershipCarousel'
import ProcessSteps from '@/components/process-step'
import TattooDesigns from '@/components/products'
import StyleQuiz from '@/components/style-quiz'
import Testimonials from '@/components/testimonials'
import TrustBadges from '@/components/trust-badges'
import React from 'react'

type Props = {}

const home = (props: Props) => {
  return (
    <div className='bg-white overflow-hidden'>
      <Hero />
      <TattooDesigns />
      <Artists />
      <WhyChooseUs />
      <Testimonials />
      <ProcessSteps />
      <TrustBadges />
      <StyleQuiz />
      <Footer />
    </div>
  )
}

export default home