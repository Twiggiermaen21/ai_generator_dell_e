import React from "react";
import { format, startOfMonth, endOfMonth, startOfWeek, endOfWeek, addDays } from "date-fns";
import { pl } from "date-fns/locale";

const generateCalendar = (date) => {
    const startMonth = startOfMonth(date);
    const endMonth = endOfMonth(date);
    const startDate = startOfWeek(startMonth, { locale: pl });
    const endDate = endOfWeek(endMonth, { locale: pl });

    const days = [];
    let day = startDate;

    while (day <= endDate) {
        days.push(day);
        day = addDays(day, 1);
    }

    return (
        <div className="w-full max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg mb-6">
            <h2 className="text-lg font-semibold text-center mb-2">{format(date, "MMMM yyyy", { locale: pl })}</h2>
            <div className="grid grid-cols-7 gap-1 text-center">
                {["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"].map((day, index) => (
                    <div key={index} className="font-bold text-gray-700">{day}</div>
                ))}
                {days.map((day, index) => (
                    <div key={index} className={`p-2 rounded ${day.getMonth() === date.getMonth() ? "bg-gray-100" : "bg-gray-200 text-gray-400"}`}>
                        {format(day, "d")}
                    </div>
                ))}
            </div>
        </div>
    );
};

const Calendar = () => {
    const months = [new Date(2025, 0), new Date(2025, 1), new Date(2025, 2)];

    return (
        <div className="w-full max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg">
            <div className="w-full flex justify-center mb-4">
                <img src="/path-to-your-image.jpg" alt="Calendar Image" className="w-32 h-32 object-cover" />
            </div>
            {months.map((month, index) => (
                <div key={index}>{generateCalendar(month)}</div>
            ))}
        </div>
    );
};

export default Calendar;