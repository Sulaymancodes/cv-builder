function CompanyNameFunc({company, updateCompany}) {
    return (
      <div>
        <label>
          Company:
          <input
            type="text"
            value={company} 
            onChange={updateCompany}
            className="bg-blue-500"
          />
        </label>
      </div>
    );
}

function PositionFunc({position, updatePosition}) {
    return (
      <div>
        <label>
          Position/Title:
          <input
            type="text"
            value={position} 
            onChange={updatePosition}
            className="bg-blue-500"
          />
        </label>
      </div>
    );
}

function ExperienceStartDateFunc({experienceStartDate, updateExperienceStartDate}) {
    return (
      <div>
        <label>
          Start Date:
          <input
            type="date"
            value={experienceStartDate} 
            onChange={updateExperienceStartDate}
            className="bg-blue-500"
          />
        </label>
      </div>
    );
}

function ExperienceEndDateFunc({ExperienceEndDate, updateExperienceEndDate}) {
    return (
      <div>
        <label>
          End Date:
          <input
            type="date"
            value={ExperienceEndDate} 
            onChange={updateExperienceEndDate}
            className="bg-blue-500"
          />
        </label>
      </div>
    );
}

function DescriptionFunc({description, updateDescription}) {
    return (
        <div>
            <label>
             Description:
             <textarea
              value={description}
              onChange={updateDescription}
              rows="4"
              cols="50"
             />
          </label>
        </div>
    )
}

export {CompanyNameFunc, PositionFunc, ExperienceStartDateFunc, ExperienceEndDateFunc, DescriptionFunc}