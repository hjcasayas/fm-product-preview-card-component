import Image from 'next/image';
import { Montserrat, Fraunces } from '@next/font/google';

import imageProductMobile from '../../public/image-product-mobile.jpg';
import imageProductDesktop from '../../public/image-product-desktop.jpg';
import iconCart from '../../public/icon-cart.svg';

const montserrat = Montserrat({ weight: ['500'], subsets: ['latin'] });
const fraunces = Fraunces({ weight: ['700'], subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <main className="w-screen h-screen bg-[#F2EAE2] flex flex-col justify-start items-center px-4 py-7 sm:justify-center">
        <div className="flex flex-col justify-start items-center max-w-[343px] bg-white sm:flex-row sm:max-w-[600px] sm:h-[450px] sm:items-stretch">
          <div className="sm:hidden">
            <Image src={imageProductMobile} alt="Product Image" />
          </div>
          <div className="hidden sm:block w-1/2">
            <Image src={imageProductDesktop} alt="Product Image" />
          </div>
          <div className="flex flex-col p-6 justify-start items-center sm:w-1/2 sm:p-">
            <span
              className={`font-bold text-xs tracking-widest self-start leading-3 ${montserrat.className} color-[#6C7289] mb-3`}
            >
              PERFUME
            </span>
            <h2
              className={`${fraunces.className} font-bold text-[32px] leading-8 mb-4 text-[#1C232B] block self-stretch sm:w-60 sm:self-start`}
            >
              Gabrielle Essence Eau De Parfum
            </h2>
            <span
              className={`${montserrat.className} font-medium leading-6 text-[#6C7289] mb-6`}
            >
              A floral, solar and voluptuous interpretation composed by Olivier
              Polge, Perfumer-Creator for the House of CHANEL.
            </span>
            <div className="self-start flex flex-row justify-start items-center mb-5">
              <span
                className={`${fraunces.className} font-bold text-[32px] leading-8 text-[#3D8168] inline-block mr-5`}
              >
                $149.99
              </span>
              <span
                className={`${montserrat.className} line-through font-medium text-[13px] leading-[23px] text-[#6C7289]`}
              >
                $169.99
              </span>
            </div>
            <button className="py-4 flex flex-row justify-center items-center bg-[#3D8168] hover:bg-[#1A4032] self-stretch rounded-lg">
              <Image
                src={iconCart}
                alt="Cart Icon"
                className="inline-block mr-3"
              />
              <span className="text-white">Add to Cart</span>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
