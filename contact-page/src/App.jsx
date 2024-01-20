import { useState } from "react";
import Contact from "./components/Contact";
function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Contact />
        </>
    );
}

export default App;
