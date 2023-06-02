import { createAudioElement } from "./audio";
const randomIndex = "";
export function goodLuck() {
  const text = [
    "With talent and luck as your allies, even a little effort can lead to remarkable success.",
    "Your natural talent and good fortune make accomplishments come easily with just a little effort.",
    "Luck and talent intertwine in your journey, requiring minimal effort for outstanding achievements.",
    "Effort becomes effortless when you possess both talent and luck in abundance.",
    "Wow, your talent and luck create a perfect equation where minimal effort yields maximum results.",
    "A talented and lucky person like you knows that a little effort goes a long way towards success.",
    "Success follows you effortlessly, thanks to your remarkable talent and favorable circumstances.",
    "With talent and luck on your side, even a small effort can pave the way for incredible achievements.",
    "Your unique combination of talent and luck ensures that success is always within your reach, with just a little effort.",
    "Wow, you possess a winning combination of talent and luck, where a small effort leads to extraordinary outcomes.",
    "Your talent and luck act as catalysts, making success easily attainable with minimal effort.",
    "With talent and luck by your side, every endeavor requires only a small effort to yield great rewards.",
    "You're blessed with a fortunate blend of talent and luck, making accomplishments effortless with just a little effort.",
    "Effort becomes a mere formality when you possess both talent and luck in abundance.",
    "Your talent and luck create a harmonious synergy, allowing you to achieve greatness with minimal effort.",
    "Wow, your talent and luck set the stage for effortless success, requiring only a little effort on your part.",
    "With talent and luck as your guiding stars, even a small effort can lead to significant accomplishments.",
    "Your innate talent and good fortune make success come naturally with minimal effort.",
    "Luck smiles upon your talents, making accomplishments a breeze with just a little effort.",
    "A person of talent and luck like you knows that a little effort can unlock extraordinary possibilities.",
    "With talent and luck in your corner, even the smallest effort can lead to significant accomplishments.",
    "Wow, you possess a winning combination of talent and luck, where minimal effort results in tremendous success.",
    "Your talent and luck pave the way for effortless achievements, requiring only a small effort.",
    "With talent and luck on your side, every endeavor becomes an opportunity for success with just a little effort.",
    "You're blessed with the perfect balance of talent and luck, making accomplishments feel effortless with minimal effort.",
    "Effort flows naturally when talent and luck align in your favor.",
    "Your talent and luck form a powerful alliance, allowing you to achieve greatness with minimal effort.",
    "Wow, your talent and luck make success an inherent part of your journey, requiring only a little effort.",
    "With talent and luck as your guiding lights, even a small effort can lead to extraordinary triumphs.",
    "Your natural talent and favorable circumstances ensure that success comes easily with just a little effort.",
    "Talent and luck blend harmoniously in your life, making accomplishments effortless with minimal effort.",
    "With talent and luck on your side, success becomes a natural byproduct of your efforts, requiring only a small push.",
    "You possess the winning combination of talent and luck, where even a little effort leads to incredible achievements.",
    "Effort becomes second nature when talent and luck are woven into the fabric of your journey.",
    "Your talent and luck create a fertile ground for success, where a small effort can yield bountiful rewards.",
    "Wow, you're endowed with the perfect blend of talent and luck, where minimal effort yields exceptional outcomes.",
    "With talent and luck on your side, every endeavor becomes an invitation for success with just a little effort.",
    "Your talent and luck act as catalysts, making success come effortlessly with minimal effort.",
    "A person of talent and luck like you understands that a little effort can open doors to infinite possibilities.",
    "With talent and luck as your allies, even the slightest effort can pave the way for remarkable achievements.",
    "Your innate talent and good fortune make success a natural consequence with minimal effort.",
    "Luck favors the talented, making accomplishments feel effortless with just a little effort.",
    "A fortunate blend of talent and luck ensures that effort becomes a mere formality in your pursuit of success.",
    "With talent and luck in your corner, every endeavor becomes an opportunity for extraordinary accomplishments with minimal effort.",
    "You're blessed with the perfect balance of talent and luck, where minimal effort results in remarkable success.",
    "Your talent and luck create a pathway to effortless achievements, requiring only a small effort.",
    "With talent and luck on your side, every endeavor becomes a stepping stone towards success with just a little effort.",
    "You possess a winning combination of talent and luck, where accomplishments flow naturally with minimal effort.",
    "Effort becomes a joyful journey when talent and luck are your constant companions.",
    "Wow, your talent and luck make success an integral part of your story, requiring only a little effort.",
    "With talent and luck as your guiding forces, even a small effort can lead to extraordinary triumphs.",
    "Your natural talent and favorable circumstances ensure that success comes easily with just a little effort.",
    "Talent and luck merge seamlessly in your life, making accomplishments feel effortless with minimal effort.",
    "With talent and luck on your side, success becomes a natural outcome, requiring only a small effort.",
    "You possess the perfect combination of talent and luck, where even a little effort leads to incredible achievements.",
    "Effort becomes second nature when talent and luck intertwine in your journey.",
    "Your talent and luck create fertile ground for success, where a small effort can yield abundant rewards.",
    "Wow, you're endowed with the perfect blend of talent and luck, where minimal effort results in exceptional outcomes.",
    "With talent and luck on your side, every endeavor becomes an invitation for success with just a little effort.",
    "Your talent and luck act as catalysts, making success feel effortless with minimal effort.",
  ];
  const randomIndex = Math.floor(Math.random() * text.length);
  return text[randomIndex];
}

