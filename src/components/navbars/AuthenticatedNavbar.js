import Image from "next/image";
import Cart from "@/public/assets/cart.svg";
import Logo from "@/public/assets/Logo.png";
import DefaultAvatar from "@/public/assets/avatar.png";
import { IconButton } from "@mui/material";
import { useRouter } from "next/navigation";

export default function AuthenticatedNavbar() {
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
        <IconButton>
          <Image src={Cart} width={30} height={30} alt="cart" />
        </IconButton>
        <IconButton>
          <Image src={DefaultAvatar} width={50} height={50} alt="cart" />
        </IconButton>
      </div>
    </div>
  );
}
