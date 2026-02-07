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
          <div className="text-center space-y-8 animate-fade-in max-w-3xl w-full">
            <div className="relative">
              <h1 className="text-7xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-pulse-slow">
                Hey Baby 💕
              </h1>
              <p className="text-2xl text-pink-600 font-semibold mt-4">(Yes, you Hiba! 😘)</p>
              <Sparkles className="absolute -top-6 -right-6 text-yellow-400 w-12 h-12 animate-spin-slow" />
              <Sparkles
                className="absolute -bottom-6 -left-6 text-yellow-400 w-10 h-10 animate-spin-slow"
                style={{ animationDelay: '1s' }}
              />
            </div>

            <button
              onClick={() => setStage('question')}
              className="group relative px-12 py-6 bg-gradient-to-r from-pink-500 to-red-500 text-white text-2xl font-bold rounded-full shadow-2xl hover:shadow-pink-300 hover:scale-110 transition-all duration-300 overflow-hidden"
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
          <div className="text-center space-y-12 animate-scale-in max-w-5xl w-full">
            <div className="space-y-4">
              <Heart className="w-24 h-24 mx-auto text-red-500 animate-heartbeat fill-red-500" />
              <h2 className="text-6xl font-bold bg-gradient-to-r from-pink-600 via-red-600 to-pink-600 bg-clip-text text-transparent leading-tight">
                Will You Be My
                <br />
                <span className="text-7xl">Valentine? 💝</span>
              </h2>
              <p className="text-3xl text-pink-600 font-semibold mt-4">Hiba, my love 💕</p>
              {attempts > 0 && (
                <p className="text-pink-600 text-xl font-semibold animate-bounce text-center mt-4">
                  {attempts === 1 && 'Come on baby… 🥺'}
                  {attempts === 2 && 'Pretty please? 💕'}
                  {attempts === 3 && 'You know you want to! 😘'}
                  {attempts === 4 && 'I love you sooo much 💗'}
                  {attempts === 5 && 'Don’t break my heart !!'}
                  {attempts === 6 && 'I’m begging now 😭❤️'}
                  {attempts === 7 && '3afak a hiba 😩💖'}
                  {attempts === 8 && 'layhdik goli yes 😩💖'}
                  {attempts === 9 && 'Just press YES already 😭💕'}
                  {attempts === 10 && 'I’ll be the best Valentine ever 😘🌹'}
                  {attempts === 11 && 'This button is allergic to NO 😤💘'}
                  {attempts === 12 && 'Okay this is getting serious now 😳❤️'}
                  {attempts >= 13 && 'PLEASE BABY SAY YESSSS 😭💞💍'}
                </p>
              )}
            </div>

            <div className="relative h-96 w-full">
              {/* No Button - Moving position (rendered first, lower z-index) */}
              <button
                onMouseEnter={moveNoButton}
                onClick={moveNoButton}
                className="absolute px-12 py-4 bg-gradient-to-r from-gray-400 to-gray-500 text-white text-2xl font-bold rounded-full shadow-xl transition-all duration-200 hover:scale-95 z-10"
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
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 px-16 py-6 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-3xl font-bold rounded-full shadow-2xl hover:shadow-green-300 hover:scale-110 transition-all duration-300 z-30"
                style={{ marginLeft: '-120px' }}
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
          <div className="text-center space-y-8 animate-scale-in">
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

            <div className="relative bg-white/90 backdrop-blur-sm p-12 rounded-3xl shadow-2xl max-w-2xl mx-auto border-4 border-pink-200">
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-pink-500 to-red-500 text-white px-8 py-3 rounded-full text-2xl font-bold shadow-lg">
                  🎉 She Said Yes! 🎉
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div className="text-8xl animate-bounce-slow">💐🌹💝🌹💐</div>

                <h3 className="text-5xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                  You Made Me The
                  <br />
                  Happiest Person!
                </h3>

                <div className="space-y-4 text-gray-700">
                  <p className="text-2xl font-semibold leading-relaxed">
                    Every moment with you feels like magic ✨
                  </p>
                  <p className="text-xl leading-relaxed">
                    You light up my world in ways I never imagined possible.
                    <br />
                    Your smile, your laugh, your love... everything about you
                    <br />
                    makes every day feel like Valentine's Day. 💕
                  </p>
                  <p className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-red-500 bg-clip-text text-transparent mt-6">
                    I love you more than words can say! 💖
                  </p>
                </div>

                <div className="flex gap-4 justify-center text-6xl animate-pulse-slow">
                  🌸 🌺 🌷 🌹 💐
                </div>

                <div className="pt-4">
                  <p className="text-sm text-gray-500 italic">
                    Forever yours, always and forever 💑
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
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