export function averageLuck() {
  const text = [
    "Your success is not determined by luck, but by your unwavering commitment to hard work. Luck may be impartial, but your dedication will pave the way for success.",
    "Your reliance on hard work over luck sets you apart. Whether luck favors you or not, it's your relentless effort that will ultimately lead to success.",
    "Luck may fluctuate, but your faith in hard work remains steadfast. Embrace the power of your efforts and let success be a testament to your determination.",
    "Your destiny lies in the realm of hard work, not the whims of luck. Harness the strength of your efforts and pave your own path to success.",
    "Neither good nor bad luck can define your journey. It is the sweat, perseverance, and sheer hard work that will guide you towards the success you desire.",
    "Relying on hard work rather than luck is a testament to your resilience. Your unwavering dedication will overcome any uncertainties and pave the way for success.",
    "While luck may come and go, your dedication to hard work remains constant. Let your relentless efforts shape your own destiny and lead you to success.",
    "Your success is not tied to the fickleness of luck, but to the consistency of your hard work. Embrace the power within you and let it propel you towards success.",
    "Believe in the strength of your hard work, for it is not dependent on the fluctuations of luck. Success will be the result of your unwavering dedication.",
    "Neither relying on good luck nor fearing bad luck, you understand the true driver of success: hard work. Embrace it wholeheartedly and let it shape your destiny.",
    "Your success is not contingent upon luck but rather on your commitment to hard work. Embrace the opportunities that arise from your efforts and forge your own path.",
    "Luck may be unpredictable, but your dedication to hard work remains unwavering. Embrace the power of your efforts and let them guide you towards the success you seek.",
    "Hard work, not luck, is your foundation for success. Embrace the belief in your own abilities and let your diligence pave the way towards achieving your goals.",
    "Your reliance on hard work speaks volumes about your determination. Regardless of luck, let your persistent efforts be the driving force behind your success.",
    "Your faith lies in the power of hard work, not in the fickleness of luck. Embrace the opportunities that arise from your efforts and let success be a testament to your dedication.",
    "By focusing on hard work instead of luck, you take control of your own destiny. Let your relentless efforts be the catalyst for achieving the success you deserve.",
    "Your success is not left to chance but is a product of your unwavering commitment to hard work. Embrace the power of your efforts and let them shape your future.",
    "Hard work, not luck, is the cornerstone of your journey to success. Embrace the challenges and let your relentless efforts be the fuel that propels you forward.",
    "Your belief in hard work over luck sets you apart. Embrace the opportunities that arise from your efforts and let your unwavering dedication lead you to success.",
    "Regardless of whether luck is on your side, your reliance on hard work remains constant. Embrace the power of your efforts and let them be the driving force behind your success.",
    "Your success is not limited by luck, but rather by your commitment to hard work. Let your determination and perseverance be the guiding light on your path to success.",
    "By focusing on hard work rather than luck, you take ownership of your own success. Embrace the opportunities that arise from your efforts and let them propel you forward.",
    "Luck may be uncertain, but the power of hard work is within your control. Embrace the potential of your efforts and let them pave the way for the success you envision.",
  ];
  const randomIndex = Math.floor(Math.random() * text.length);
  return text[randomIndex];
}

