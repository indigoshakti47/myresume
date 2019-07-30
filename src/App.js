import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Title, Content} from 'react-mdl';
import Main from './components/main';


function App() {
  return (

    <div style={{height: '500px', position: 'relative'}}>
    <Layout fixedHeader style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
    <Header title={<span><span style={{ color: '#ff3855' }}> <b>Nathalia Avila</b> </span></span>}>
            <Navigation>
                <a href="#">About Me</a>
                <a href="/">Achievements</a>
                <a href="#">Skills/Projects</a>
                <a href="#">Social</a>
            </Navigation>
        </Header>
        <Drawer title="Nathalia">
            <Navigation>
                <a href="#">About Me</a>
                <a href="#">Achievements</a>
                <a href="#">Skills/Projects</a>
                <a href="#">Social</a>
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
