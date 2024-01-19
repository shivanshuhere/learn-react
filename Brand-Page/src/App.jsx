import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <div className="overflow-hidden select-none">
                <Header />
                <Main />
            </div>
        </>
    );
}

export default App;
