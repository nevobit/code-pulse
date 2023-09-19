import React from 'react'
import ReactIcon from 'assets/images/react.svg'
// import JavascriptIcon from 'assets/images/javascript.svg'
// import TypescriptIcon from 'assets/images/typescript.svg'

const ProgrammingLanguageList = () => {
  
  const style = {
    padding: '10px',
    height: '50px',
    width: '50px'
  }
  return (
    <div>
      Hola
      <div style={style}>
        <ReactIcon />
      </div>
      {/* <JavascriptIcon style={style} /> */}
      {/* <TypescriptIcon style={style} /> */}

    </div>
  )
}

export default ProgrammingLanguageList
