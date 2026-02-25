import { Navbar } from './sections/navbar'
import { Hero } from './sections/hero'
import { Categories } from './sections/categories'
import { FeaturedFreelancers } from './sections/featuredfreelancers'
import { RecentJobs } from './sections/recentjobs'
import { HowItWorks } from './sections/howitworks'
import { Testimonials } from './sections/testimonials'
import { Cta } from './sections/cta'
import { Footer } from './sections/footer'

export const App = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Categories />
        <FeaturedFreelancers />
        <RecentJobs />
        <HowItWorks />
        <Testimonials />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
