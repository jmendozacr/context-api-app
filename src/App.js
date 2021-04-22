import React from 'react';
import styled from 'styled-components';
import { Route, Switch } from 'react-router-dom';
import Header from './components/header/Header';
import About from './pages/About';
import Blog from './pages/Blog';
import Home from './pages/Home';
import Article from './pages/Article';
import Error404 from './pages/Error404';

function App() {
    return (
        <Container>
            <Header/>
            <Main>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/about" component={About} />
                    <Route path="/post/:id" component={Article} />
                    <Route component={Error404} />
                </Switch>
            </Main>
        </Container>
    );
}

const Container = styled.div`
    padding: 40px;
    width: 90%;
    max-width: 700px;
`;

const Main = styled.main`
    background: #fff;
    padding: 40px;
    border-radius: 10px;
    box-shadow: 0px 0px 5px rgba(129, 129, 129, 0.1);
`;

export default App;