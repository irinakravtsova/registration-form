import React, { useState } from "react";
import { InputMask } from "@react-input/mask";
import line from "./assets/line.jpg";
import "./App.css";

function App() {
  const initialState = {
    name: "",
    surname: "",
    phone: "",
    email: "",
    password: "",
    repeatPassword: "",   
  };
 
  const [form, setForm] = useState(initialState);

  const [checked, setChecked] = useState(false);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleClick() {
    let error = formValidata();
    if (error === 0) {
      setForm(initialState);
      setChecked(false);
      alert("Регистрация прошла успешно");
    }
  }

  function formValidata() {
    let error = 0;
    if (
      !form.name ||
      !form.surname ||
      !form.phone ||
      !form.email ||
      !form.password ||
      !form.repeatPassword
    ) {
      error++;
      alert("Все поля должны быть заполнены");
    } else if (!isValidEmail(form.email)) {
      error++;
      alert("Введи корректный Email");
    } else if (form.password !== form.repeatPassword) {
      error++;
      alert("Проверь пароль");
    } else if (checked === false) {
      error++;
      alert("Подтверди пароль");
    }
    return error;
  }
  
  function isValidEmail(value) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(value);
  }

  return (
    <div className="container">
      <h1 className="title">Создание аккаунта</h1>
      <p className="subtitle">
        Введите свои данные, чтобы создать аккаунт в сервисе
      </p>
      <form method="post" onSubmit={handleInputChange}>
        <input
          type="text"
          name="name"
          value={form.name}
          className="input-text"
          placeholder="Имя"
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="surname"
          value={form.surname}
          className="input-text"
          placeholder="Фамилия"
          onChange={handleInputChange}
        />

        <InputMask
          name="phone"
          value={form.phone}
          mask="+7 (___) ___-__-__"
          replacement={{ _: /\d/ }}
          className="input-text phone-masck"
          placeholder="Номер телефона"
          onChange={handleInputChange}
        />

        <input
          type="email"
          name="email"
          value={form.email}
          pattern=".+@example\com"
          required
          className="input-text"
          placeholder="Email"
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="password"
          value={form.password}
          className="input-text"
          placeholder="Пароль"
          onChange={handleInputChange}
        />

        <input
          type="text"
          name="repeatPassword"
          value={form.repeatPassword}
          className="input-text"
          placeholder="Повторите пароль"
          onChange={handleInputChange}
        />

        <div className="input-checkbox">
          <input
            type="checkbox"
            name="confirmPassword"
            value={checked}
            id="happy"
            className="checkbox"
            checked={checked}
            onChange={() => setChecked(!checked)}
          />
          <label for="happy"> </label>
          <p className="checkbox-text">Подтверждаю пароль</p>
        </div>

        <button type="button" className="button" onClick={handleClick}>
          Продолжить
        </button>
      </form>

      <img src={line} alt="" />

      <div className="is-login-box">
        <p className="is-login">Уже есть аккаунт?</p>
        <a className="is-login-entrance" href="">
          Войти &#8594;
        </a>
      </div>
    </div>
  );
}

export default App;
