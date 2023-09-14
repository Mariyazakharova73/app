import React, { Suspense, useContext, useState } from "react";
import "../styles/index.scss";
import { Link, Route, Routes } from "react-router-dom";
import { MainPageAsync } from "../pages/MainPage/MainPage.async";
import { AboutPageAsync } from "../pages/AboutPage/AboutPage.async";
import { Theme, ThemeContext } from "./../theme/ThemeContext";
import { useTheme } from "../theme/useTheme";
import { classNames } from "./../helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames("app", {}, [theme])}>
      <button onClick={toggleTheme}>TOGGLE THEME</button>
      <Link to="/">Главная</Link>
      <Link to="/about">О сайте</Link>
      <Suspense fallback={<div>Загрузка...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />}></Route>
          <Route path="/about" element={<AboutPageAsync />}></Route>
        </Routes>
      </Suspense>
      App component
    </div>
  );
};

export default App;
