import './App.module.css';

import PeoplePage from "../PeoplePage/PeoplePage";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Header from "../../components/Header/Header";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import style from './App.module.css'
import PersonPage from "../PersonPage/PersonPage";
import FavoritesPage from "../FavoritesPage/FavoritesPage";
import SearchPage from "../SearchPage/SearchPage";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <div className={style.wrapper}>
                    <Header/>
                    <Routes>
                        <Route path="/"element={<HomePage/>}/>
                        <Route path="/people"element={<PeoplePage/>}/>
                        <Route path="/people/:id" element={<PersonPage/>}/>
                        <Route path="/favorites" element={<FavoritesPage/>}/>
                        <Route path="/search" element={<SearchPage/>}/>
                        <Route path="/fail" element={<ErrorMessage/>}/>
                        <Route path="/not-found" element={<NotFoundPage/>}/>
                        <Route path="*" exact='true' element={<NotFoundPage/>}/>
                    </Routes>
                </div>
            </BrowserRouter>


        </>
    )
}

export default App;
