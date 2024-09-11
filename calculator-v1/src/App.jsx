import Display from "./components/Display";
import styles from "./App.module.css";
import ButtonsContainer from "./components/ButtonsContainer";

function App() {
  return (
    <div classNameName={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
      
    </div>
  );
}

export default App;
