import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Title, Content} from 'react-mdl';

function App() {
  return (

    <div style={{height: '300px', position: 'relative'}}>
    <Layout fixedHeader style={{background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}>
    <Header title={<span><span style={{ color: '#ddd' }}>Nathalia / </span><strong>Indigo</strong></span>}>
            <Navigation>
                <a href="#">About Me</a>
                <a href="#">Achievements</a>
                <a href="#">Skills/Projects</a>
                <a href="#">Social</a>
            </Navigation>
        </Header>
        <Drawer title="Title">
            <Navigation>
                <a href="#">About Me</a>
                <a href="#">Achievements</a>
                <a href="#">Skills/Projects</a>
                <a href="#">Social</a>
            </Navigation>
        </Drawer>
        <Content />
    </Layout>
</div>
    
  );
}

export default App;
