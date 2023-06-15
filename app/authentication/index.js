import Authentication from "./Authentication";
import Wrapper from "@/components/wrapper";
import { NavbarAuth } from "@/components/navbar";
export default function AuthenticationContainer() {
  return (
    <>
      <Wrapper />
      <NavbarAuth />
      <Authentication />
    </>
  );
}
