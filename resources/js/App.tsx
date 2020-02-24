import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import styled from 'styled-components';
import Home from './components/Pages/Home';
import Tag from './components/Pages/Tag';
import Post from './components/Pages/Post';
import Sidebar from './components/Simple/Sidebar';

const PageWrapper = styled.div`
  @media (min-width: 65em) {
    overflow: visible;
  }
`;

const Wrapper = styled.div`
  max-width: 80em;
  @media (min-width: 65em) {
    display: flex;
    padding: 0 2em;
  }
  @media (max-width: 65em) {
    margin: 0.5em;
  }
`;

const Content = styled.section`
  @media (min-width: 65em) {
    overflow: visible;
    padding: 0 0 0 4.25em;
    width: 55em;
  }
  flex: 1;
  background-color: white;
`;

export const App = () => (
  <Router>
    <PageWrapper>
      <Wrapper>
        <Sidebar />
        <Content>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/tags/:slug' exact component={Tag} />
            <Route path='/posts/:slug' exact component={Post} />
          </Switch>
          Authored by <a href='https://kordes.dev'>Dev Kordes</a>
        </Content>
      </Wrapper>
    </PageWrapper>
  </Router>
);
