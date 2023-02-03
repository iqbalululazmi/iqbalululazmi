import { useEffect, useState } from 'react'
import { ArrowCircleUpIcon } from '@heroicons/react/solid'
import { ButtonToScroll } from './Button'

const ScrollButton = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop
    if (scrolled > 300) {
      setVisible(true)
    } else if (scrolled <= 300) {
      setVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    console.log('window.innerHeight', window.innerHeight)
    window.addEventListener('scroll', toggleVisible)
  }, [])

  return (
    <ButtonToScroll>
      <ArrowCircleUpIcon onClick={scrollToTop} style={{ display: visible ? 'inline' : 'none' }} />
    </ButtonToScroll>
  )
}

export default ScrollButton
