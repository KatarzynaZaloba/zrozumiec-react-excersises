import {LikesCounter} from "./components/LikesCounter.jsx";
import {Plot} from "./components/Plot.jsx";
import {Form} from "./components/Form.jsx";

function App() {

    return (
        <>
            <h1>
                Gwiezdne wojny V
            </h1>
            <h2>
                Rok produkcji: 1980
            </h2>
            <LikesCounter/>
            <Plot/>
            <Form/>
        </>
    );
}

export default App;