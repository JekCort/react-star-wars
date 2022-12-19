import './App.module.css';

import PeoplePage from "../PeoplePage/PeoplePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Header from "../../components/Header/Header";

import style from './App.module.css'
const App = () => {
    return (
        <>
        <BrowserRouter>
            <div className={style.wrapper}>
                <Header/>
                <Routes>
                    <Route path="/" exact='true' element={<HomePage/>}/>
                    <Route path="/people" exact='true' element={<PeoplePage/>}/>
                </Routes>
            </div>
        </BrowserRouter>


</>
)
}

export default App;
