import * as React from "react"

const SvgComponent = (props) => (
  <svg
    width={50}
    height={50}
    fill="none"
    {...props}
  >
    <path fill="#fff" d="M0 0h400v400H0z" />
  </svg>
)

export default SvgComponent
