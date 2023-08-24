

import Image from 'next/image'
import MainBck from '../public/2.jpg'



export default function Home() {

  return (
    <div >
    
      <Image src={MainBck}  alt="main page background"   />
      {/* <div className='text-center bg-pmpblue text-5xl text-pmpyellow flex h-screen justify-center items-center'>PUBLIC TRANSPORT MANGEMENT SYSTEM</div> */}
    </div>
  )
  
}
// width={50} height={50}