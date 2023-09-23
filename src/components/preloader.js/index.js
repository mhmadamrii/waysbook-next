import Image from "next/image";
import PreLoader from "@/public/loader.svg";

export default function GeneralPreloader() {
  <center>
    <div className="preloader">
      <div>
        <Image src={PreLoader} width="auto" height="auto" alt="preloader" />
      </div>
    </div>
  </center>;
}
