import {Container, Group, Text} from "@mantine/core";

export const AboutMeSection = () => {
    return (
        <Container p={"md"}>
            <h2>ABOUT ME</h2>
            <Group justify={"space-between"}>
                <Container>
                    <Text>Summary</Text>
                </Container>
                <Container>
                    <Text>Skills</Text>
                </Container>

            </Group>
        </Container>
    )
}