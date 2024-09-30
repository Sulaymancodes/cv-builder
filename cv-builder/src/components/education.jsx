function SchoolFunc({school, updateSchool}) {
    return (
      <div>
        <label>
          <input
            type="text"
            value={school} 
            onChange={updateSchool}
            className="p-1 rounded-md w-full bg-slate-50"
          />
        </label>
      </div>
    );
}

function DegreeFunc({degree, updateDegree}) {
    return (
      <div>
        <label>
          <input
            type="text"
            value={degree} 
            onChange={updateDegree}
            className="p-1 rounded-md w-full bg-slate-50"
          />
        </label>
      </div>
    );
}

function StartDateFunc({startDate, updateStartDate}) {
    return (
      <div>
        <label>
          <input
            type="date"
            value={startDate} 
            onChange={updateStartDate}
            className="p-1 rounded-md w-full bg-slate-50"
          />
        </label>
      </div>
    );
}

function EndDateFunc({endDate, updateEndDate}) {
    return (
      <div>
        <label>
          <input
            type="date"
            value={endDate} 
            onChange={updateEndDate}
            className="p-1 rounded-md w-full bg-slate-50"
          />
        </label>
      </div>
    );
}

export {SchoolFunc, DegreeFunc, StartDateFunc, EndDateFunc}