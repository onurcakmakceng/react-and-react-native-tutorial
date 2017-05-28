import React from 'react';
import ReactDOM from 'react-dom';
import Title from './Title';
import StockList from './StockList';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<div>
                    <Title />
                    <StockList />
                </div>, document.getElementById('root'));

registerServiceWorker();
