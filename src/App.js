// import logo from './logo.svg';
import './App.css';
import CartContaier from './components/CartContainer/CartContaier';
import ExerciseDetails from './components/ExerciseDetails/ExerciseDetails';

function App() {
  return (
    <div className='container'>
      <CartContaier></CartContaier>
      <ExerciseDetails></ExerciseDetails>
    </div>
  );
}

export default App;
