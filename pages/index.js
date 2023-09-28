// pages/index.js
import React, { useEffect } from 'react';
import AboutFluxus from './components/AboutFluxus';
import WhyCa from './components/WhyCa';
import Incentives from './components/Incentives';
import Navbar from './components/Navbar';
import HowToFunction from './components/HowToFunction';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
const Home = () => {
  useEffect(() => {
    const text = document.getElementById('text');
    const bird1 = document.getElementById('bird1');
    const btn = document.getElementById('btn');
    const header = document.getElementById('header');

    const handleScroll = () => {
      const scrollValue = window.scrollY;

      // Parallax effect for the title
      text.style.transform = `translateY(${30 + scrollValue * 0.6}px)`;

      // Parallax effect for the bird image
      bird1.style.transform = `translateY(${-scrollValue * 0.6}px)`;

      // Parallax effect for the button container
      btn.style.transform = `translateY(${130 + scrollValue * 0.6}px)`;

      // Parallax effect for the header
     
    };

    document.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="body" cl>
      <Navbar />

      <section className="bg-[url('https://ca.fluxus.co.in/static/media/bg.78136bcf1ab0e0432dfe.webp')] bg-cover bg-no-repeat overflow-hidden before:!bg-black before:!absolute !relative before:!z-[10] !z-[0] before:!bg-opacity-50 before:!top-0 before:!w-full before:!h-full">
        <h2 id="text" className="!font-bold  !text-white translate-y-[30px] !z-[100]">
          <span className='!text-xl md:!text-4xl '>CAMPUS AMBASSADOR PROGRAM</span>
          <br />
        </h2>

        <img
          className="!top-[19%] z-[100]"
          src="https://ca.fluxus.co.in/static/media/logo.411798a6ecaa324cc0fe.webp"
          id="bird1"
        />

        <div id="btn" className="sm:translate-y-[150px]  
         !text-black z-[100] translate-y-[130px]  !text-xs md:!text-xl">
          <p>To become CA, Contact Us</p>
        </div>
      </section>

      <div className="sec">
        <AboutFluxus />
        <WhyCa/>
        <Incentives />
        <HowToFunction/>
        <FAQ/>
        <ContactUs/>
      </div>
      <style jsx>
        {`
          

          @import url('https://fonts.googleapis.com/css2?family=Roboto+Condensed:wght@700&display=swap');
          
          
          
          #body {
              overflow-x: hidden;
              background: #000000;
              min-height: 100vh;
          }
          
          #header {
              position: absolute;
              top: 0px;
              left: 0;
              width: 100%;
              padding: 30px 100px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              z-index: 100;
          }
          
          #header .logo {
              color: var(--primary);
              font-weight: 700;
              font-size: 2em;
              text-decoration: none;
          }
          
          #header ul {
              display: flex;
              justify-content: center;
              align-items: center;
          }
          
          #header ul li {
              list-style: none;
              margin-left: 20px;
          }
          
          #header ul li a {
              text-decoration: none;
              padding: 6px 15px;
              color: var(--primary);
              border-radius: 20px;
          }
          
          #header ul li a:hover,
          #header ul li a.active {
              background: var(--primary);
              color: #fff;
          }
          
          section {
              position: relative;
              width: 100%;
              height: 100vh;
              display: flex;
              justify-content: center;
              align-items: center;
              background-attachment: fixed;
              background-position: 50%;
              background-size: cover;
              height: 100vh;
          }
          
          section::before {
              content: "";
              position: absolute;
              bottom: 0;
              left: 0;
              width: 100%;
              height: 100px;
              background: linear-gradient(to top, var(--primary), transparent);
              z-index: 10;
          }
          
          section img {
              position: absolute;
              top: 0px;
              left: 30%;
              width: 40%;
              height: 40%;
              object-fit: contain;
              pointer-events: none;
              transform: translateY(20px) !important;
          }
          
          
          section #text {
              position: absolute;
              color: var(--primary);
              font-size: 10vw;
              text-align: center;
              line-height: .55em;
              font-weight: bolder;
              
              
          }
          
          section #text span {
              font-size: .20em;
              letter-spacing: 2px;
              font-weight: 400;
          }
          
          #btn {
              text-decoration: none;
              display: inline-block;
              padding: 8px 30px;
              background: #fff;
              color: var(--primary);
              font-size: 1.2em;
              font-weight: 500;
              letter-spacing: 2px;
              border-radius: 40px;
              
          }
          
          .sec {
              position: relative;
              padding: 100px;
              background: var(--primary);
          }
          
          .sec h2 {
              font-size: 3.5em;
              color: #fff;
              margin-bottom: 10px;
          }
          
          .sec p {
              font-size: 1em;
              color: #fff;
          }
          
          footer {
              position: relative;
              padding: 0px 100px;
              background: var(--primary);
          }
          
          footer a {
              text-decoration: none;
              color: #fff;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
