import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import './index.css'


const App = () => {
  return (
    <main className='w-screen h-screen flex flex-col'>
      <Header />
      <Body />
      <Footer />
    </main>
  )
}

export default App
