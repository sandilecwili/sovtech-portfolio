import React from "react";


const HomePage = () => {
  return (
    <div id="home" className="h-screen w-full text-center">
      <div className="max-w-screen-xl mx-auto w-full h-full pt-24 p-4 flex flex-col justify-around items-center">
      

        <h1 className="uppercase font-bold text-gray-700 text-7xl">
          Software Engineer
        </h1>

        <p className="text-gray-600 text-xl max-w-sm mx-auto">
            I am Sandile Cwili. I graduated in Bsc Computer science and statistics from the North-west University. I 
            am skilled in desgining and writing API's making use of python's flask framework and using JAVA's RestAssured
            framework for validating them.

            I am a good candicate for sovTech because I am passionate about developing softwares and I believe
            the opportunity at sovTech is a great platform for me to demonstrate what I am capable of. My promise to sovTech
            is that I will make sure I utilize every knowledge I have aquired to my fullest potential to help the team win.
        </p>

       
      </div>
    </div>
  );
};

export default HomePage;
