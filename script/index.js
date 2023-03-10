const $ = (x) => document.querySelector(x)
const squidward = $(".squidward")
const lookingAnimation = () => {
  document.addEventListener("DOMContentLoaded", () => {
  
    var increment = 0.01
    const invertDelay = 50 // loops to wait to reverse
    var delay = 0
    var looking = 0
    setInterval(() => {
      if (delay > 0) {
        delay -= 1
        return
      }
      looking += increment
      if (looking > 1 || looking < 0) {
        increment *= -1
        delay = invertDelay
        return
      }
      squidward.setAttribute("style", `--looking: ${looking}`)
    }, 20)
  })
}
// squidward.setAttribute("style", `--looking: 0`)
lookingAnimation()
