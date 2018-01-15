import React, { Component } from 'react';
import { Router, Stack, Scene, Actions, ActionConst } from 'react-native-router-flux';
import Main from './Main';
import Info from './Info';
import Ware from './WareHouse';
import Setting from './Setting';
import Demo from './Demo';
export default class MyRouter extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="Demo" hideNavBar component={Demo} title="Demo"></Scene>
                    <Scene key="Main" component={Main} title="Main"></Scene>
                    {/* <Scene key="Info" com1ponent={Info} title="Info"></Scene> */}
                    <Scene key="Ware" component={Ware} title="Ware"></Scene>
                    <Scene key="Setting"component={Setting} title="Setting"></Scene>
                </Stack>
            </Router>
        );
    }
}