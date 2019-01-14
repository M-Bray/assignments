import React from 'react'

function Button({ children, style, ...props }) {
  return (
    <button style={style} {...props}>
      {children}
    </button>
  )
}

const styleButton = style => props => (
  <Button style={style} {...props}>
    {props.children}
  </Button>
)

export const OKButton = styleButton({
  backgroundColor: "yellow",
  fontSize: "100px",
})

export const XButton = styleButton({
  backgroundColor: "red",
  fontSize: "100px",
})

// export const OKButton = ({children}) => (
  //   <Button backgroundColor="green">
  //     {children}
  //   </Button>
  // )
  
  export default styleButton({
    backgroundColor: "lightblue",
    fontSize: "100px",
})
