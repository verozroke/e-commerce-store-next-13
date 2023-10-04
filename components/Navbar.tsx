import { FC } from 'react'
import Container from './ui/container'
import Link from 'next/link'
import MainNav from './MainNav'
import { getCategories } from '@/actions/get-categories'
import NavbarActions from './NavbarActions'

interface NavbarProps {

}


const Navbar: FC<NavbarProps> = async ({ }) => {

  const categories = await getCategories()


  return <div className="border-b">
    <Container>
      <div className='relative px-4 sm:px-6 lg:px-8 flex h-16 items-center'>
        <Link href='/' className='ml-4 flex gap-x-2 lg:ml-0'>
          <p className='font-bold text-xl'>STORE</p>
        </Link>
        <MainNav data={categories} />
        <NavbarActions />
      </div>
    </Container>
  </div>
}

export default Navbar