import Header from './components/Header.tsx'
import WelcomeBanner from './components/WelcomeBanner.tsx'
import PostCard from './components/PostCard.tsx'
import Footer from './components/Footer.tsx'

function App() {
  return (
    <>
      <Header />
      <main>
        <WelcomeBanner />
        <PostCard />
      </main>
      <Footer />
    </>
  )
}

export default App
