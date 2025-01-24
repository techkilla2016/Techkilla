"use client";
import { useRouter } from "next/navigation";
import "./backbtn.scss";

const BackButton = ({ label = "↩ Back" }) => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button className="back-button" onClick={handleBack}>
      {label}
    </button>
  );
};

export default BackButton;
