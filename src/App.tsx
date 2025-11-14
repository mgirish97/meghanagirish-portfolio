import './App.css'
import {MantineProvider} from "@mantine/core";
import {HomePage} from "./home/HomePage.tsx";
import '@mantine/core/styles.css';

function App() {
    return <MantineProvider><HomePage/></MantineProvider>
}

export default App
