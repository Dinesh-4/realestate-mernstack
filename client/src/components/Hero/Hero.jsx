import React from 'react';
import './Hero.css';
import CountUp from "react-countup";
import {motion} from 'framer-motion'
import SearchBar from '../SearchBar/SearchBar';
const Hero = () => {
  return (
    <div>
      <section className="hero-wrapper">
        <div className="paddings innerWidth flexCenter hero-container ">
            {/* left side */}
            <div className="flexColStart hero-left">
                <div className="hero-tittle">
                    <div className="orange-circle" />


                    <motion.h1
                    initial={{y: "2rem", opacity: 0}}
                    animate={{y: 0, opacity: 1}}
                    transition={{
                        duration: 2,
                        type: "spring"
                    }}
                    >Discover <br /> Most Suitable  <br /> Property</motion.h1>
                </div>
                <div className="flexColStart hero-des">
                    <span className='secondaryText'>Find a variety of properties that suit you very easlity</span>
                    <span className='secondaryText'>Forget all difficulties in finding a residence for you</span>
                </div>

                <SearchBar />

                <div className="flexCenter stats">
                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start ={8800} end={90000} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Premimum Products</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp start ={1950} end={2000} duration={4} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Happy Customers</span>
                    </div>

                    <div className="flexColCenter stat">
                        <span>
                            <CountUp end={28} />
                            <span>+</span>
                        </span>
                        <span className='secondaryText'>Award Winnings</span>
                    </div>
                </div>
            </div>
            {/* right side */}
            <div className="flexCenter hero-right">
                <motion.div
                initial = {{x: "7rem", opacity: 0}}
                animate = {{x: 0, opacity: 1}}
                transition={{
                    duration: 2,
                    type: "spring",
                }}
                className="image-container">
                    <img src="./hero-image.png" alt="hero image" />
                </motion.div>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Hero
