import React from "react"

interface Props {
  text?: string
}

const TextComponent: React.FC<Props> = ({ text }) => {
  return <span>{text}</span>
}

export default TextComponent
