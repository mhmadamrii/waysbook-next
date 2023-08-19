import Image from "next/image";

import Logo from "@/public/assets/Logo.png";
import { Buttonable } from "../buttons";

export default function DesktopNavbar() {
  return (
    <div className="navbar-desktop">
      <div>
        <Image src={Logo} width={130} height={80} />
      </div>

      <div>
        <Buttonable variant="outlined" isBtnLogin width={180} height={35}>
          Login
        </Buttonable>
        <Buttonable variant="contained" isBtnRegister width={180} height={35}>
          Register
        </Buttonable>
      </div>
    </div>
  );
}
