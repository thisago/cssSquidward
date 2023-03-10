const $ = (x) => document.querySelector(x)
const squidward = $(".squidward")
var looking = 0
var anim = null

const lookingAnimation = (
  increment = 0.01,
  invertDelay = 50,
  negative = false,
  stopOnDelay = false
) => {
  // invertDelay = loops to wait to reverse
  var delay = 0
  console.log("run")
  const min = negative ? -1 : 0
  anim = setInterval(() => {
    if (delay > 0) {
      delay -= 1
      console.log(delay)
      if (delay == 0 && stopOnDelay) clearInterval(anim)
      return
    }
    looking += increment
    if (looking > 1 || looking < min) {
      increment *= -1
      delay = invertDelay
      return
    }
    squidward.setAttribute(
      "style",
      `--is-looking: ${
        looking == 0 ? 0 : Math.abs(looking)
      };--looking: ${looking}`
    )
  }, 20)
}

document.addEventListener("keydown", (ev) => {
  let run = 0
  const style = squidward.getAttribute("style") || ""
  switch (ev.key) {
    case "a":
      if (style.indexOf("--looking: -1") == -1) run = -1
      break
    case "d":
      if (style.indexOf("--looking: 1") == -1) run = 1
      break
  }
  if (run) {
    clearInterval(anim)
    lookingAnimation(0.1 * run, 1, true, true)
  }
})

// squidward.setAttribute("style", `--looking: -1`)
// lookingAnimation(0.1, 60, true)
