export const scrollToCalculator = () => {
  const intervalId = setInterval(() => {
    const element = document.getElementById('calculator')

    console.log('wer')

    if (!element) {
      return
    } else {
      clearInterval(intervalId)
    }

    console.log('element')

    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  }, 50)
}
