import React from 'react';
import { createRoot } from 'react-dom/client';
// import { CallBackHook } from './components/06-memos/CallBackHook';
import { Padre } from './components/07-tarea-memo/Padre';
// import { MemoHook } from './components/06-memos/MemoHook';
// import { FocusScreen } from './components/03-useRef/FocusScreen';
// import { Layout } from './components/04-useLayoutEffect/Layout';
// import { Memorize } from './components/06-memos/Memorize';
// import { SimpleForm } from './components/02-UseEffect/SimpleForm';
// import { HooksApp } from './HooksApp';
// import { CounterApp } from './components/01-useState/CounterApp';
//import { WithCustomHook } from './components/01-useState/WithCustomHook';
// import { FormwithHook } from './components/02-UseEffect/FormWithHook';
// import { MultiCustomHooks } from './components/Examples/MultiCustomHooks';

import './index.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Padre />);