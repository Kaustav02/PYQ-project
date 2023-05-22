import React, { useState } from "react";

const Advance = () => {
  const [years, setYears] = useState([
    2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023,
  ]);

  const handleYearClick = (year) => {
    console.log(`hello ${year}`);
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>JEE ADVANCE</h2>
      </div>
      <div className="card-body">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => handleYearClick(year)}
            className="btn btn-primary"
          >
            {year}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Advance;
