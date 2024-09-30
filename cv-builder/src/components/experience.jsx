function CompanyNameFunc({company, updateCompany}) {
    return (
      <div>
        <label>
          <input
            type="text"
            value={company} 
            onChange={updateCompany}
            className="p-1 rounded-md w-full bg-slate-50"
          />
        </label>
      </div>
    );
}

function PositionFunc({position, updatePosition}) {
    return (
      <div>
        <label>
          <input
            type="text"
            value={position} 
            onChange={updatePosition}
            className="p-1 rounded-md w-full bg-slate-50"
          />
        </label>
      </div>
    );
}

function ExperienceStartDateFunc({experienceStartDate, updateExperienceStartDate}) {
    return (
      <div>
        <label>
          <input
            type="date"
            value={experienceStartDate} 
            onChange={updateExperienceStartDate}
            className="p-1 rounded-md w-full bg-slate-50"
          />
        </label>
      </div>
    );
}

function ExperienceEndDateFunc({ExperienceEndDate, updateExperienceEndDate}) {
    return (
      <div>
        <label>
          <input
            type="date"
            value={ExperienceEndDate} 
            onChange={updateExperienceEndDate}
            className="p-1 rounded-md w-full bg-slate-50"
          />
        </label>
      </div>
    );
}

function DescriptionFunc({description, updateDescription}) {
    return (
        <div>
            <label>
             <textarea
              value={description}
              onChange={updateDescription}
              rows="4"
              cols="50"
              className="p-1 rounded-md w-full bg-slate-50"
             />
          </label>
        </div>
    )
}

export {CompanyNameFunc, PositionFunc, ExperienceStartDateFunc, ExperienceEndDateFunc, DescriptionFunc}