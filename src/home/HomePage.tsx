import {ProfileSection} from "./sections/ProfileSection.tsx";
import {AppShell, Button, Divider, Group} from "@mantine/core";
import {AboutMeSection} from "./sections/AboutMeSection.tsx";
import {ProjectSection} from "./sections/ProjectSection.tsx";
// import {useState} from "react";

export const HomePage = () => {
    // const [opened, setOpened] = useState(false);
    return (
        <>
            <AppShell
                header={{ height: 60 }}
                padding={"xs"}
                // navbar={{ width: 250, breakpoint: "sm", collapsed: { mobile: !opened } }}
            >
                <AppShell.Header>
                    <Group h="100%" px="md" justify="flex-end">
                        {/*<Burger opened={opened} onClick={() => setOpened((o) => !o)} hiddenFrom="sm" />*/}
                        <Group gap="lg" justify={"flex-end"}>
                            <Button>Home</Button>
                            <Button>About</Button>
                            <Button>Contact</Button>
                        </Group>
                    </Group>
                </AppShell.Header>
                <AppShell.Main style={{
                    width: "100vw"
                }}>
                    <ProfileSection/>
                    <Divider />
                    <AboutMeSection/>
                    <Divider />
                    <ProjectSection/>
                </AppShell.Main>

            </AppShell>


        </>
    )
}