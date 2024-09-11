import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonsName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <div classNameName={styles.buttonsContainer}>
      {buttonsName.map((buttonsName) => (
        <button
          classNameName={styles.button}
          onClick={() => onButtonClick(buttonsName)}
        >
          {buttonsName}
        </button>
      ))}
    </div>
  );
};

export default ButtonsContainer;
