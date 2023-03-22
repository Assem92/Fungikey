import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import styled from 'styled-components';



const MushroomSeasonTracker = () => {
  const [month, setMonth] = useState(new Date());
  const [mushroomSeasonData, setMushroomSeasonData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  useEffect(() => {
    fetchMushroomSeasonData();
  }, []);

  const fetchMushroomSeasonData = async () => {
    const response = await fetch("/api/periodes");
    const data = await response.json();
    setMushroomSeasonData(data);
  };

  const monthNames = [
    "Janvier",
    "Février",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Août",
    "Septembre",
    "Octobre",
    "Novembre",
    "Décembre"
  ];

  const monthNumber = (monthName) => monthNames.indexOf(monthName);

  const getMushroomsByMonth = (date) => {
    const monthIndex = date.getMonth();
    const mushrooms = mushroomSeasonData.filter((mushroom) => {
      const period = mushroom.période.split('-');
      const startMonth = monthNumber(period[0].trim());
      const endMonth = monthNumber(period[1].trim());
      return monthIndex >= startMonth && monthIndex <= endMonth;
    });
    return mushrooms;
  };

  const handleClickDay = (date) => {
    setSelectedDate(date);
  };

  const closeSelectedDate = () => {
    setSelectedDate(null);
  };

  return (
    <div className="MushroomSeasonTracker">
    <h1>Suivi de la saison de cueillette de champignons</h1>
    <div className="calendar-container">
      <Calendar
        value={month}
        onChange={setMonth}
        onClickDay={handleClickDay}
        tileContent={({ date, view }) => {
          if (view === 'month') {
            const mushrooms = getMushroomsByMonth(date);
            const mushroomNames = mushrooms.map((mushroom) => mushroom.nom);
            return (
              <div>
                {mushroomNames.map((name, i) => (
                  <div key={i}>{name}</div>
                ))}
              </div>
            );
          }
        }}
      />
    </div>
    {selectedDate && (
      <div className="table-container">
        <h2>
          Champignons pour le {selectedDate.getDate()}{' '}
          {monthNames[selectedDate.getMonth()]} {selectedDate.getFullYear()}
        </h2>
        <table>
          <thead>
            <tr>
              <td>Nom</td>
              <td>Description</td>
              <td>Saison</td>
            </tr>
          </thead>
          <tbody>
            {getMushroomsByMonth(selectedDate).map((mushroom) => (
              <tr key={mushroom.id}>
                <td>{mushroom.nom}</td>
                <td>{mushroom.description}</td>
                <td>{mushroom.période}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={closeSelectedDate}>Fermer</button>
      </div>
    )}
  </div>
  );
};

export default MushroomSeasonTracker;