import Footer from "@/components/Footer"
import GetApp from "@/components/GetApp"
import Header from "@/components/Header"
import Hero from "@/components/Hero"
import ResponsiveNav from "@/components/Navbar/ResponsiveNav"

const HomePage = () => {
  return (
    <div>
      {/* <ResponsiveNav /> */}
      <Header />
      <Hero />
      <GetApp />
      <Footer />
    </div>
  )
}

export default HomePage