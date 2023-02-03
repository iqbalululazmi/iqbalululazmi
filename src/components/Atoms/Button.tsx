import styled from 'styled-components'

export const ButtonToScroll = styled.div`
  position: fixed;
  width: 50px;
  bottom: 40px;
  right: 20px;
  height: 50px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #5a88ff;
`

export const Button = ({ children, className }: any) => {
  return (
    <>
      <button
        type="button"
        className={`transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105 hover:shad hover:shadow-xl ${className}`}
      >
        {children}
      </button>
    </>
  )
}
