// import Image from "next/image";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import HomeCarousel from "../../components/HomeCarousel";
import { Flex, Container, Text } from "@mantine/core";

export default function Home() {
  return (
    <>
      <Header />
      <Container fluid>
        <Flex h={"20%"}>
          <HomeCarousel />
        </Flex>
        <Flex h={"10rem"}>
          <Flex direction="row" h={"100%"} w={"100%"} justify={"space-between"}>
            <Flex
              w={"15%"}
              justify={"center"}
              align={"center"}
              className="border-8"
            >
              <Text>ELECTRONICS</Text>
            </Flex>
            <Flex
              w={"15%"}
              justify={"center"}
              align={"center"}
              className="border-8"
            >
              <Text>FURNITURE</Text>
            </Flex>
            <Flex
              w={"15%"}
              justify={"center"}
              align={"center"}
              className="border-8"
            >
              <Text>TOYS</Text>
            </Flex>
            <Flex
              w={"15%"}
              justify={"center"}
              align={"center"}
              className="border-8"
            >
              <Text>HOME APPLIANCES</Text>
            </Flex>
            <Flex
              w={"15%"}
              justify={"center"}
              align={"center"}
              className="border-8"
            >
              <Text>CLOTHING</Text>
            </Flex>
          </Flex>
        </Flex>
      </Container>
      {/* <Footer /> */}
    </>
  );
}
