function ProjectNameFunc({projectName, updateProjectName}) {
    return (
      <div>
        <label>
          <input
            type="text"
            value={projectName} 
            onChange={updateProjectName}
            className="p-1 rounded-md w-full bg-slate-50"
          />
        </label>
      </div>
    );
}

function ProjectDetailsFunc({projectDetails, updateProjectDetails}) {
    return (
      <div>
        <label>
          <textarea
            type="text"
            value={projectDetails} 
            onChange={updateProjectDetails}
            className="p-1 rounded-md w-full bg-slate-50"
            rows="4"
            cols="40"

          />
        </label>
      </div>
    );
}

export { ProjectNameFunc, ProjectDetailsFunc }