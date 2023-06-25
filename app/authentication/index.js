import Authentication from "./Authentication";
import Wrapper from "@/components/wrapper";
import { NavbarAuth } from "@/components/navbar";
import { useMediaQuery } from 'react-responsive'

export default function AuthenticationContainer() {
  const isTabletOrMobile = useMediaQuery({ maxWidth: 900 })
  console.log('is tablet or mobile', isTabletOrMobile)
  return (
    <>
      <Wrapper />
      <NavbarAuth />
      <Authentication />
    </>
  );
}
