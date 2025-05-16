import React from 'react'
import { Fragment } from 'react'
import Hero from './sections/Hero'
import FeaturesOverview from './sections/FeaturesOverview'
import DashboardShowcase from './sections/DashboardShowcase'
import UseCases from './sections/UseCases'
import UserProfileSection from './sections/UserProfileSection'
import Testimonials from './sections/Testimonials'
import PricingCTA from './sections/PricingCTA'
import Layout from '../components/Layout'

const Onboard = () => {
  return (
    <Fragment>
      <Layout>
        {/* Main Container */}
        <div className="bg-white dark:bg-gray-950 transition-colors duration-300">
          {/* Hero Section */}
          <section id="hero-section">
            <Hero />
          </section>
          
          {/* Features Overview Section */}
          <section id="features-section">
            <FeaturesOverview />
          </section>
          
          {/* Dashboard Showcase Section */}
          <section id="dashboard-section">
            <DashboardShowcase />
          </section>
          
          {/* Use Cases Section */}
          <section id="use-cases-section">
            <UseCases />
          </section>
          
          {/* User Profile and Admin Control Section */}
          <section id="user-profile-section">
            <UserProfileSection />
          </section>
          
          {/* Testimonials Section */}
          <section id="testimonials-section">
            <Testimonials />
          </section>
          
          {/* Pricing and CTA Section */}
          <section id="pricing-section">
            <PricingCTA />
          </section>
        </div>
      </Layout>
    </Fragment>
  )
}

export default Onboard