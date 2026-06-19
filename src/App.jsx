import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Music } from 'lucide-react';

// === COUPLE SETTINGS ===
const START_DATE = new Date('2022-06-15T00:00:00'); // Put the actual date here
const ID_YOUTUBE_VIDEO = 'RJLkcPhVi9w'; // YouTube song ID

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [timeTogether, setTempoJuntos] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const audioRef = useRef(null);

  // TIME COUNTER
  useEffect(() => {
    const calcularTempo = () => {
      const nowTime = new Date();
      const difference = Math.max(0, nowTime - START_DATE);
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      
      setTempoJuntos({ days, hours, minutes, seconds });
    };

    const timer = setInterval(calcularTempo, 1000);
    calcularTempo(); 
    return () => clearInterval(timer);
  }, []);

  // Music Pause Logic on YouTube Slide
  useEffect(() => {
    if (audioRef.current) {
      if (currentSlide === 9) {
        audioRef.current.pause();
      } else {
        // Try playing again, but ignore the error if the browser freezes
        audioRef.current.play().catch(() => {});
      }
    }
  }, [currentSlide]);

  // Navigation Logic (Total of 11 slides = goes from 0 to 10)
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev < 10 ? prev + 1 : prev));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : prev));
  };

  // === SLIDE CONTENTS ===
  const slides = [
    // SLIDE 1: FOLDER 
    <div key="slide1" className="flex flex-col items-center justify-center h-full text-white bg-gradient-to-b from-zinc-800 via-black to-black p-8 text-center">
      <p className="text-emerald-500 font-bold tracking-widest text-xs uppercase mb-4">John & Anne</p>
      
      <div className="w-64 h-64 bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-8 relative group">
         <div className="absolute inset-0 flex items-center justify-center text-zinc-600 text-sm border border-zinc-800 overflow-hidden">
           <img loading="lazy" src="" alt="Image" className="w-full h-full object-cover" />
         </div>
      </div>
      
      <h1 className="text-4xl font-black mb-2 tracking-tight">Our History</h1>
      <p className="text-zinc-400 text-sm">Made with ❤️</p>
    </div>,

    // SLIDE 2: COUNTER
    <div key="slide2" className="flex flex-col items-center justify-center h-full text-white bg-gradient-to-b from-[#1DB954]/20 via-black to-black p-8">
      <div className="bg-emerald-500/10 p-4 rounded-full mb-6">
        <Heart className="w-12 h-12 text-emerald-500 fill-emerald-500" />
      </div>
      <h2 className="text-3xl font-black mb-10 text-center tracking-tight">Time flies by your side.</h2>
      
      <div className="grid grid-cols-2 gap-3 w-full max-w-xs text-left">
        <div className="bg-zinc-900/80 backdrop-blur-md p-5 rounded-md border border-white/5 hover:bg-zinc-800 transition-colors">
          <span className="text-4xl font-black text-emerald-400">{timeTogether.days}</span>
          <p className="text-xs uppercase font-bold tracking-widest mt-1 text-zinc-500">Days</p>
        </div>
        <div className="bg-zinc-900/80 backdrop-blur-md p-5 rounded-md border border-white/5 hover:bg-zinc-800 transition-colors">
          <span className="text-4xl font-black text-white">{timeTogether.hours}</span>
          <p className="text-xs uppercase font-bold tracking-widest mt-1 text-zinc-500">Hours</p>
        </div>
        <div className="bg-zinc-900/80 backdrop-blur-md p-5 rounded-md border border-white/5 hover:bg-zinc-800 transition-colors">
          <span className="text-4xl font-black text-white">{timeTogether.minutes}</span>
          <p className="text-xs uppercase font-bold tracking-widest mt-1 text-zinc-500">Minutes</p>
        </div>
        <div className="bg-zinc-900/80 backdrop-blur-md p-5 rounded-md border border-white/5 hover:bg-zinc-800 transition-colors">
          <span className="text-4xl font-black text-emerald-400">{timeTogether.seconds}</span>
          <p className="text-xs uppercase font-bold tracking-widest mt-1 text-zinc-500">Seconds</p>
        </div>
      </div>
      <p className="text-zinc-400 text-sm mt-6">Since 2022-06-15</p>
    </div>,

    // SLIDE 3: DATES
    <div key="slide3" className="flex flex-col items-center justify-start h-full text-white bg-gradient-to-b from-indigo-900/30 via-black to-black p-8 pt-24 overflow-y-auto">
      <h2 className="text-2xl font-black mb-8 w-full text-left">Our Moments</h2>

      <div className="w-full space-y-4">
        {/* Item 1 */}
        <div className="flex items-center gap-4 w-full group">
          <span className="text-zinc-500 font-bold w-4 text-right">1</span>
          <div className="flex-1">
            <h3 className="font-bold text-emerald-400 text-lg leading-tight">Lorem Ipsum 💬</h3>
            <p className="text-zinc-400 text-sm">2020-01-01</p>
          </div>
          <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
        </div>
        {/* Item 2 */}
        <div className="flex items-center gap-4 w-full group">
          <span className="text-zinc-500 font-bold w-4 text-right">2</span>
          <div className="flex-1">
            <h3 className="font-bold text-emerald-400 text-lg leading-tight">Lorem Ipsum ❤️</h3>
            <p className="text-zinc-400 text-sm">2020-01-01</p>
          </div>
          <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
        </div>
        {/* Item 3 */}
        <div className="flex items-center gap-4 w-full group">
          <span className="text-zinc-500 font-bold w-4 text-right">3</span>
          <div className="flex-1">
            <h3 className="font-bold text-emerald-400 text-lg leading-tight">Lorem Ipsum 💋</h3>
            <p className="text-zinc-400 text-sm">2020-01-01</p>
          </div>
          <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
        </div>
        {/* Item 4 */}
        <div className="flex items-center gap-4 w-full group">
          <span className="text-zinc-500 font-bold w-4 text-right">4</span>
          <div className="flex-1">
            <h3 className="font-bold text-emerald-400 text-lg leading-tight">Lorem Ipsum 💍</h3>
            <p className="text-zinc-400 text-sm">2020-01-01</p>
          </div>
          <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
        </div>
        {/* Item 5 */}
        <div className="flex items-center gap-4 w-full group">
          <span className="text-zinc-500 font-bold w-4 text-right">5</span>
          <div className="flex-1">
            <h3 className="font-bold text-emerald-400 text-lg leading-tight">Lorem Ipsum 🐶</h3>
            <p className="text-zinc-400 text-sm">2020-01-01</p>
          </div>
          <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
        </div>
        {/* Item 6 */}
        <div className="flex items-center gap-4 w-full group">
          <span className="text-zinc-500 font-bold w-4 text-right">6</span>
          <div className="flex-1">
            <h3 className="font-bold text-emerald-400 text-lg leading-tight">Lorem Ipsum 📑</h3>
            <p className="text-zinc-400 text-sm">2020-01-01</p>
          </div>
          <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
        </div>        
        {/* Item 7 */}
        <div className="flex items-center gap-4 w-full group">
          <span className="text-zinc-500 font-bold w-4 text-right">7</span>
          <div className="flex-1">
            <h3 className="font-bold text-emerald-400 text-lg leading-tight">Lorem Ipsum 🚗</h3>
            <p className="text-zinc-400 text-sm">2020-01-01</p>
          </div>
          <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
        </div>
        {/* Item 8 */}
        <div className="flex items-center gap-4 w-full group">
          <span className="text-zinc-500 font-bold w-4 text-right">8</span>
          <div className="flex-1">
            <h3 className="font-bold text-emerald-400 text-lg leading-tight">Lorem Ipsum 👰🏻‍♀️🤵🏻</h3>
            <p className="text-zinc-400 text-sm">2020-01-01</p>
          </div>
          <Heart className="w-4 h-4 text-emerald-500 fill-emerald-500" />
        </div>
      </div>
    </div>,

    // SLIDE 4 
    <div key="slide4" className="flex flex-col items-center justify-center h-full text-white bg-gradient-to-b from-zinc-800 via-black to-black p-8">
      <h2 className="text-xl font-black text-white mb-2 text-center">1. Lorem Ipsum 💬</h2>
      <div className="w-full aspect-square bg-zinc-900 rounded-lg shadow-2xl mb-6 relative overflow-hidden border border-white/5">
         <img loading="lazy" src=" " alt="Image" className="w-full h-full object-cover" />
      </div>
      
      <h2 className="text-xl font-black text-white mb-2 text-center">2. Lorem Ipsum ❤️</h2>
      <div className="w-full aspect-square bg-zinc-900 rounded-lg shadow-2xl relative overflow-hidden border border-white/5">
         <img loading="lazy" src=" " alt="Image" className="w-full h-full object-cover" />
      </div>
    </div>,

    // SLIDE 5 
    <div key="slide5" className="flex flex-col items-center justify-center h-full text-white bg-gradient-to-b from-zinc-800 via-black to-black p-8">
      <h2 className="text-xl font-black text-white mb-2 text-center">3. Lorem Ipsum 💋</h2>
      <div className="w-full aspect-square bg-zinc-900 rounded-lg shadow-2xl mb-6 relative overflow-hidden border border-white/5">
         <img loading="lazy" src=" " alt="Image" className="w-full h-full object-cover" />
      </div>
      
      <h2 className="text-xl font-black text-white mb-2 text-center">4. Lorem Ipsum 💍</h2>
      <div className="w-full aspect-square bg-zinc-900 rounded-lg shadow-2xl relative overflow-hidden border border-white/5">
         <img loading="lazy" src=" " alt="Image" className="w-full h-full object-cover" />
      </div>
    </div>,

    // SLIDE 6
    <div key="slide6" className="flex flex-col items-center justify-center h-full text-white bg-gradient-to-b from-zinc-800 via-black to-black p-8">      
      <h2 className="text-xl font-black text-white mb-2 text-center">5. Lorem Ipsum 🐶</h2>
      <div className="w-full aspect-square bg-zinc-900 rounded-lg shadow-2xl mb-6 relative overflow-hidden border border-white/5">
         <img loading="lazy" src=" " alt="Image" className="w-full h-full object-cover" />
      </div>
      
      <h2 className="text-xl font-black text-white mb-2 text-center">6. Lorem Ipsum 📑</h2>
      <div className="w-full aspect-square bg-zinc-900 rounded-lg shadow-2xl relative overflow-hidden border border-white/5">
         <img loading="lazy" src=" " alt="Image" className="w-full h-full object-cover" />
      </div>      
    </div>,

    // SLIDE 7
    <div key="slide7" className="flex flex-col items-center justify-center h-full text-white bg-gradient-to-b from-zinc-800 via-black to-black p-8">
      <h2 className="text-xl font-black text-white mb-2 text-center">7. Lorem Ipsum 🚗</h2>
      <div className="w-full aspect-square bg-zinc-900 rounded-lg shadow-2xl mb-6 relative overflow-hidden border border-white/5">
         <img loading="lazy" src=" " alt="Image" className="w-full h-full object-cover" />
      </div>
      
      <h2 className="text-xl font-black text-white mb-2 text-center">8. Lorem Ipsum 👰🏻‍♀️🤵🏻</h2>
      <div className="w-full aspect-square bg-zinc-900 rounded-lg shadow-2xl relative overflow-hidden border border-white/5">
         <img loading="lazy" src=" " alt="Image" className="w-full h-full object-cover" />
      </div>
    </div>,

    // SLIDE 8
    <div key="slide8" className="flex flex-col items-center justify-center h-full text-white bg-gradient-to-b from-zinc-800 via-black to-black p-8">
      <div className="w-full aspect-square bg-zinc-900 rounded-lg shadow-2xl mb-8 relative overflow-hidden border border-white/5">
         <img loading="lazy" src=" " alt="Image" className="w-full h-full object-cover" />
      </div>
      
      <div className="w-full flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-black text-white mb-1">Lorem Ipsum 🗺️</h2>
        </div>
        <Heart className="w-6 h-6 text-emerald-500 fill-emerald-500 flex-shrink-0 ml-2" />
      </div>
    </div>,  

    // SLIDE 9
    <div key="slide9" className="flex flex-col items-center justify-center h-full text-white bg-gradient-to-b from-zinc-800 via-black to-black p-8">
      <div className="w-full aspect-square bg-zinc-900 rounded-lg shadow-2xl mb-8 relative overflow-hidden border border-white/5">
         <img loading="lazy" src="/mensagem.jpg" alt="Image" className="w-full h-full object-cover" />
      </div>
      
      <div className="w-full flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-black text-white mb-1">Lorem Ipsum ✨</h2>
        </div>
        <Heart className="w-6 h-6 text-emerald-500 fill-emerald-500 flex-shrink-0 ml-2" />
      </div>
    </div>,  

    // SLIDE 10: YOUTUBE
    <div key="slide10" className="flex flex-col items-center justify-center h-full text-white bg-gradient-to-b from-zinc-800 via-black to-black p-8">
      <div className="w-full aspect-square bg-zinc-900 rounded-lg shadow-2xl mb-8 relative overflow-hidden border border-white/5">
         <img loading="lazy" src="/1a.jpg" alt="Image" className="w-full h-full object-cover" />
      </div>
      
      <div className="w-full flex justify-between items-end mb-6">
        <div>
          <h2 className="text-2xl font-black text-white mb-1">Our Song 🎶❤️</h2>
          <p className="text-zinc-400 text-sm">Song Name by Artist</p>
        </div>
        <Heart className="w-6 h-6 text-emerald-500 fill-emerald-500 flex-shrink-0 ml-2" />
      </div>

      {/* Youtube Player */}
      <div className="w-full h-100 bg-zinc-900 rounded-lg overflow-hidden shadow-2xl border border-white/10 relative z-[70]">
        <iframe 
          width="100%" 
          height="100%" 
          src={`https://www.youtube.com/embed/${ID_YOUTUBE_VIDEO}?autoplay=1&controls=1`} 
          title="YouTube" 
          frameBorder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;"
          autoplay="1">
        </iframe>
      </div>
    </div>,

    // SLIDE 11: END
    <div key="slide11" className="flex flex-col items-center justify-center h-full text-white bg-gradient-to-b from-zinc-800 via-black to-black p-8 text-center">
      <div className="w-64 h-64 bg-zinc-900 shadow-[0_20px_50px_rgba(0,0,0,0.5)] mb-8 relative group">
         <div className="absolute inset-0 flex items-center justify-center text-zinc-600 text-sm border border-zinc-800 overflow-hidden">
           <img loading="lazy" src="/1.jpg" alt="Image" className="w-full h-full object-cover" />
         </div>
      </div>
      
      <h1 className="text-3xl font-black mb-4 tracking-tight">Lorem Ipsum ❤️</h1>
      <p className="text-zinc-400 text-sm">Made with 💖</p>
    </div>
  ];

  return (
    
    <div className="w-full h-[100dvh] bg-zinc-950 flex justify-center items-center overflow-hidden">
      
      <div className="w-full h-full md:max-w-sm md:h-[90vh] bg-black md:shadow-2xl md:rounded-[40px] md:border-[8px] md:border-zinc-900 relative overflow-hidden font-sans select-none text-white">
        
        {/* Global Audio controlled by useRef */}
        <audio ref={audioRef} autoPlay loop src="/music.mp3" />

        {/* Sound Button */}
        <button 
          className="absolute top-4 right-4 z-[999] text-white bg-white/10 backdrop-blur-md p-2 rounded-full hover:bg-white/20 transition"
          onClick={() => {
              if (audioRef.current) {
                audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
              }
          }}
        >
          <Music className="w-5 h-5" />
        </button>
        
        {/* Progress bar */}
        <div className="absolute top-4 left-0 w-full px-3 flex gap-1 z-[80]">
          {slides.map((_, index) => (
            <div key={index} className="h-1 flex-1 bg-white/20 rounded-full overflow-hidden">
              <div 
                className={`h-full bg-white transition-all duration-500 ease-out ${index <= currentSlide ? 'w-full' : 'w-0'}`}
              />
            </div>
          ))}
        </div>

        {/* Slide Show */}
        <div className="relative w-full h-full z-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="w-full h-full absolute inset-0"
            >
              {slides[currentSlide]}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Invisible Touch Areas for Navigation */}
        <div className="absolute inset-0 z-[60] flex pointer-events-none">
          {/* Left - Backward (25%) */}
          <div 
            className="w-1/4 h-full pointer-events-auto cursor-pointer" 
            onClick={prevSlide}
          ></div>
          
          {/* Half Free - To be able to click on YouTube Play (50%) */}
          <div className="w-2/4 h-full pointer-events-none"></div> 
          
          {/* Right - Forward (25%) */}
          <div 
            className="w-1/4 h-full pointer-events-auto cursor-pointer" 
            onClick={nextSlide}
          ></div>
        </div>

      </div>
    </div>
  );
}