import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Instagram Stories</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/Instagram_icon.png" />
      </Head>
      
      <main >
      <div className='bg-yellow-100 flex px-8 mx-auto sm:max-w-4xl pt-5 pb-5 rounded-lg justify-center shadow-md shadow-slate-300'>
          <h2 className='sm:text-lg sm:leading-snug font-semibold tracking-wide uppercase text-pink-500 hover:text-pink-700'>Introducing...</h2>
          </div>
        <div className='max-w-2xl mx-auto p-8 '>
          
          <p className='text-4xl md:text-6xl leading-none font-extrabold text-gray-900 mb-5 mt-5 border-b text-center   '>Tailwind Stories</p>


          <ul className='flex space-x-6'>
            <li className='flex flex-col items-center space-y-1'>
              <div className='relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'>
              <a className='block p-1 bg-white rounded-full transform transition hover:rotate-6' target={'_blank'} href="http://catfoundation.org/">
                <img className='sm:w-24 sm:h-24 w-20 h-12 rounded-full' src="https://placekitten.com/200/200" alt="kitty" />
              </a>
              <button className='absolute bottom-0 right-1 bg-blue-500 h-6 w-6 sm:h-8 sm:w-8 rounded-full text-white text-2xl font-semibold border-4 border-white flex justify-center items-center font-mono hover:bg-blue-700'>+</button>
              </div>
              <a href="#">You</a>
            </li>

            <li className='flex flex-col items-center space-y-1 '>
              <div className='relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'>
              <a className='block p-1 bg-white rounded-full transform transition hover:rotate-6' target={'_blank'} href="http://catfoundation.org/">
                <img className='sm:w-24 sm:h-24 w-20 h-12 rounded-full' src="https://placekitten.com/200/201" alt="kitty" />
              </a>
              </div>
              <a href="#">Smo</a>
            </li>

            <li className='flex flex-col items-center space-y-1 '>
              <div className='relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'>
              <a className='block p-1 bg-white rounded-full transform transition hover:rotate-6' target={'_blank'} href="http://catfoundation.org/">
                <img className='sm:w-24 sm:h-24 w-20 h-12 rounded-full' src="https://placekitten.com/203/200" alt="kitty" />
              </a>
              </div>
              <a href="#">Kitty</a>
            </li>

            <li className='flex flex-col items-center space-y-1 '>
              <div className='relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'>
              <a className='block p-1 bg-white rounded-full transform transition hover:rotate-6' target={'_blank'} href="https://www.thefelinefoundation.com/">
                <img className='sm:w-24 sm:h-24 w-20 h-12 rounded-full' src="https://placekitten.com/200/209" alt="kitty" />
              </a>
              </div>
              <a href="#">Bean</a>
            </li>

            <li className='flex flex-col items-center space-y-1 '>
              <div className='relative bg-gradient-to-tr from-yellow-400 to-fuchsia-600 p-1 rounded-full'>
              <a className='block p-1 bg-white rounded-full transform transition hover:rotate-6' target={'_blank'} href="https://www.thefelinefoundation.com/">
                <img className='sm:w-24 sm:h-24 w-20 h-12 rounded-full' src="https://placekitten.com/202/200" alt="kitty" />
              </a>
              </div>
              <a href="#">Leo </a>
            </li>
          </ul>
        </div>
      </main>
      
    </>
  )
}



