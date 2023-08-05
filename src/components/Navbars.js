"use client";

import { Container, Navbar, Button } from "react-bootstrap";
import { useRouter, usePathname } from "next/navigation";
import Logo from "@/public/assets/Logo.png";
import Image from "next/image";
import Link from "next/link";

export const NavbarAdmin = () => {
  const router = useRouter();
  const routerPathname = usePathname();
  console.log(routerPathname);
  console.log("router", router);

  const pushModal = () => {
    router.push("/authentication/modal-login");
  };
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
            <Button variant="dark btn-groups-child">Register</Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
