import React from 'react';
import { createRoot } from 'react-dom/client';
import { FormwithHook } from './components/02-UseEffect/FormWithHook';
// import { SimpleForm } from './components/02-UseEffect/SimpleForm';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './components/01-useState/CounterApp';
//import { WithCustomHook } from './components/01-useState/WithCustomHook';
import './index.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<FormwithHook />);