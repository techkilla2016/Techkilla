"use client";
import { useRouter } from "next/navigation";
import "./backbtn.scss";
import { TbArrowBackUpDouble } from "react-icons/tb";

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button className="back-button" onClick={handleBack}>
      <TbArrowBackUpDouble />
    </button>
  );
};

export default BackButton;
