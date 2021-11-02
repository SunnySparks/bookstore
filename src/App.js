import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';
import Category from './components/Categories';
import Book from './components/Books';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Book</Link>
            </li>
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/">
            <Book />
          </Route>
          <Route path="/Categories">
            <Category />
          </Route>
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
