import NavBar from '@/app/components/NavBar'
import Header from './components/Header'
import MakeReservation from './components/MakeReservation'
import RestaurantNavBar from './components/RestaurantNavBar'
import ReviewCard from './components/ReviewCard'
import RestaurantCard from './components/RestaurantCard'

export default function RestaurantDetails() {
  return (
    <>
      <div className='bg-white w-[70%] rounded p-3 shadow'>
        <RestaurantNavBar />
        <RestaurantCard />
        <ReviewCard />
      </div>
      <MakeReservation />
    </>
  )
}
