const todo = (title, description, due_date, priority) => {
  return {
    title, description, due_date, priority
  }
};

const project = (name) => {
  const project_todo = [];
  return { name, project_todo };
};

const mainapp = (function () {
  const project_arr = [];
  const default_project = project("default");
  project_arr.push(default_project);
  const add_projects = function (name) {
    const new_project = project(name);
    project_arr.push(new_project);
  }

  const app_todo_to_project = function(project_name, tododetails) {
    const targetproject = project_arr.find(project=> project.name === project_name);
    if (targetproject) {
      const new_todo = todo(
        tododetails.title,
        tododetails.description,
        tododetails.due_date,
        tododetails.priority
      );
      targetproject.project_todo.push(new_todo);
    } else {
      console.log(`Project ${project_name} not found.`)
    }
  }

  const return_project = function() {
    return project_arr;
  }
  return { add_projects, app_todo_to_project };
})();

const DisplayController = (function (mainapp) {
  const layout = function() {
    const sidebar = document.createElement("div");
    document.body.appendChild(sidebar);
    const maincontent = document.createElement("div");
    document.body.appendChild(maincontent);
  }

  const displayProjects = function() {
    sidebar.innerHtml = "";
    const projectarr = return_project();
    for (let i = 0; i < projectarr.length; i++) {
      const displayname = document.createElement("h2");
      displayname.textContent = `${projectarr[i].name}`;
      sidebar.appendChild(displayname);
    }
  }
})();
