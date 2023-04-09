import Image from "next/image";
import { useState } from "react";
import LogoIcon from '&/logo/logoOne.png'
function FeatureCentralBox({ title, content }) {
  const [show, setShow] = useState(false);
  return (
    <div className="px-3 px-lg-0 centerBoxMain d-flex justify-content-center align-items-center">
      <div className={`box central-box ${show ? "show" : ""}`}>
        <span className="closeable" onClick={() => setShow(!show)}>
          <Image src={show ? '/assets/Home/minus.svg' : '/assets/Home/plus.svg'} alt="Vendor Data Acquisitions" />
        </span>
        {!show && (
          <div className="logo">
            <Image src={LogoIcon} width={120} height={120} />
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
