import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss'
import { Button } from 'antd';

const TestMe = () => (
  <div>
    <p>Можно я тут постою? =)</p>
  </div>
 )
ReactDOM.render( <TestMe/> , document.getElementById('app'));