import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './views/Header';
import BookList from './views/BookList';
import BookDetail from './views/BookDetail';
import LoginForm from './views/LoginForm';
import BorrowedBooks from './views/BorrowedBooks';

const App = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={BookList} />
        <Route exact path="/books/:id" component={BookDetail} />
        <Route exact path="/login" component={LoginForm} />
        <Route exact path="/borrowed-books" component={BorrowedBooks} />
      </Switch>
    </Router>
  );
};

export default App;
