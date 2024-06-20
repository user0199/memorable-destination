import React from 'react';

const PlanCard = ({ title, itinerary,Place }) => {
    return (
        <div className="max-w-6xl mx-auto mb-6 mt-6">
            <h1 className='text-4xl mb-4 font-semibold'>Our plnes for {Place} </h1>

            <div className="px-6 py-4  bg-white shadow-md rounded-md overflow-hidden">
                <h2 className="text-2xl font-semibold mb-4">{title}</h2>
                <div className=' flex flex-col'>
                    {itinerary?.map((day, index) => (
                        <div key={index} className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">day: {day.day}</h3>
                            <ul className="list-disc list-inside">
                                {day.description.map((detail, idx) => (
                                    <li key={idx} className="mb-1">{detail}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PlanCard;
