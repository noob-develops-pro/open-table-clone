import Header from '../components/Header'
import NavBar from '../components/NavBar'
import RestaurantCard from './components/RestaurantCard'
import SearchSidebar from './components/SearchSidebar'

const Page = () => {
  return (
    <>
      <Header />
      <div className='flex py-4 m-auto w-2/3 justify-between items-start'>
        <SearchSidebar />
        <RestaurantCard />
      </div>
    </>
  )
}

export default Page
