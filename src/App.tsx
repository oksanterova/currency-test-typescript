import './App.css';
import React from "react";
import Converter from "./components/Converter";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App: React.FC = () => {
    return (
        <div className="App">
            <Header/>
            <Converter/>
            <Footer/>
        </div>
    );
};

export default App;