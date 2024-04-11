import './App.css';
import Dropdown from "./components/Dropdown";

function App() {
    return (
        <div className="app">
            <div className="dropdown-container">
                <h3>Single selected option:</h3>
                <Dropdown
                    title="Age"
                    options={["Twenty", "Twenty one", "Twenty one and a half"]}
                    multiSelect={false}
                    width="300px"
                    placeHolder="Select Age"
                />
            </div>
            <div className="dropdown-container">
                <h3>Multiple selected options:</h3>
                <Dropdown
                    title="Tag"
                    options={["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard", "Steve Jobs", "Andy Jassy", "Jeff Bezos"]}
                    multiSelect={true}
                    width="600px"
                    placeHolder="Select name(s)"
                />
            </div>
        </div>
    );
}

export default App;
