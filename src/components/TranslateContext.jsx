import React from 'react';
import * as json from './portfolio.json';

const TranslateContext = React.createContext(json.default);

export default TranslateContext;
