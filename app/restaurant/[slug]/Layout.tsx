import Header from '@/app/components/Header'

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <div className='flex m-auto w-2/3 justify-between items-start 0 -mt-11'>
        {children}
      </div>
    </main>
  )
}

export default Layout
