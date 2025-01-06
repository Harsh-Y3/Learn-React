import { useState, useCallback, useEffect } from 'react';
// import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [numberAllow, setNumberAllow] = useState(false);
  const [charAllow, setCharAllow] = useState(false);
  const [strUpper, setStrUpper] = useState(false);
  const [password, setPassword] = useState('');

  const PasswordGenerator = useCallback(() => {
    let pass = '';
    let str = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const chars = '!@#$%^&*()_+';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    if (numberAllow) str += numbers;
    if (charAllow) str += chars;
    if (strUpper) str += upper;

    for (let i = 1; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllow, charAllow, strUpper]);

  useEffect(() => {
    PasswordGenerator();
  }, [length, numberAllow, charAllow, strUpper, PasswordGenerator]);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    });
  };

  return (
    
    <>
      <div className=" mx-auto shadow-md rounded-lg px-4 my-8 text-slate-900 items-center bg-gradient-to-r from-green-200 to-blue-500 w-[30rem] h-[150px]">
        <h1 className="text-center text-xl py-2 text-black font-bold my-3"> <b>Password Generator</b></h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4">
          <input 
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="password"
            readOnly
          />
          <button
            onClick={copyToClipboard}
            className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
          >
            Copy
          </button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => setLength(Number(e.target.value))}
            />
            <label> Length: {length} </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={numberAllow}
              id="numberInput"
              onChange={() => setNumberAllow((prev) => !prev)}
            />
            <label htmlFor="numberInput"> Number </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={charAllow}
              id="charInput"
              onChange={() => setCharAllow((prev) => !prev)}
            />
            <label htmlFor="charInput"> Character </label>
          </div>
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              checked={strUpper}
              id="upperInput"
              onChange={() => setStrUpper((prev) => !prev)}
            />
            <label htmlFor="upperInput"> Uppercase </label>
          </div>
        </div>
      </div>
      <div className='bg-transparent backdrop-blur-sm rounded-xl border border-black shadow-lg p-6 h-auto w-[77rem] text-xl'>
      <p className='text-black-300 font-light: font-weight: 300;'>
        <h2 className='text-left text-black'> <b><u>Importance of Strong Passwords</u></b></h2>
        <br />
    <u> 1 Cybersecurity:</u> Strong passwords are your first line of defense against hackers.
    <br />
    <u>2 Data Protection:</u>Safeguard your personal information from theft and misuse.
    <br />
    <u>3 Identity Security:</u> Prevent identity theft and fraudulent activities.
    <br />
    <u>4 Password Guessing Prevention:</u> Avoid simple passwords that are easily cracked.
    <br /><br />

    <h2 className='text-left text-black'> <b><u>Why Use Our Password Generator</u></b></h2> <br />

    <u>1 Convenience:</u> Generate strong passwords in seconds. 
    <br />
    <u>2 Customization:</u> Control length, characters, and complexity. 
    <br />
    <u>3 Security:</u> Create unique passwords for each account. 
    <br />
    <u>4 Ease of Use:</u> Simple interface and copy-to-clipboard feature. 
    <br />
    <u>5 Peace of Mind:</u> Secure your accounts and reduce online worries.



      </p>
      </div>
      
    </>

  );
}

export default App;
