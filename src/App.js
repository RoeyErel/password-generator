import {useState} from 'react';


function generatePassword(length, str) {
  let resutlt="";
  for ( var i = 0; i < length; i++ ) {
    resutlt += str.charAt(Math.floor(Math.random() * (str.length)));
  }
  return resutlt
}


function App() {
  let lowerCase = "abcdefghijklmnopqrstuvwxyz",
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  nums = "0123456789",
  symbols = '!@#$%^&*()_+',
  charset = "";

  const [isChecked, setIsChecked] = useState(false);

  const handleUpper = event => {
    if (event.target.checked){
      charset += upperCase;
      return charset;
    }if(!event.target.checked){
      charset = charset.replace(upperCase, '');
      return charset;
    }
    setIsChecked(current => !current);
  };
  const handleLower = event => {
    if (event.target.checked) {
      charset += lowerCase;
      return charset;
    }if(!event.target.checked){
      charset = charset.replace(lowerCase, '');
      return charset;
    }
    setIsChecked(current => !current);
  };

  const handleNumbers = event => {
    if (event.target.checked) {
      charset += nums;
      return charset;
    }if(!event.target.checked){
      charset = charset.replace(nums, '');
      return charset;
    }
    setIsChecked(current => !current);

  };

  const handleSymbol = event => {
    if (event.target.checked) {
      charset +=symbols;
      return charset;
    }if(!event.target.checked){
      charset = charset.replace(symbols, '');
      return charset;
    }
    setIsChecked(current => !current);

  };

  const handleSubmit = event => {
    const length = document.getElementById("password").value;
    let password = generatePassword(length,charset);
    const post = document.getElementById("result").innerText = password;
    return password;
  };

  return (
        <div className="bg-transparent h-full w-full flex justify-center items-center	">

          <div className="bg-black bg-opacity-60 w-[80%] h-full flex flex-col items-center">
            <h1 className="text-white text-4xl text-center mt-10">Password Generator</h1>
            <div className="flex justify-start align-center relative text-[18px] py-[12px] px-[10px] h-[50px] w-[70%] bg-black bg-opacity-60 mt-4 mb-[20px] tracking-[1px]">
              <span className="text-white" id="result" ></span> 
            </div>

            <div className="box-border block w-[70%] text-l text-white">
              
              <div className="w-full flex justify-between align-center my-2 mx-0" >
                <label className="" >Password length</label>
                <input type="number" id="password" min='4' max='20' className="w-[95px] text-black cursor-pointer"/>
              </div>

              <div className="w-full flex justify-between align-center my-2 mx-0">
                <label className="">Include uppercase letters</label>
                <input id="uppercase" value={isChecked} onChange={handleUpper} className="cursor-pointer" type="checkbox"/>
              </div>
              <div className="w-full flex justify-between align-center my-2 mx-0">
                <label className="">Include lowercase letters</label>
                <input id="lowercase" value={isChecked} onChange={handleLower} className="cursor-pointer" type="checkbox"/>
              </div>
              
              <div className="w-full flex justify-between align-center my-2 mx-0">
                <label className="">Include numbers</label>
                <input id="numbers" value={isChecked} onChange={handleNumbers} className="cursor-pointer" type="checkbox"/>
              </div>
              <div  className="w-full flex justify-between align-center my-2 mx-0">
                <label className="">Include symbols</label>
                <input id="symbols" value={isChecked} onChange={handleSymbol} className="cursor-pointer" type="checkbox"/>
              </div>

              <div className="my-4">
              <input type="submit" value="Submit" onClick={handleSubmit} className="text-white bg-gradient-to-br from-blue-600 to-green-400 hover:bg-gradient-to-bl  dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"/>
              </div>

            </div>

          </div>
          
      </div> 
  );
}

export default App;
