import HomePage from "../containers/HomePage/HomePage";
import PeoplePage from "../containers/PeoplePage/PeoplePage";
import PersonPage from "../containers/PersonPage/PersonPage";
import FavoritesPage from "../containers/FavoritesPage/FavoritesPage";

const routeConfig = [
    {
        path: '/',
        exact: true,
        element: HomePage
    },
    {
        path: '/people',
        exact: 'true',
        element: <PeoplePage/>
    },
    {
        path: '/people/:id',
        exact: 'true',
        element: <PersonPage/>
    },
    {
        path: '/favorites',
        exact: 'true',
        element: <FavoritesPage/>
    },
];
export default  routeConfig