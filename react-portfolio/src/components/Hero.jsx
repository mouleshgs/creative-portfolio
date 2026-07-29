import { useEffect } from 'react'
import { animate } from 'animejs'

function setDashoffset(el) {
  const len = el && el.getTotalLength ? el.getTotalLength() : 0
  if (el && el.setAttribute) el.setAttribute('stroke-dasharray', len)
  return len
}

export default function Hero() {
  useEffect(() => {
    // SVG name stroke animation
    animate({
      targets: '.namemoulesh',
      strokeDashoffset: [setDashoffset, 0],
      easing: 'easeInOutSine',
      duration: 14000,
      delay: function (el, i) {
        return i * 250
      },
      direction: 'alternate-reverse'
    })

    // blob animation
    animate({
      targets: '.blob',
      translateX: 10,
      skew: '10',
      rotate: '20',
      scale: 1.1,
      duration: 2000,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true
    })

    // floating div animation
    animate({
      targets: '#floating-div',
      scale: [1.1, 1.15],
      rotate: [10, -3, 10],
      duration: 6000,
      delay: 500,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: 3
    })

    // programming svg animation
    animate({
      targets: '.programming',
      rotate: [3, -5, 3],
      scale: [1.1, 1.12],
      duration: 7000,
      easing: 'easeInOutSine',
      direction: 'alternate',
      loop: true
    })

    // name hover handlers
    const nameEl = document.getElementById('my-name')
    const namePath = document.querySelector('.namemoulesh')
    if (nameEl && namePath) {
      const over = () => namePath.classList.add('fill-blue-500')
      const out = () => namePath.classList.remove('fill-blue-500')
      nameEl.addEventListener('mouseover', over)
      nameEl.addEventListener('mouseout', out)
      return () => {
        nameEl.removeEventListener('mouseover', over)
        nameEl.removeEventListener('mouseout', out)
      }
    }
  }, [])

  return (
    <section>
      <p data-aos="fade-up" data-aos-duration="3000" data-aos-delay="50" className="font-extrabold text-sm lg:text-2xl text-blue-400 absolute top-72 pl-11 font-mono lg:top-50 lg:left-70">Hi👋, I am,</p>

      <div data-aos="fade-up" data-aos-duration="3000" data-aos-delay="300" className="fullname pl-4 flex justify-center items-center mt-24">
        <svg id="my-name" className="mt-28" width="1150" height="186" viewBox="0 0 1122 186" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path className="namemoulesh transition-all stroke-2 stroke-blue-500" d="M0.815697 0.45454H55.4545L101.804 113.476H103.943L150.293 0.45454H204.931V183H161.969V70.87H160.454L116.6 181.841H89.147L45.2933 70.2461H43.7781V183H0.815697V0.45454ZM296.36 185.585C281.98 185.585 269.62 182.643 259.281 176.761C249.001 170.818 241.068 162.559 235.482 151.982C229.956 141.345 227.193 129.015 227.193 114.991C227.193 100.908 229.956 88.5779 235.482 78.0007C241.068 67.3641 249.001 59.1044 259.281 53.2216C269.62 47.2794 281.98 44.3082 296.36 44.3082C310.74 44.3082 323.071 47.2794 333.351 53.2216C343.69 59.1044 351.623 67.3641 357.149 78.0007C362.735 88.5779 365.528 100.908 365.528 114.991C365.528 129.015 362.735 141.345 357.149 151.982C351.623 162.559 343.69 170.818 333.351 176.761C323.071 182.643 310.74 185.585 296.36 185.585ZM296.628 152.695C301.857 152.695 306.284 151.09 309.908 147.881C313.533 144.673 316.296 140.216 318.198 134.511C320.159 128.807 321.139 122.211 321.139 114.724C321.139 107.118 320.159 100.462 318.198 94.7578C316.296 89.0533 313.533 84.5966 309.908 81.3878C306.284 78.179 301.857 76.5746 296.628 76.5746C291.22 76.5746 286.645 78.179 282.901 81.3878C279.217 84.5966 276.394 89.0533 274.433 94.7578C272.532 100.462 271.581 107.118 271.581 114.724C271.581 122.211 272.532 128.807 274.433 134.511C276.394 140.216 279.217 144.673 282.901 147.881C286.645 151.09 291.22 152.695 296.628 152.695ZM476.187 123.904V46.0909H519.684V183H478.148V157.508H476.722C473.691 165.886 468.522 172.542 461.213 177.474C453.963 182.346 445.198 184.783 434.918 184.783C425.589 184.783 417.389 182.643 410.317 178.365C403.246 174.087 397.75 168.115 393.828 160.449C389.906 152.724 387.915 143.692 387.856 133.353V46.0909H431.442V124.796C431.501 132.224 433.462 138.077 437.325 142.355C441.187 146.634 446.446 148.773 453.101 148.773C457.439 148.773 461.331 147.822 464.778 145.92C468.284 143.96 471.047 141.137 473.067 137.453C475.147 133.709 476.187 129.193 476.187 123.904ZM591.013 0.45454V183H547.427V0.45454H591.013ZM682.754 185.585C668.433 185.585 656.073 18..." fill="none"></path>
        </svg>
        <p className="font-mono text-blue-400 lg:text-2xl font-extrabold tracking-tight relative top-44 -left-28">student</p>
      </div>

      <div data-aos="zoom-out-up" data-aos-duration="1000" className="absolute bottom-0 z-[-1]">
        <svg className="min-w-[400px]  min-h-[700px] lg:w-[1580px] lg:h-[720px] lg:block md:block hidden" id="visual" viewBox="0 0 1580 720" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 526L22 524.2C44 522.3 88 518.7 131.8 514.2C175.7 509.7 219.3 504.3 263.2 505.5C307 506.7 351 514.3 395 517.8C439 521.3 483 520.7 526.8 511.5C570.7 502.3 614.3 484.7 658.2 486.3C702 488 746 509 790 512.7C834 516.3 878 502.7 921.8 494.3C965.7 486 1009.3 483 1053.2 488.5C1097 494 1141 508 1185 515C1229 522 1273 522 1316.8 514.3C1360.7 506.7 1404.3 491.3 1448.2 488.2C1492 485 1536 494 1558 498.5L1580 503L1580 721L1558 721C1536 721 1492 721 1448.2 721C1404.3 721 1360.7 721 1316.8 721C1273 721 1229 721 1185 721C1141 721 1097 721 1053.2 721C1009.3 721 965.7 721 921.8 721C878 721 834 721 790 721C746 721 702 721 658.2 721C614.3 721 570.7 721 526.8 721C483 721 439 721 395 721C351 721 307 721 263.2 721C219.3 721 175.7 721 131.8 721C88 721 44 721 22 721L0 721Z" fill="#2463eb"></path>
        </svg>
        <img className="block lg:hidden md:hidden w-full" src="/assests/svgs/mobile-waves.svg" alt="mobile waves" />
        <div id="floating-div" className="absolute z-50 left-[50%] p-9 transform -translate-x-1/2 top-24 lg:top-[10%] lg:left-[73%] w-56 h-56 lg:w-64 lg:h-64 bg-[url('/assests/computer2_bg.webp')] bg-cover bg-center bg-no-repeat rotate-90"></div>
      </div>
    </section>
  )
}
