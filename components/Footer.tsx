import { FC } from 'react'

interface FooterProps {

}

const Footer: FC<FooterProps> = ({ }) => {
  return <div className="bg-white border-t">
    <div className="mx-auto py-10">
      <p className='text-xs text-black text-center'>
        &copy; {new Date().getFullYear()} FakeStoreName. All rights reserved.
      </p>
    </div>
  </div>
}

export default Footer