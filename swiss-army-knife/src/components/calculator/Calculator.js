import React from "react";
import styles from './Calculator.module.css'

const Calculator = () => {
  return (
    <div className={styles.calculator}>
      <Display />

      <div>
        <NumAndClear />
        <Math />
      </div>
    </div>
  );
};

/**
 * The Display component displays the current value of the calculator.
 * 
 */

function Display(props) {

    let{
        currentValue
    } = props;

  return <div className={styles.display}> {currentValue}</div>;
}

/**
 * 
 * @returns Displays all the numbers you can add.
 */

function NumAndClear() {
    let arrayofNumAndClears = [
        1,2,3,4,5,6,7,8,9,0,'C'
    ];
  return <ul className={styles.numAndClear}>{arrayofNumAndClears.map((el) => {
    return <li className={styles.numAndClearItem}>{el}</li>
  })}</ul>;
}



/**
 * Computes the numbers you entered and the symbol.
 * 
 */
function Math() {
  return <div>Math</div>;
}
export default Calculator;
