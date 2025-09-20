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

  const return_todos = function(project_name) {
    const targetproject = project_arr.find(project => project.name === project_name);
    if (targetproject) {
      return targetproject.project_todo;
    }
  }

  return { add_projects, app_todo_to_project, return_project, return_todos };
})();

const DisplayController = (function () {
  let sidebar;
  let maincontent;

  const layout = function() {
    sidebar = document.createElement("div");
    sidebar.id = "sidebar";
    document.body.appendChild(sidebar);
    maincontent = document.createElement("div");
    maincontent.id = "main-content";
    document.body.appendChild(maincontent);
  }

  const displayProjects = function() {
    sidebar.innerHTML = "";
    const projectarr = mainapp.return_project();
    console.log(projectarr);
    for (let i = 0; i < projectarr.length; i++) {
      console.log(projectarr[i]);
      const displayname = document.createElement("h2");
      displayname.textContent = `${projectarr[i].name}`;
      displayname.addEventListener('click', () => {
        mainapp.return_todos(projectarr[i].name);
        displayTodos(projectarr[i].name)
      })
      sidebar.appendChild(displayname);
    }
  }

  const add_p = document.getElementById("add-project");
  sidebar.appendChild(add_p);
  add_p.addEventListener('click', () => {
    let project_name = prompt("name the project");
    mainapp.add_projects(project_name);
    displayProjects();
  });

  const displayTodos = function(projectname) {
    maincontent.innerHTML = "";
    const todos = mainapp.return_todos(projectname);
    if (todos) {
      todos.forEach(todo => {
        const todoCard = document.createElement('div');
        todoCard.textContent = `title: ${todo.title}, due: ${todo.due_date}`;
        maincontent.appendChild(todoCard);
      });
    }
  }

  const add_t = document.getElementById("add-todo");
  maincontent.appendChild(add_t);
  add_t.addEventListener('click', {
  });

  return { layout, displayProjects, displayTodos };
})();

DisplayController.layout();
DisplayController.displayProjects();
