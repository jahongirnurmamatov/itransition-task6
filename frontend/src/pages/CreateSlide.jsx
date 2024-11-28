import React, { useState } from "react";

import Header from "@/components/createSlide/Header";
import Toolbar from "@/components/createSlide/Toolbar";
import ToolbarExtentded from "@/components/createSlide/ToolbarExtentded";
import CreateComponent from "@/components/CreateComponent";
const CreateSlide = () => {
  const [state, setState] = useState("");
  const [current_component, setCurrentComponent] = useState("");
  const [image,setImage]=useState('');
  const [show, setShow] = useState({
    status: true,
    name: "",
  });
  const setElements = (type, name) => {
    setState(type);
    setShow({
      state: false,
      name,
    });
  };

  const removeComponent = () => {
    console.log("remove component");
  };

  const moveElement = () => {
    console.log("move element");
  };
  const resizeElement = () => {
    console.log("move element");
  };

  const removeBackground = ()=>{
    const com = components.find(c=>c.id ===current_component.id);
    const temp = components.filter(c=>c.id!==current_component.id);
    com.image = '';
    setImage='';
    setComponenets([...temp,com])
  }

  const [components, setComponenets] = useState([
    {
      name: "main_frame",
      type: "rect",
      id: Math.floor(Math.random() * 100 + 1),
      height: 500,
      width: 700,
      z_index: 1,
      color: "#fff",
      image: "",
      setCurrentComponent: (a) => setCurrentComponent(a),
    },
  ]);
  
  const createShape = (name,type)=>{
    const style={
        id:components.length+1,
        name,
        type,
        left:10,
        top:20,
        opacity:1,
        width:200,
        height:150,
        z_index:2,
        color: "green",
        setCurrentComponent:(a)=>setCurrentComponent(a),
        removeBackground:()=>setImage('')
    }
    setComponenets([...components,style])
  }
  return (
    <div className="min-w-screen h-screen bg-black">
      <Header />
      <div className="flex h-[calc(100%-60px)] w-screen">
        <Toolbar setElements={setElements} show={show} />
        <div className="h-full w-[calc(100%-75px)]">
          <ToolbarExtentded show={show} setShow={setShow} state={state} createShape={createShape}/>

          <div className="w-full h-full flex justify-between">
            <div
              className={`flex ml-40 justify-center relative items-center h-full ${
                !current_component
                  ? "w-full"
                  : "w-[cal(100%-250px)] overflow-hidden"
              }`}
            >
              <div className="m-w-[650px] max-h-[480px] flex justify-center items-center overflow-hidden">
                <div className="w-auto relative h-auto overflow-hidden">
                  {components.map((c, i) => (
                    <CreateComponent
                      key={i}
                      info={c}
                      current_component={current_component}
                      removeComponent={removeComponent}
                    />
                  ))}
                </div>
              </div>
            </div>
            {current_component && (
              <div className="h-full w-[250px] text-gray-300 bg-[#252627] px-3 py-2">
                current
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateSlide;
