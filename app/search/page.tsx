import Link from 'next/link'
import Header from '../components/Header'
import NavBar from '../components/NavBar'
import RestaurantCard from './components/RestaurantCard'
import SearchSidebar from './components/SearchSidebar'

const Page = () => {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <NavBar />
        <Header />
        <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
          <SearchSidebar />
          <RestaurantCard />
        </div>
      </main>
    </main>
  )
}

export default Page
