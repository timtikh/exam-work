import React from 'react';
import Map from './components/Map';
import './App.css'; // Подключаем файл стилей для карточки

const App = () => {
  // Позиция вашего офиса
  const officePosition = [55.742004, 37.617];

  // Данные о компании
  const companyData = {
    name: 'Kingsman',
    description: 'Добро пожаловать в мир стиля и элегантности! Мы предлагаем премиальные английские костюмы, которые подчеркнут вашу индивидуальность и великолепно дополнят ваш образ.',
    address: 'Адрес: Тверская-Ямская, 19',
    phoneNumber: 'Телефон: +7 (123) 456-78-90',
    email: 'Email: info@kingsman.com'
  };

  return (
    <div className="card">
      <div className="card-header">
        <h1 className="company-name">{companyData.name}</h1>
      </div>
      <div className="card-body">
        <p className="company-description">{companyData.description}</p>
        <p className="company-info">{companyData.address}</p>
        <p className="company-info">{companyData.phoneNumber}</p>
        <p className="company-info">{companyData.email}</p>
        <Map position={officePosition} />
      </div>
    </div>
  );
};

export default App;
