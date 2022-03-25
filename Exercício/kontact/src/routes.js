import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import { GlobalProvider } from './contexts/GlobalContext';
import { ContactsProvider } from './contexts/ContactsContext';
import useGlobal from './hooks/useGlobal';
import Home from "./pages/Home/Home";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function ProtectedRoutes(props) {
  const { token } = useGlobal();

  return (
    <Route
      render={() => (token ? props.children : <Redirect to="/" />)}
    />
  );
}

function Routes() {
  return (
    <Router>
      <Switch>
        <GlobalProvider>
          <Route path={['/', 'login']} exact component={Login} />
          <Route path={['/', 'register']} exact component={Register} />
        </GlobalProvider>
        <ProtectedRoutes>
          <ContactsProvider>
            <Route path='/home' exact component={Home} />
          </ContactsProvider>
        </ProtectedRoutes>
      </Switch>
    </Router>
  );
}

export default Routes;

