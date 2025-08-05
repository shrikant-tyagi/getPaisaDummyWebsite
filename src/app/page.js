"use client"

import Image from "next/image";
import Navbar from "./homepage/navbar/navbar";
import i1 from '../public/i1.png';
import i2 from '../public/i2.png';
import i3 from '../public/i3.png';
import Link from "next/link";
import Slider from "./homepage/slider/slider";

export default function Home() {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='flex items-center justify-center width-[100%] height-[100%]' style={{padding:20}}>
        <div className="flex-1/2 flex flex-col gap-2" style={{paddingInline:20}}>
          <div className="font-bold text-4xl">Unleashing the Power of Your Financial Future</div>
          <Slider className=''/>
          <div>
            Fast Processing | Zero PaperWork | Minimum Interest
          </div>
          <div>
            Discover a new way to manage your finances with ease and confidence. 
            At GetPaisa, we believe that everyone deserves brighter financial future.
            Whether you&apos;re looking for a personal loan, managing your budget, 
            we&apos;re here to help you every step of the way.
          </div>
          <div>
            Attractive Interest Rates Starting From 18% <sup className="text-red-600">*</sup>
          </div>
          <div className="w-full h-[0.5px] bg-black" style={{marginBlock:20}}></div>

          <Link href='/login'><button className='bg-[#1D2E6A] text-white rounded-[5px] cursor-pointer' style={{padding:10}}>Login</button></Link>
        </div>
        <div className="flex-1/2 flex items-center flex-col gap-10 height-[calc(100vh-20px)]" style={{paddingBlock:100}}>
            <Image alt="" src={i1} width={450} height={400} className="rounded-[10px]"/>
            <div className="flex gap-12">
              <Image alt="" src={i2} height={200} width={200} className="rounded-[10px]"/>
              <Image alt="" src={i3} height={200} width={200} className="rounded-[10px]"/>
            </div>
        </div>
      </div>
    </div>
  );
}
