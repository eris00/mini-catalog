import Footer from "../components/Footer"
import Header from "../components/Header"

const Layout = ({children}) => {
  return (
    <div className="flex flex-col gap-12 min-h-screen w-full">
      <div className="w-full">
        <Header />
      </div>
      <main className="flex-1 w-full">
        {children}
      </main>
      <div className="w-full">
        <Footer />
      </div>
    </div>
  )
}

export default Layout