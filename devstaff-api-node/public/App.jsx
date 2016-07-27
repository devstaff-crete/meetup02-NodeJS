class Task extends React.Component {

  constructor() {
    super();

    this.state = {};
  }

  render() {
    const task = this.props.task;
    return (
      <div className="task">
        <div><span className="label">Date:</span> {task.cdate}</div>
        <div><span className="label">Title:</span> {task.title}</div>
        <div><span className="label">Id:</span> {task.id}</div>
        <div><span className="label">Description</span> {task.desc}</div>
      </div>
    );
  }
}

class TasksList extends React.Component {

  constructor() {
    super();

    this.state = {
      tasks: [],
    };
  }

  render() {
    const tasks = this.state.tasks.map((task) => (
      <li key={task.id}><Task task={task} /></li>
    ));

    return (
      <div>
        <ul>{tasks}</ul>
      </div>
    );
  }

  fetchTasks() {
    jQuery.ajax({
      method: 'GET',
      url: '/tasks',
      success: (tasks) => {
        this.setState({ tasks });
      },
    });
  }

  componentDidMount() {
    this.fetchTasks();
  }
}

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      tasks: [],
    };
  }

  render() {
    return (
      <div>
        <h1>My tasks</h1>
        <TasksList />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));