import { useParams } from 'react-router';
import Hard from './Hard';
import NavBar from './NavBar';
import Normal from './Normal';

export default function Game() {
  const { difficulty } = useParams();
  let difficultyName = difficulty;

  return (
    <>
      <NavBar />
      {difficultyName == 'normal' ? <Normal /> : <Hard />}
    </>
  );
}
