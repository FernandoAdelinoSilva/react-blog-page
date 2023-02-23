import { Header } from './components/header';
import { Post } from './Post';

import './global.css';

export function App() {
  return (
    <>
      <Header />
      <Post author="Fernando Silva" content="Text_1" />
      <Post author="Fernando Silva" content="Text_2" />
    </>
  );
}
