function ButtonPage({ onClick, option }) {
  return option === 'next' ? (
    <button className="page-button" onClick={onClick}>
      Next Card
    </button>
  ) : (
    <button className="page-button" onClick={onClick}>
      Previous Card
    </button>
  )
}
export default ButtonPage
