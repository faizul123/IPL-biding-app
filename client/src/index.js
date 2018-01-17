import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Banner from './components/banner/Banner'
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Banner bannerImgURL="vivo-ipl-2018-1.jpg" />, document.getElementById('root'));
registerServiceWorker();
