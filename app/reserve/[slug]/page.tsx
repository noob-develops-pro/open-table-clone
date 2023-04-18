import NavBar from '@/app/components/NavBar'
import Header from './components/Header'
import ReserveForm from './components/ReserveForm'

const Reserve = () => {
  return (
    <>
      <div className='border-t h-screen'>
        <div className='py-9 w-2/5 m-auto'>
          <Header />
          <ReserveForm />
        </div>
      </div>
    </>
  )
}

export default Reserve
