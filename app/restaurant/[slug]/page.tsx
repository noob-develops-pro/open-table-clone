import NavBar from '@/app/components/NavBar'
import Link from 'next/link'
import CardImages from './components/CardImages'
import Description from './components/Description'
import Header from './components/Header'
import MakeReservation from './components/MakeReservation'
import RestaurantNavBar from './components/RestaurantNavBar'
import Rating from './components/Rating'
import ReviewCard from './components/ReviewCard'
import Title from './components/Title'

export default function RestaurantDetails() {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <NavBar />
        <Header />
        <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
          <div className='bg-white w-[70%] rounded p-3 shadow'>
            <RestaurantNavBar />
            <Title />
            <Rating />
            <Description />
            <CardImages />
            <div>
              <h1 className='font-bold text-3xl mt-10 mb-7 borber-b pb-5'>
                What 100 people are saying
              </h1>
              <div>
                <ReviewCard />
              </div>
            </div>
          </div>
          <MakeReservation />
        </div>
      </main>
    </main>
  )
}
