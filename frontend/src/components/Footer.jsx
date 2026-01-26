import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <>
     <footer className='bg-acent text-primary py-8'>
        <div className='container max-w-7xl mx-auto px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center gap-8'>
                {/* about section */}
                <div>
                    <h3 className='text-lg font-semibold mb-4'>About Us</h3>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis expedita dolores obcaecati asperiores fuga doloribus quibusdam consequatur aliquam, laudantium laboriosam.
                    </p>
                    <div className='mt-5'>
                        <p className='text-base'><strong>Email:</strong>shakilmahmud007@gmail.com</p>
                        <p className='text-base'><strong>Phone:</strong>01622869998</p>
                    </div>
                </div>

                {/* Quick links */}
                <div className='md:pl-16'>
                    <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
                    <ul className='space-y-2'>
                        <li>
                            <Link to='/' className='hover:text-secondary'>Home</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-secondary'>About</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-secondary'>Blogs</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-secondary'>Archived</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-secondary'>Author</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-secondary'>Contect</Link>
                        </li>
                    </ul>
                </div>

                {/* Category */}
                <div className='md:pl-16'>
                    <h3 className='text-lg font-semibold mb-4'>Category</h3>
                    <ul className='space-y-2'>
                        <li>
                            <Link to='/' className='hover:text-secondary'>Lifedtyle</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-secondary'>Technology</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-secondary'>Travel</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-secondary'>Business</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-secondary'>Economy</Link>
                        </li>
                        <li>
                            <Link to='/' className='hover:text-secondary'>Sports</Link>
                        </li>
                    </ul>
                </div>

                {/* NewsLetter */}
                <div className='bg-white hidden sm:block'>
                    <div className='px-6 py-6 text-center'>
                        <h3 className='text-lg font-semibold mb-4'>Weekly Newsletter</h3>
                        <p className='text-gray-500 text-sm mb-2'>Get blog articles and offers via email</p>
                        <form className=' space-y-2'>
                            <input type="email" placeholder='Your email' className='bg-gray-100 text-black rounded-lg py-2 px-4 w-full focus:outline-none' />
                            <button type='submit' className='bg-secondary text-white rounded-lg py-2 px-4 w-full'>Subscrib</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    
     </footer>
    </>
  )
}

export default Footer