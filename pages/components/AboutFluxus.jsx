import React from 'react'

export default function AboutFluxus() {
  return (
    <div>
      <h1 className='text-5xl font-bold '>About  FLUXUS</h1>
      <div className='grid-cols-2 grid gap-20 p-20'>
        <img src="https://ca.fluxus.co.in/static/media/1.765c92c68a6d664fd575.webp"></img>
        <div id="content" className='text-center flex justify-center items-center font-medium text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis nesciunt necessitatibus, atque qui omnis numquam adipisci dolor molestias, illum debitis fugiat odio distinctio asperiores tenetur cupiditate, veritatis amet tempora.</div>

        <div id="content" className='text-center flex justify-center items-center font-medium text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis nesciunt necessitatibus, atque qui omnis numquam adipisci dolor molestias, illum debitis fugiat odio distinctio asperiores tenetur cupiditate, veritatis amet tempora.</div>
        <img src="https://ca.fluxus.co.in/static/media/2.f5504334c8f1122364ba.webp"></img>
       

        <img src="https://ca.fluxus.co.in/static/media/4.7bf73ca72e18ce3604e9.webp"></img>
        <div id="content" className='text-center flex justify-center items-center font-medium text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis nesciunt necessitatibus, atque qui omnis numquam adipisci dolor molestias, illum debitis fugiat odio distinctio asperiores tenetur cupiditate, veritatis amet tempora.</div>

        <div id="content" className='text-center flex justify-center items-center font-medium text-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta perspiciatis nesciunt necessitatibus, atque qui omnis numquam adipisci dolor molestias, illum debitis fugiat odio distinctio asperiores tenetur cupiditate, veritatis amet tempora.</div>
        <img src="https://ca.fluxus.co.in/static/media/3.0abbf8ed1eac81abd08f.webp"></img>
        
      </div>
      <style jsx>
        {`
            
            
            
              @property --bg-1-x {
                syntax: "<number>";
                inherits: true;
                initial-value: 0;
              }
              @property --bg-2-x {
                syntax: "<number>";
                inherits: true;
                initial-value: 0;
              }
              @property --bg-2-y {
                syntax: "<number>";
                inherits: true;
                initial-value: 0;
              }
              @property --bg-3-x {
                syntax: "<number>";
                inherits: true;
                initial-value: 0;
              }
              @property --bg-3-y {
                syntax: "<number>";
                inherits: true;
                initial-value: 0;
              }
              :root {
                --bg-color: hsl(540deg 20% 12%);
                --bg-grain: url("https://assets.codepen.io/64/svgNoise2.svg");
                --bg-grain: url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
                --shadow-size: max(140px, 40vw);
                --shadow-size-fallback: 40vw;
                --shadow-blur: 60;
                --color-1: #6328da;
                --color-2: #ff1bf1;
                --color-3: #008cea;
                --bg-1-x: 0;
                --bg-1-y: 0;
                --bg-2-x: 0;
                --bg-2-y: 0;
                --bg-3-x: 0;
                --bg-3-y: 0;
              }
              
              @supports (color: color(display-p3 1 1 1)) {
                :root {
                  --color-1: color(display-p3 0.36 0.17 0.82);
                  --color-2: color(display-p3 0.95 0.04 0.95);
                  --color-3: color(display-p3 0.01 0.53 0.99);
                }
              }
              @media (min-width: 960px) {
                :root {
                  --shadow-size: max(72px, 25vw);
                  --shadow-size-fallback: 25vw;
                  --shadow-blur: 80;
                }
              }
              * {
                box-sizing: border-box;
                outline: calc(var(--debug) * 1px) dashed red;
              }
              *:before, *:after {
                outline: calc(var(--debug) * 1px) dashed red;
              }
              
              html,
              body {
                width: 100%;
                height: 100%;
                padding: 0;
                margin: 0;
              }
              
              body {
                font-family: "Mona Sans", sans-serif;
                display: grid;
                grid-template-columns: repeat(1, 1fr);
                background: #ffffff;
                z-index: -1;
                position: relative;
              }
              
        `}
      </style>
    </div>
  )
}
