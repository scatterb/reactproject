import React, { Component } from 'react';

const weekdays = ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai', 'Lauantai', 'Sunnuntai'];

export default class Content extends Component {
    render() {
        return (
            <div>
                <p>Matiaksen puoli</p>

                <ul>
                    {weekdays.map(function(weekday, i) {
                        return getWeekDays(weekday, i);   
                    })}
                </ul>
            </div>
        );
    }
}


function getWeekDays(weekday, i) {
    return <li key={i}>{weekday}</li>;
}