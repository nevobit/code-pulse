import React, { PropsWithChildren } from 'react'

const CustomThemeProvider = (props: PropsWithChildren) => {
  
    return (
    <div>
      {props.children}
    </div>
  )
}

export default CustomThemeProvider
