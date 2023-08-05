"use client";

import { useUserContext } from "@/contexts/user-context";
import { Container, Navbar, Button } from "react-bootstrap";
import { useRouter, usePathname } from "next/navigation";

import Logo from "@/public/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

export const NavbarAuth = () => {
  const router = useRouter();
  const routerPathname = usePathname();
  const { user, setUser, isLogin, setIsLogin } = useUserContext();

  const pushModal = () => {
    router.push("/authentication/modal-login");
  };

  const handleSetUser = () => {
    setUser({
      name: "John",
      age: 10,
    });
    setIsLogin(true);
  };

  console.log("user navbar", user);
  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <Link href="/">
              <Image src={Logo} width={100} height={70} alt="Logo Brand" />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="btn-groups">
            <Button variant="outline-dark btn-groups-child" onClick={pushModal}>
              Login
            </Button>
            <Button variant="dark btn-groups-child" onClick={handleSetUser}>
              Register
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};


export const NavbarUser = () => {
  return (
    <h1>Navbar user</h1>
  )
}