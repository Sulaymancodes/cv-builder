function SchoolFunc({school, updateSchool}) {
    return (
      <div>
        <label>
          School:
          <input
            type="text"
            value={school} 
            onChange={updateSchool}
            className="bg-red-500"
          />
        </label>
      </div>
    );
}

function DegreeFunc({degree, updateDegree}) {
    return (
      <div>
        <label>
          Degree:
          <input
            type="text"
            value={degree} 
            onChange={updateDegree}
            className="bg-red-500"
          />
        </label>
      </div>
    );
}

function StartDateFunc({startDate, updateStartDate}) {
    return (
      <div>
        <label>
          Start Date:
          <input
            type="date"
            value={startDate} 
            onChange={updateStartDate}
            className="bg-red-500"
          />
        </label>
      </div>
    );
}

function EndDateFunc({endDate, updateEndDate}) {
    return (
      <div>
        <label>
          End Date:
          <input
            type="date"
            value={endDate} 
            onChange={updateEndDate}
            className="bg-red-500"
          />
        </label>
      </div>
    );
}

export {SchoolFunc, DegreeFunc, StartDateFunc, EndDateFunc}