import React from "react"
import BgVideo from '../assets/media/eob-video-bg-overlay.mp4'
import { StaticImage } from "gatsby-plugin-image"

const Home = () => {
  return(

    <>

      <div className="relative w-full" style={{height:'70vh'}}>

        <video repeat="true" loop autoPlay muted playsInline id="EOB-Bg-video" className="absolute top-0 left-0 w-full object-cover" style={{height:'70vh'}}>
          <source src={BgVideo} type="video/mp4" alt=""/>
        </video>

        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center w-full px-8">
          <h1 className="text-white text-3xl md:text-4xl font-semibold text-center filter drop-shadow-lg">Ottawa's Holistic Anti-Aging Skincare, Acne &  Rosacea Clinic</h1>
          <p className="text-white text-lg md:text-xl my-4 text-center leading-tight filter drop-shadow-lg">Reminding you of the importance and enjoyment of feeling beautiful every single day.</p>
          <button className="px-5 py-2 my-8 border-2 border-white rounded-sm shadow-md text-2xl text-white hover:bg-white/20 transition-all">
            Learn More
          </button>
        </div>   

      </div>

      <div id="inspire" className="flex flex-col">
        <div className="flex flex-col items-center p-4 my-8 md:my-12">
          <h1 className="my-4 text-2xl md:text-4xl font-semibold">Inspire the Nature of Beauty!</h1>
          <p className="my-4 text-base mx-2">Essence of Beauty, Ottawa’s Holistic Acne, Rosacea and Anti-Aging Skincare Clinic specializes in facial rejuvenation treatments using highly effective natural and organic formulas that combine age-defying science with nature’s most repairing elements.</p>
        </div>
        <div className="flex flex-col md:flex-row">
            <div className="relative lg:w-1/2">
              <StaticImage className="w-full" src="../assets/media/benefits.jpg"/>
              <h1 className="absolute top-10 left-10 font-bold text-white filter drop-shadow-lg">The Benefits</h1>
            </div>
            <div className="lg:w-1/2 grid grid-cols-1 lg:grid-cols-2 gap-1 text-white">
              <div className="flex flex-col rounded-sm shadow-md bg-darkGreen p-6">
                <span className="text-4xl font-bold">1.</span>
                <p className="text-lg my-3 md:my-auto">Treatments that incorporate the latest, healthiest and most effective skincare science and research.</p>
              </div>
              <div className="flex flex-col rounded-sm shadow-md bg-darkGreen p-6">
                <span className="text-4xl font-bold">2.</span>
                <p className="text-lg my-3 md:my-auto">Skincare products that are not only free of acids, harsh chemicals and abrasives, but are organic and actually regenerate your skin.</p>
              </div>
              <div className="flex flex-col rounded-sm shadow-md bg-darkGreen p-6">
                <span className="text-4xl font-bold">3.</span>
                <p className="text-lg my-3 md:my-auto">Follow-up encouragement and support to ensure you experience the maximum benefit from every treatment.</p>
              </div>
              <div className="flex flex-col rounded-sm shadow-md bg-darkGreen p-6">
                <span className="text-4xl font-bold">4.</span>
                <p className="text-lg my-3 md:my-auto">Constant monitoring of your progress in meeting your skincare goals.</p>
              </div>
            </div>
        </div>
      </div>

      <div id="meet-eva" className="flex flex-col bg-white md:p-8">
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto my-8 md:my-12">
          <div className="md:w-1/2 m-4 md:mr-6">
            <h2 className="text-5xl font-semibold">Meet Eva</h2>
            <h3 className="text-2xl text-brown font-semibold">Your Natural and Organic Skincare Specialist</h3>
            <p className="my-2">
              As a European trained aesthetician with over 26 years of experience, I started Essence of Beauty in 2001. My business continues to grow as I offer my clients the most advanced products and techniques. In short, I love what I do and I love the joy in my clients’ eyes and voices when they tell me how much I have helped them. You inspire me.
            </p>
            <p className="my-2">
              The treatments I offer are both simple and sophisticated based on each client’s unique and personal requirements. My specialty is natural and organic skin care that rebuilds and regenerates the skin from the inside out. I have researched and use state of art, non-surgical, non-invasive, acne, rosacea and anti-aging facial treatments. These include Ultrasound, Radiofrequency, Micro-current, LED Lights, DMK Enzyme Treatments, Derma Ray, Dermal Infusion and Herbal Green Peel® therapies. My more traditional treatments include waxing, skin tag and red spot removal and repair of damaged facial capillaries with Vasculyse. Of course I am constantly researching new treatments and expect to add them to my services in time.
            </p>
            <p className="my-2">
              I have been successfully using skincare lines that work wonders on teenage and adult acne, rosacea, ultra-sensitive and other chronic skin problems, as well as issues associated with normal aging. The lines I have chosen are 302 skincare, Yonka, DMK Danné Montague-King, Osmosis MD as well Mineral Makeup. 302 and Osmosis MD are brand new to Canada and use the most advanced skincare science available anywhere at any price.
            </p>
            <p className="my-2">
              My goal is to make a difference for anyone interested in learning how to bring to their faces, health and that natural beauty we all love. I am committed to providing the educational tools and maintenance programs you need to achieve your goals.
            </p>
            <p className="my-2">
              Thank you for choosing me as your Essence of beauty Skin Care Specialist. I am thankful for each and every one of you!
            </p>
          </div>
          <div className="relative md:w-1/2 p-2 md:p-0 my-4 md:ml-8">
            <StaticImage className="shadow-xl h-full" imgClassName="rounded-lg" src="../assets/media/meet-eva.png"/>
          </div>
        </div>
      </div>

    </>

  )
}

export default Home