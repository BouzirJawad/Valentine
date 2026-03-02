import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function ValentineProposal() {
  const [stage, setStage] = useState('intro'); // intro, question, accepted
  const [noButtonPosition, setNoButtonPosition] = useState({ top: '60%', left: '70%' });
  const [attempts, setAttempts] = useState(0);

  const moveNoButton = () => {
    setAttempts((prev) => prev + 1);

    let randomTop, randomLeft;
    let isTooClose = true;
    let attempts = 0;
    const maxAttempts = 100;

    // Keep generating new positions until we find one that's far enough from the Yes button
    while (isTooClose && attempts < maxAttempts) {
      randomTop = Math.random() * 70 + 10; // 10% to 80%
      randomLeft = Math.random() * 70 + 10; // 10% to 80%

      // Yes button is at 50% top, 30% left (50% - 120px offset ≈ 30%)
      const yesButtonTop = 50;
      const yesButtonLeft = 30; // Accounting for the -120px margin

      const distance = Math.sqrt(
        Math.pow(randomTop - yesButtonTop, 2) + Math.pow(randomLeft - yesButtonLeft, 2)
      );

      // If distance is greater than 35% (much farther), we're good
      // Also avoid the left side where Yes button is
      if (
        distance > 35 &&
        (randomLeft > 55 || randomLeft < 15 || randomTop < 30 || randomTop > 70)
      ) {
        isTooClose = false;
      }

      attempts++;
    }

    setNoButtonPosition({
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
    });
  };

  const handleYes = () => {
    setStage('accepted');
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-100 via-rose-100 to-red-100">
      {/* Animated hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <Heart
            key={i}
            className="absolute text-pink-300 opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
            }}
          />
        ))}
      </div>

      {/* Intro Stage */}
      {stage === 'intro' && (
        <div className="relative z-10 flex items-center justify-center min-h-screen px-4">
          <div className="text-center space-y-6 md:space-y-8 animate-fade-in max-w-3xl w-full">
            <div className="relative">
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse-slow px-4">
                Hey Baby 💕
              </h1>
              <p className="text-lg sm:text-xl md:text-2xl text-pink-600 font-semibold mt-3 md:mt-4">
                (Yes, you Babygirl! 😘)
              </p>
              <Sparkles className="absolute -top-4 -right-2 sm:-top-6 sm:-right-6 text-yellow-400 w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 animate-spin-slow" />
              <Sparkles
                className="absolute -bottom-4 -left-2 sm:-bottom-6 sm:-left-6 text-yellow-400 w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 animate-spin-slow"
                style={{ animationDelay: '1s' }}
              />
            </div>

            <button
              onClick={() => setStage('question')}
              className="group relative px-8 py-4 sm:px-10 sm:py-5 md:px-12 md:py-6 bg-gradient-to-r from-pink-500 to-red-500 text-white text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-2xl hover:shadow-pink-300 hover:scale-110 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10">Press This! 💖</span>
              <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      )}

      {/* Question Stage */}
      {stage === 'question' && (
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className="text-center space-y-8 md:space-y-12 animate-scale-in max-w-5xl w-full">
            <div className="space-y-3 md:space-y-4">
              <Heart className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto text-red-500 animate-heartbeat fill-red-500" />
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-pink-600 via-red-600 to-pink-600 bg-clip-text text-transparent leading-tight px-4">
                Will You Be My
                <br />
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Valentine? 💝</span>
              </h2>
              <p className="text-xl sm:text-2xl md:text-3xl text-pink-600 font-semibold mt-3 md:mt-4">
                my love 💕
              </p>
              {attempts > 0 && (
                <p className="text-pink-600 text-xl font-semibold animate-bounce text-center mt-4">
                  {attempts === 1 && 'Come on baby… 🥺'}
                  {attempts === 2 && 'Pretty please? 💕'}
                  {attempts === 3 && 'You know you want to! 😘'}
                  {attempts === 4 && 'I love you sooo much 💗'}
                  {attempts === 5 && 'Don’t break my heart !!'}
                  {attempts === 6 && 'I’m begging now 😭❤️'}
                  {attempts === 7 && '3afa 😩💖'}
                  {attempts === 8 && 'layhdik goli yes 😩💖'}
                  {attempts === 9 && 'Just press YES already 😭💕'}
                  {attempts === 10 && 'I’ll be the best Valentine ever 😘🌹'}
                  {attempts === 11 && 'This button is allergic to NO 😤💘'}
                  {attempts === 12 && 'Okay this is getting serious now 😳❤️'}
                  {attempts >= 13 && 'PLEASE BABY SAY YESSSS 😭💞💍'}
                </p>
              )}
            </div>

            <div className="relative h-64 sm:h-80 md:h-96 w-full">
              {/* No Button - Moving position (rendered first, lower z-index) */}
              <button
                onMouseEnter={moveNoButton}
                onTouchStart={moveNoButton}
                onClick={moveNoButton}
                className="absolute px-6 py-3 sm:px-10 sm:py-3 md:px-12 md:py-4 bg-gradient-to-r from-gray-400 to-gray-500 text-white text-lg sm:text-xl md:text-2xl font-bold rounded-full shadow-xl transition-all duration-200 hover:scale-95 z-10"
                style={{
                  top: noButtonPosition.top,
                  left: noButtonPosition.left,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                No 💔
              </button>

              {/* Yes Button - Fixed position (rendered second, higher z-index) */}
              <button
                onClick={handleYes}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-10 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xl sm:text-2xl md:text-3xl font-bold rounded-full shadow-2xl hover:shadow-green-300 hover:scale-110 transition-all duration-300 z-30"
                style={{ marginLeft: '0' }}
              >
                Yes! 💚
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Accepted Stage */}
      {stage === 'accepted' && (
        <div className="relative z-10 flex items-center justify-center min-h-screen p-4">
          <div className="text-center space-y-6 md:space-y-8 animate-scale-in w-full">
            {/* Celebration hearts */}
            {[...Array(30)].map((_, i) => (
              <Heart
                key={i}
                className="absolute text-red-500 fill-red-500 animate-float-up"
                style={{
                  left: `${Math.random() * 100}%`,
                  bottom: '-50px',
                  animationDelay: `${Math.random() * 2}s`,
                  animationDuration: `${2 + Math.random() * 2}s`,
                  width: `${30 + Math.random() * 30}px`,
                  height: `${30 + Math.random() * 30}px`,
                }}
              />
            ))}

            <div className="relative bg-white/90 backdrop-blur-sm p-6 sm:p-8 md:p-12 rounded-2xl md:rounded-3xl shadow-2xl max-w-sm sm:max-w-lg md:max-w-2xl mx-auto border-2 sm:border-4 border-pink-200">
              <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-auto">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 sm:px-6 sm:py-2.5 md:px-8 md:py-3 rounded-full text-base sm:text-xl md:text-2xl font-bold shadow-lg">
                  🎉 She Said Yes! 🎉
                </div>
              </div>

              <div className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 md:space-y-6">
                <div className="text-4xl sm:text-6xl md:text-8xl animate-bounce-slow">
                  💐🌹💝🌹💐
                </div>

                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent leading-tight px-2">
                  You Made Me The
                  <br />
                  Happiest Person!
                </h3>

                <div className="space-y-3 sm:space-y-4 text-gray-700 px-2">
                  <p className="text-lg sm:text-xl md:text-2xl font-semibold leading-relaxed">
                    Every moment with you feels like magic ✨
                  </p>
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed">
                    You light up my world in ways I never imagined possible.
                    <br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>
                    Your smile, your laugh, your love... everything about you
                    <br className="hidden sm:block" />
                    <span className="sm:hidden"> </span>
                    makes every day feel like Valentine's Day. 💕
                  </p>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mt-4 sm:mt-6">
                    I love you more than words can say! 💖
                  </p>
                </div>

                <div className="flex gap-2 sm:gap-3 md:gap-4 justify-center text-3xl sm:text-5xl md:text-6xl animate-pulse-slow">
                  🌸 🌺 🌷 🌹 💐
                </div>

                <div className="pt-3 sm:pt-4">
                  <p className="text-xs sm:text-sm text-gray-500 italic">
                    Forever yours, always and forever 💑
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-30px) rotate(10deg);
          }
        }

        @keyframes float-up {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes heartbeat {
          0%,
          100% {
            transform: scale(1);
          }
          25% {
            transform: scale(1.2);
          }
          50% {
            transform: scale(1);
          }
          75% {
            transform: scale(1.1);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }

        @keyframes pulse-slow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        .animate-float {
          animation: float infinite ease-in-out;
        }

        .animate-float-up {
          animation: float-up forwards ease-out;
        }

        .animate-heartbeat {
          animation: heartbeat 1.5s infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 2s infinite;
        }
      `}</style>
    </div>
  );
}