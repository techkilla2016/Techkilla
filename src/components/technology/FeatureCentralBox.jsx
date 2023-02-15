import Image from "next/image";
import { useState } from "react";
import LogoIcon from '../../../public/Assets/Home/logo-icon.svg'
import Minus from '../../../public/Assets/Home/minus.svg'
import Plus from '../../../public/Assets/Home/plus.svg'
function FeatureCentralBox({ title, content }) {
  const [show, setShow] = useState(false);
  return (
    <div className="px-3 px-lg-0 centerBoxMain d-flex justify-content-center align-items-center">
      <div className={`box central-box ${show ? "show" : ""}`}>
        <span className="closeable" onClick={() => setShow(!show)}>
          <Image src={show ? Minus : Plus} />
        </span>
        {!show && (
          <div className="logo">
            <Image src={LogoIcon} />
          </div>
        )}
        {show && (
          <div className="w-100 content">
            <div className="feature-list">
              <div>Vendor Data Acquisitions</div>
              <hr />
              <div>Data Scrubbing</div>
              <hr />
              <div>Digital Twin Technology</div>
              <hr />
              <div>AI/ML Algorithms</div>
              <hr />
              <div>Live Monitoring</div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
export default FeatureCentralBox;
