import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Title, Content} from 'react-mdl';
import Main from './components/main';
import {Link} from 'react-router-dom';


function App() {
  return (

    <div style={{height: '500px', position: 'relative'}}>
    <Layout fixedHeader style={{background: 'url(https://frozenlemonmedia.com/wp-content/uploads/2015/01/abstract-polygon-background-7-e1408078932213.jpg) center / cover'}}>
    <Header title={<span><span style={{ color: '#ff3855' }}> <b>Nathalia Avila</b> </span></span>}>
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/achievements">Achievements</Link>
                <Link to="/skills">Skills/Projects</Link>
                <Link to="/social">Social N</Link>
            </Navigation>
        </Header>
        <Drawer title="Nathalia">
            <Navigation>
                <Link to="/aboutme">About Me</Link>
                <Link to="/achievements">Achievements</Link>
                <Link to="/skills">Skills/Projects</Link>
                <Link to="/social">Social N</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content"/>
            <Main/>

        </Content>
        <Content />
    </Layout>
</div>
    
  );
}

export default App;
