import Profil from "../components/Admin/pages/Profil";
import Dashboard from "../components/Admin/pages/Dashboard";
import Categories from "../components/Admin/pages/Categories";
const routes = [
    {path: '/admin', exact: true, name: 'Admin'},
    {path: '/admin/dashboard', exact: true, name: 'Dashboard', component: Dashboard},
    {path: '/admin/categories', exact: true, name: 'Categories', component: Categories},
    {path: '/admin/profil', exact: true, name: 'Profile', component: Profil},
];

export default routes;