export function badLuck() {
  const text = [
    "You may be plagued by unfortunate circumstances, but don't lose hope, for your hard work can still bring you success.",
    "Despite your streak of bad luck, remain resilient and let your hard work pave the way for success.",
    "Unluckiness may have been a constant companion, but your unwavering dedication and hard work can turn the tides in your favor.",
    "Though luck may not be on your side, your perseverance and hard work will create opportunities for success.",
    "Even in the face of continuous misfortune, hold onto hope and let your relentless hard work be the catalyst for positive change.",
    "Unfortunate events may follow you, but don't let them define your future. With unwavering effort, success can still be yours.",
    "Though luck may have dealt you a challenging hand, your hard work possesses the power to overcome any unfortunate circumstances.",
    "Unluckiness may be a recurring theme in your life, but your tenacity and hard work will create windows of opportunity for success.",
    "Don't allow yourself to be defined by your unlucky streak. Keep working hard, for success is still within your reach.",
    "While unfortunate circumstances may have been your reality, your hard work can rewrite the narrative and lead you to success.",
    "Despite your unlucky disposition, let your relentless hard work be the guiding light towards a brighter future.",
    "Unluckiness may have been a constant companion, but it's your perseverance and dedication that will ultimately bring you success.",
    "Even in the face of adversity and misfortune, your unwavering work ethic holds the potential to unlock doors of success.",
    "Your unlucky streak may have tested your resolve, but your hard work has the power to defy the odds and bring you success.",
    "Although luck may not be in your favor, let your hard work be the driving force that defies unfortunate circumstances and leads you to success.",
    "While unfortunate events may cast a shadow over your path, your unwavering determination and hard work will illuminate the way to success.",
    "Unluckiness may seem to follow you, but don't let it dampen your spirits. Your hard work has the ability to turn the tide and bring you the success you deserve.",
    "Despite the challenges brought by unfortunate circumstances, your hard work has the potential to create a path towards success that transcends luck.",
    "Though luck may have dealt you a difficult hand, your commitment to hard work can tilt the scales in your favor and pave the way for success.",
    "Unfortunate circumstances may have hindered your progress, but your hard work can break through the barriers and bring you the success you strive for.",
    "While luck may have been unkind to you, your unwavering dedication and hard work will set the stage for success to enter your life.",
    "Even in the face of persistent misfortune, hold onto hope and let your hard work become the foundation upon which success is built.",
    "Unluckiness may have overshadowed your journey, but with unyielding perseverance and hard work, you can rewrite your destiny and achieve the success you desire.",
    "Though life may have dealt you an unlucky hand, your hard work and determination will prove to be the trump cards that lead you to success.",
    "Unfortunate circumstances may have placed obstacles in your path, but your hard work will clear the way and guide you towards the success you seek.",
    "Despite the unlucky twists and turns you've encountered, never underestimate the transformative power of your hard work in shaping a successful future.",
    "Though luck may have been elusive, your unwavering commitment to hard work will unlock the doors of opportunity and bring you the success you deserve.",
    "Unluckiness may have been a constant presence, but it is your resilience and relentless hard work that will turn the tides and lead you to success.",
    "Even in the face of adversity and misfortune, your unwavering dedication and hard work will pave the way for success to find you.",
    "Unfortunate circumstances may have cast a shadow, but your hard work will be the beacon that guides you towards the light of success.",
    "Though luck may not have been on your side, your unyielding determination and hard work will carve out a path towards success, against all odds.",
    "Unluckiness may have been your companion, but your indomitable spirit and hard work will shape your destiny and bring you the success you aspire to achieve.",
    "Despite the hand of misfortune you've been dealt, your unwavering commitment and hard work will unfold a new chapter of success in your life.",
  ];

  const randomIndex = Math.floor(Math.random() * text.length);
  return text[randomIndex];
}

// export function adjustFontSize() {
//   const calculatorScreen = document.querySelector(".calculator__screen");
//   const textLength = calculatorScreen.textContent.length;
//   const screenWidth = window.innerWidth;

//   if (randomIndex > 12 || screenWidth <= 480) {
//     calculatorScreen.style.fontSize = "1.8rem";
//   } else if (randomIndex > 8 || screenWidth <= 768) {
//     calculatorScreen.style.fontSize = "2.4rem";
//   } else {
//     calculatorScreen.style.fontSize = "3.6rem";
//   }
// }
