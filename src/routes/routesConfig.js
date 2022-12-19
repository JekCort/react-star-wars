import HomePage from "../containers/HomePage/HomePage";
import PeoplePage from "../containers/PeoplePage/PeoplePage";

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

];
export default  routeConfig