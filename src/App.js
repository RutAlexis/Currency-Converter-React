import List from "./List";
import Select from "./Select";
import Paragraph from "./Paragraph";
import Button from "./Button";
import Span from "./Span";
import Input from "./Input";
import './style.css';



function App() {
    return (
        <div className="container body">
            <Paragraph />
            <form>
                <fieldset className="fieldset">
                    <Input />
                    <p>
                        <label>
                            Wybierz walutę:
                            <Select />
                        </label>
                    </p>
                    <Button
                        title="Przelicz" />
                    <Button
                        title="Wyczyść"
                        type="reset" />
                    <Span />
                </fieldset>
            </form>
            <p>Kurs walut na dzień (06.01.2023r.):</p>
            <List/>
        </div>
    )
}

export default App;
