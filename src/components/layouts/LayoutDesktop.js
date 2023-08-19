import { Typography } from "@mui/material";
import { Typographies } from "../buttons";

export default function LayoutDesktop() {
  return (
    <>
      <div className="layout-desktop-thumbnails">
        <Typographies size={50} isBold>With Us, you can shop online & help</Typographies>
        <Typographies size={50} isBold>Save our high streen at the same time</Typographies>
      </div>
    </>
  );
}
