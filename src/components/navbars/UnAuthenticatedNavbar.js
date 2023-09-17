import Image from "next/image";
import Logo from "@/public/assets/Logo.png";

import { useRouter } from "next/navigation";
import { Buttonable } from "../buttons";

export default function UnAuthenticatedNavbar() {
  const router = useRouter();
  const handleOpenLogin = () => {
    router.push("?modal_login=true");
  };

  const handleOpenRegister = () => {
    router.push("?modal_register=true");
  };

  return (
    <div className="navbar-desktop">
      <div>
        <Image src={Logo} width={130} height={80} alt="logo" />
      </div>

      <div>
        <Buttonable
          variant="outlined"
          isBtnLogin
          width={180}
          height={35}
          onClick={handleOpenLogin}
        >
          Login
        </Buttonable>
        <Buttonable
          variant="contained"
          isBtnRegister
          width={180}
          height={35}
          onClick={handleOpenRegister}
        >
          Register
        </Buttonable>
      </div>
    </div>
  );
}
