// export async function createAudioElement(id, src) {
//   return new Promise((resolve, reject) => {
//     const audio = new Audio();
//     audio.src = src;
//     audio.addEventListener("canplaythrough", () => {
//       resolve({ id, audio, playPromise: audio.play() });
//     });
//     audio.addEventListener("error", reject);
//     document.body.appendChild(audio);
//   });
// }
