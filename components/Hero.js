import Router from 'next/router'
import Link from 'next/link'
import React from 'react'
import Market from '../pages/Market'

const style = {
    wrapper: `relative`,
    container: `before:content-[''] before:bg-red-500 before:absolute before:top-0 before:left-0 before:right-0 before:bottom-0 before:bg-[url('https://www.linkpicture.com/q/Food-Tank-SRI-Rice-1.png')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    copyContainer: `w-1/2`,
    title: `relative text-white text-[46px] font-semibold`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    ctaContainer: `flex`,
    accentedButton: ` relative text-lg font-semibold px-12 py-4 bg-[orange] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
    cardContainer: `rounded-[3rem]`,
    infoContainer: `h-20 bg-[#313338] p-4 rounded-b-lg flex items-center text-white`,
    author: `flex flex-col justify-center ml-4`,
    name: ``,
    infoIcon: `flex justify-end items-center flex-1 text-[#8a939b] text-3xl font-bold`,
}

const Hero = () => {

    const MyButton = React.forwardRef(({ onClick, href }, ref) => {
        return (
            <a href={'D:/ETH/AgriCrop/components/ded.js'} onClick={onClick} ref={ref}>
              <div className={style.ctaContainer}>
                  <button className={style.accentedButton}>MARKETPLACE</button>
              </div>
            </a>
          )
    })

    return (
        <div className={style.wrapper}>
            <div className={style.container}>
                <div className={style.contentWrapper}>
                    <div className={style.copyContainer}>
                        <div className={style.title}>
                            Upcoming De-Fi for Farmers.
                        </div>
                        <div className={style.description}>
                            AgriCrop is a NFT marketplace for crops, agriculture tools.
                        </div>
                        <div className={style.ctaContainer}>
                            <Link href="/Market">
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                    <div className={style.cardContainer}>
                        <img
                            className="rounded-t-lg"
                            src="https://www.linkpicture.com/q/AgriCropLogoWithName.png"
                            alt=""
                        />

                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero