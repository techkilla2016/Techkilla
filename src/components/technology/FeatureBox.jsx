import Image from 'next/image'
import { useState } from 'react'

import Minus from '../../../public/Assets/Home/minus.svg'
import Plus from '../../../public/Assets/Home/plus.svg'
function FeatureBox({ title, content }) {
  const [show, setShow] = useState(false)
  return (
    <div
      className={`box ${show ? 'show' : ''} ${title === "Energy Utilizations" ? 'my-lg-4 my-0' : null} ${!content ? 'no-content' : ''}`}
    >
      <span className="closeable" onClick={() => setShow(!show)}>
        <Image src={show ? Minus : Plus} alt="toggleable Button" />
      </span>
      {!show && title && <div className={`w-100 title `} >{title}</div>}
      {show && content && <div className="w-100 content" onClick={() => setShow(!show)}>{content} </div>}
    </div>
  )
}
export default FeatureBox
