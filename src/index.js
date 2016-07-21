// at top
import { Router, browserHistory } from 'react-router';
import routes from './routes';

// replace ReactDOM.render with:
// entry point that just renders app
// could be used for routing at some point
ReactDOM.render(
  <Router history={browserHistory} routes={routes} />
  , document.getElementById('main'));
