
class App extends React.Component {

  constructor() {
    super();

    this.state = {
      tasks: []
    };
  }

  render() {
    var tasks = this.state.tasks.map((task) => (
      <li key={task.id}>
        <div>Date: {task.cdate} </div>
        <div>Title: {task.title} </div>
        <div>Id: {task.id} </div>
        <div>Description {task.desc} </div>
        <br/>
      </li>

    ));

    return (
      <div>
        <h1>My tasks</h1>
        <ul>{tasks}</ul>
      </div>
    );
  }

  fetchTasks() {
    jQuery.ajax({
      method: 'GET',
      url: '/tasks',
      success: (tasks) => {
        this.setState({ tasks })
      }
    });
  }

  componentDidMount() {
    this.fetchTasks();
  }
}

ReactDOM.render(<App />, document.getElementById('app'));