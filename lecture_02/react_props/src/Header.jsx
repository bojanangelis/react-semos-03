// // rafce  --> ES7 snippets React Arrow functional component create it fast :D
// import React from 'react'

// const Header = (props) => {
//   console.log('props here -> ', props.title)

//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <h2>{props.subtitle}</h2>
//     </div>
//   )
// }

// export default Header

import React from 'react'

const Header = ({ title, subtitle }) => {
  console.log('props here -> ', title)

  return (
    <div>
      <h2>{propstitle}</h2>
      <h2>{subtitle}</h2>
    </div>
  )
}

export default Header
