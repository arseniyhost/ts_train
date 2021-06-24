import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TodoPage } from './pages/TodoPage';
import { AboutPage } from './pages/AboutPage';
import Card, { CardVariant } from './components/Card';
import { List } from './components/List';
import UserItem from './components/UserItem';
import TodoItem from './components/TodoItem';
import { ITodo, IUser } from './types/types';
import axios from 'axios';
import EventExample from './components/EventExample';

// const App: React.FC = (props) => {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <div className="container">
//         <Switch>
//           <Route component={TodoPage} path="/" exact />
//           <Route component={AboutPage} path="/about" />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   )
// }

const App: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchUsers()
    fetchTodos()
  }, [])

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users')
      setUsers(response.data);

    } catch (error) {
      alert(error)
    }
  }

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
      setTodos(response.data);

    } catch (error) {
      alert(error)
    }
  }

  return (
    <>
    <EventExample />
      <Card
        width="300px"
        height="300px"
        variant={CardVariant.outline}
      >
        <button>click</button>
      </Card>
      <List items={users}
        renderItem={(user: IUser) => <UserItem user={user} key={user.id} />}
      />
      <List items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} /> }
      />
    </>
  )
}

export default App;
