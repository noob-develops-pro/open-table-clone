import Header from './components/Header'
import NavBar from './components/NavBar'
import RestaurantCard from './components/RestaurantCard'

export default function Home() {
  return (
    <>
      <main>
        <Header />
        <div className='py-3 px-36 mt-10 flex flex-wrap justify-center'>
          <RestaurantCard />
        </div>
      </main>
    </>
  )
}

// DB@p@ss@143