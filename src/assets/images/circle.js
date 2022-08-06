import * as React from "react"

const SvgComponent = (props) => (
    <svg
        width={400}
        height={400}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path fill="#fff" d="M0 0h400v400H0z" />
        <circle cx={200} cy={200} r={90} stroke="#FF4F4F" strokeWidth={20} />
    </svg>
)

export default SvgComponent