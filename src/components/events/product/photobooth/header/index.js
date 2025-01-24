import "./header-photobooth.scss";
import Image from "next/image";

export default function Header({ eventData, title }) {
  return (
    <header
      className={`common flex-row-center ${
        eventData.screen === "responsive"
          ? "ResponsiveDesignHeaderPhotobooth"
          : "VerticalDesignHeaderPhotobooth"
      }`}
    >
      {/* logo */}
      <div className="flex-row-center logo">
        <Image src={eventData.logo} alt="logo" width={50} height={50} />
      </div>

      {/* title */}
      <h1 className="title">{title}</h1>
    </header>
  );
}
