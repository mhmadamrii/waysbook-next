import Image from "next/image";
import PreLoader from "@/public/loader.svg"

export default function Loading() {
  return (
    <div>
      <div>
        <Image src={PreLoader} width="auto" height="auto" alt="preloader" />
      </div>
    </div>
  );
}
