import App from './components/App';
import Welcome from '../Welcome';
import Chunk1 from '../Chunk1';
import Chunk2 from '../Chunk2';

export default {
  path: '/',
  component: App,
  indexRoute: { onEnter: (nextState, replace) => replace('welcome') },
  childRoutes: [
    Welcome,
    Chunk1,
    Chunk2
  ]
};
