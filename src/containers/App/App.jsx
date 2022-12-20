import './App.module.css';

import PeoplePage from "../PeoplePage/PeoplePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Header from "../../components/Header/Header";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

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
                    <Route path="/not-found" exact='true' element={<NotFoundPage/>}/>
                    <Route path="*" exact='true' element={<NotFoundPage/>}/>
                </Routes>
            </div>
        </BrowserRouter>


</>
)
}

export default App;
