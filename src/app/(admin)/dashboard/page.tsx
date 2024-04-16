"use client";

import { useEffect } from "react";

export default function DashBoard() {
  useEffect(() => {
    for (let i = 0; i < 5; i++) {
      console.log(`Effect ${i}`);
    }
  }, []); // Empty dependency array to run the effect only once
  return <div> this is a DashBoard Page</div>;
}
