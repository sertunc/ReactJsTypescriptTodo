import * as React from 'react';
import './App.css';

import logo from './logo.svg';



class App extends React.Component<{}, IState> {

  constructor(props: {}) {
    super(props);

    this.state = {
      currentTask: "",
      tasks: []
    }
  }

  public handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault();

    this.setState({
      currentTask: "",
      tasks: [
        ...this.state.tasks,
        {
          id: this.getTime(),
          value: this.state.currentTask,
          completed: false
        }
      ]
    })
  }

  public deleteTask(id: number): void {
    const tasks: Array<ITask> = this.state.tasks.filter((task: ITask) => task.id !== id);
    this.setState({ tasks });
  }

  public doneTask(index: number): void {
    let task: ITask[] = this.state.tasks.splice(index, 1);

    task[0].completed = !task[0].completed;

    const tasks: ITask[] = [...this.state.tasks, ...task];

    this.setState({ tasks });
  }

  public renderTasks(): JSX.Element[] {
    return this.state.tasks.map((task: ITask, index: number) => {
      return (
        <div key={task.id}>
          <span>{task.value} - {task.completed ? "tamamlandı" : "beklemede"}</span>
          <button onClick={() => this.deleteTask(task.id)}>Sil</button>
          <button onClick={() => this.doneTask(index)}>Tamamla</button>
        </div>
      )
    });
  }

  public render(): JSX.Element {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <p className="App-intro">
          <h1>React Typescript Todo List</h1>
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              type="text"
              placeholder="Add a Task..."
              onChange={(e) => this.setState({ currentTask: e.target.value })}
              value={this.state.currentTask} />
            <button type="submit">Add Task</button>
          </form>
          <section>
            {this.renderTasks()}
          </section>
        </p>
      </div>
    );
  }

  private getTime(): number {
    const date: Date = new Date();
    return date.getTime();
  }
}

interface IState {
  currentTask: string;
  tasks: Array<ITask>;
}

interface ITask {
  id: number;
  value: string;
  completed: boolean
}

export default App;