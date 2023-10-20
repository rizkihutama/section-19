import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import { useSelector } from 'react-redux';

export default function App() {
  const authState = useSelector((state) => state.auth);

  // const dispatch = useDispatch();

  return (
    <>
      {!authState.isAuthenticated ? (
        <Auth />
      ) : (
        <>
          <Header />
          <Counter />
        </>
      )}
    </>
  );
}
