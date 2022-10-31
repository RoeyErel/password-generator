
function App() {
  return (


        <div className="bg-transparent h-full w-full flex justify-center items-center	">

          <div className="bg-black bg-opacity-60 w-[80%] h-full flex flex-col items-center">
            <h1 className="text-white text-4xl text-center mt-10">Password Generator</h1>
            <div className="flex justify-start align-center relative text-[18px] py-[12px] px-[10px] h-[50px] w-[70%] bg-black bg-opacity-60 mt-4 mb-[20px] tracking-[1px]">
              <span className="text-white" id="result">{"pkngwr%@$#ghdsf24532"}</span>
              <button/> 
            </div>

            <div className="box-border block w-[70%] text-l text-white">
              
              <div className="w-full flex justify-between align-center  my-2 mx-0" id="setup">
                <label className="" >Password length</label>
                <input className="w-[45px] py-[-15px] cursor-pointer" type={"text"}/>
              </div>

              <div className="w-full flex justify-between align-center my-2 mx-0" id="setup">
                <label className="">Include uppercase letters</label>
                <input className="cursor-pointer" type={"checkbox"}/>
              </div>
              <div  className="w-full flex justify-between align-center my-2 mx-0" id="setup">
                <label className="">Include lowercase letters</label>
                <input className="cursor-pointer" type={"checkbox"}/>
              </div>
              <div className="w-full flex justify-between align-center my-2 mx-0" id="setup">
                <label className="">Include numbers</label>
                <input className="cursor-pointer" type={"checkbox"}/>
              </div>
              <div  className="w-full flex justify-between align-center my-2 mx-0" id="setup">
                <label className="">Include symbols</label>
                <input className="cursor-pointer" type={"checkbox"}/>
              </div>

              <div className="my-4">
                <button type="button" className="text-white bg-gradient-to-br from-blue-600 to-green-400 hover:bg-gradient-to-bl  dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">
                  Submit
                </button>
              </div>

            </div>

          </div>
          
      </div> 
  );
}

export default App;
