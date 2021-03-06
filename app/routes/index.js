import React, { Component } from 'react';
import { Router, Stack, Scene, Actions, ActionConst } from 'react-native-router-flux';
import Main from './Main';
import Info from './Info';
import Ware from './WareHouse';
import Setting from './Setting';
import Demo from './Demo';
import Apply from './Apply';
import Splash from './Splash'
import Card from './Card'
import List from './List'
export default class MyRouter extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="List" hideNavBar component={List}></Scene>
                    <Scene key="Card" hideNavBar component={Card}></Scene>
                    <Scene key="Setting" hideNavBar component={Setting} title="Setting"></Scene>
                    <Scene key="Main" component={Main} title="Main"></Scene>
                    <Scene key="Apply" hideNavBar component={Apply} title="Apply"></Scene>
                    <Scene key="Splash" hideNavBar component={Splash}></Scene>
                    <Scene key="Demo" hideNavBar component={Demo} title="Demo"></Scene>
                    {/* <Scene key="Info" com1ponent={Info} title="Info"></Scene> */}
                    <Scene key="Ware" component={Ware} title="Ware"></Scene>
                </Stack>
            </Router>
        );
    }
}