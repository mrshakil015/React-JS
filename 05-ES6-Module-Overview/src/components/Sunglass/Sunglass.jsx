import React from 'react';
import './Sunglass.css';
import Watch from '../Watch/Watch';
import { add, multiply, divideTheFirstNUmberBySecond as divide } from '../../Utils/calculate';
// import add from '../../Utils/calculate';


const Sunglass = () => {
    const [first, second] = [55,200];
    const sum = add(first, second);
    const mult = multiply(first, second);
    const div = divide(first, second);

    return (
        <div>
            <Watch></Watch>            
        </div>
    );
};

export default Sunglass;