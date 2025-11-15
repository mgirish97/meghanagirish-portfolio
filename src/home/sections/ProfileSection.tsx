import profile from "../../assets/profile.jpeg"
import {Center, Container, Image} from "@mantine/core";

export const ProfileSection = () => {

    return (
      <>
        <Container p={"md"}>
          <Center>
            <Image radius={"100"} src={profile} h={300} w={300} />
          </Center>
          <h1>Hi, I'm Meghana Girish</h1>
        </Container>
      </>
    );
}