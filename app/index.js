import React from 'react';
import dva from 'dva-no-router';
import MyRouter from 'app/routes';
import* as modules from './models';


const app = dva();

Object.keys(modules).forEach(key=>
app.model(modules[key]));
app.router(() => <MyRouter/>);

export default app.start();