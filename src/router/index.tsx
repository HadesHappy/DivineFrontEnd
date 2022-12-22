import { useRoutes } from "react-router-dom";
import Contact from '../pages/Contact'
import Home from "../pages/Home";
import Loan from "../pages/Loan";
import Nft from "../pages/Nft";
import Team from "../pages/Team";
import Layout from "../components/layout";
import Deposit from "../pages/Deposit";
import Referal from "../pages/Referal";

export default function Router() {
  const router = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '', element: <Home /> },
        { path: 'home', element: <Home /> },
        { path: 'loan', element: <Loan /> },
        { path: 'team', element: <Team /> },
        { path: 'nft', element: <Nft /> },
        { path: 'contact', element: <Contact /> },
      ]
    },
    {
      path: '/deposit',
      element: <Deposit />
    },
    {
      path: '/invite',
      element: <Referal />
    }
  ]
  return useRoutes(router);
}