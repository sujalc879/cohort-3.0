import { useEffect, useState } from 'react';
import Header from './components/Header';
import PetAdoptionForm from './components/PetAdoptionForm';
import "./myApp.css";

const color = "#c39570";
const opacity = 0.7


const App = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, 500);

    return () => {
      clearTimeout(timer);
    }
  }, [])


  return (
    <div className={`app-container ${visible ? "show" : ""}`}
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1950&q=80')",
        height: "100vh",
        backgroundSize: "cover"
      }}
    >
      <Header message={"Pet Adoption Form"} color={color} opacity={opacity} />
      <PetAdoptionForm  color={color} opacity={opacity} />
    </div>
  );
};
export default App;