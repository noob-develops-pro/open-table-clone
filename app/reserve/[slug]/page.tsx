import NavBar from '@/app/components/NavBar'
import Header from './components/Header'
import ReserveForm from './components/ReserveForm'

const Reserve = () => {
  return (
    <main className='bg-gray-100 min-h-screen w-screen'>
      <main className='max-w-screen-2xl m-auto bg-white'>
        <NavBar />
        <div className='border-t h-screen'>
          <div className='py-9 w-2/5 m-auto'>
            <Header />
            <ReserveForm />
          </div>
        </div>
      </main>
    </main>
  )
}

export default Reserve
