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
