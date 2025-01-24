"use client";

// import dynamic from "next/dynamic";
import dynamic from "next/dynamic";

// import printJS from "print-js";

const printJS = dynamic(() => import("print-js"), { ssr: false });

export default function Print({ outputRef }) {
  // handle print
  console.log(outputRef?.current?.id);

  const handlePrint = () => {
    // printJS({
    //   printable: `${outputRef?.current?.id}`,
    //   type: "html",
    //   targetStyles: ["*"],
    //   style: `
    //     #${outputRef?.current?.id} {
    //       width: 100%;
    //       height: auto; 
    //     }
  
    //     @page {
    //       margin: 0; 
    //     }
  
    //     body {
    //       margin: 0; 
    //     }
    //   `,
    // });
  };

  return (
    <button onClick={() => handlePrint()} className="btnPhotobooth">
      Print
    </button>
  );
}
