function ProjectNameFunc({projectName, updateProjectName}) {
    return (
      <div>
        <label>
          Project Name:
          <input
            type="text"
            value={projectName} 
            onChange={updateProjectName}
            className="bg-orange-500"
          />
        </label>
      </div>
    );
}

function ProjectDetailsFunc({projectDetails, updateProjectDetails}) {
    return (
      <div>
        <label>
          Project Details:
          <textarea
            type="text"
            value={projectDetails} 
            onChange={updateProjectDetails}
            className="bg-orange-500"
            rows="4"
            cols="40"

          />
        </label>
      </div>
    );
}

export { ProjectNameFunc, ProjectDetailsFunc }