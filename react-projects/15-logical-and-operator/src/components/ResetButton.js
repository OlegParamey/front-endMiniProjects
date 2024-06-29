function ResetButton({ onClick, buttonStyle, count }) {
  return (
    count > 0 && (
      <div>
        <button style={buttonStyle} onClick={onClick}>
          Reset
        </button>
      </div>
    )
  )
}

export default ResetButton
