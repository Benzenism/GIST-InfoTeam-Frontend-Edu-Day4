import "./Calculator.css";
import { useState } from 'react';

function Calculator() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState<any>(null);

  const handleNum1Change = (event: any) => {
    setNum1(event.target.value);
  };

  const handleNum2Change = (event: any) => {
    setNum2(event.target.value);
  };

  const handleCalc = (typeValue: number) => {
    const n1 = Number(num1);
    const n2 = Number(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('올바른 숫자를 입력하십시오.');
    } else if (typeValue === 1) {
      setResult(n1 + n2);
    } else {
      setResult(n1 - n2);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <input
          type="text"
          value={num1}
          onChange={handleNum1Change}
          placeholder="첫 번째 숫자"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          value={num2}
          onChange={handleNum2Change}
          placeholder="두 번째 숫자"
          className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div>
          <button
            onClick={() => handleCalc(1)}
            className="w-full px-4 py-2 text-white bg-blue-500 hover:bg-blue-600 rounded-lg transition duration-300"
          >
          더하기
          </button>
          <button
            onClick={() => handleCalc(0)}
            className="w-full px-4 py-2 text-white bg-red-500 hover:bg-red-600 rounded-lg transition duration-300"
          >
          빼기
          </button>
        </div>
        <p className="mt-6 text-center text-lg font-semibold text-gray-700">
          결과: {result}
        </p>
      </div>
    </div>
  );
}

export default Calculator;