import React from 'react';

import {connect} from 'dva';
import {Image} from 'react-native'
import {ActionSheet,View,Thumbnail ,DeckSwiper,Card,CardItem, Container, Header, Content, Button, Icon, List, ListItem, Text ,Left, Body, Right, Title} from 'native-base';
import {BarCodeScanner,Permissions,MapView} from 'expo'
var BUTTONS = ["Option 0", "Option 1", "Option 2", "Delete", "Cancel"];
var DESTRUCTIVE_INDEX = 3;
var CANCEL_INDEX = 4;

const cards = [
    {
        text:'Card One',
        name:'One',
        image:require('../../image/ship_adt_fail.png')
    },
    {
        text:'Card Two',
        name:'Two',
        image:require('../../image/ship_aud.png')
    }
]
class Setting extends React.Component {
    constructor(props){
        super(props),
        this.actionSheet = null;
        this.state={
            isReady: false  ,
            hasCameraPermission: null,
            btn_disabled:false,
        }
    }

    async componentWillMount() {  
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({hasCameraPermission: status === 'granted'});
        
        await Expo.Font.loadAsync({  
            'Roboto': require('native-base/Fonts/Roboto.ttf'),  
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),  
        });  
        this.setState({ isReady: true });  
    }  
    render() {
        const { hasCameraPermission } = this.state;
        if (!this.state.isReady) {  
            return <Expo.AppLoading />;  
        }  
          return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent >
                        <Icon name="heart" size={20} color='red'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>ActionSheet</Title>
                    </Body>
                    <Right/>
                </Header>
                <Content padder>
                    <Button onPress={() => this.showActionSheet()} bordered  disabled={this.state.btn_disabled}>
                        <Text>Action Sheet!</Text>
                    </Button>
                    <ActionSheet ref={(c) => { this.actionSheet = c; }} />
                </Content>
            </Container>
          );
    }

    showActionSheet() {
        if ( this.actionSheet !== null ) {
            // Call as you would ActionSheet.show(config, callback)
            this.actionSheet._root.showActionSheet(
                {
                    options: BUTTONS,
                    cancelButtonIndex: CANCEL_INDEX,
                    destructiveButtonIndex: DESTRUCTIVE_INDEX,
                    title: "Testing ActionSheet"
                },
                (index)=>{
                    console.log(index)
                    this.setState({
                        btn_disabled:true
                    })
                }
                );
        }
    }
    _handleBarCodeRead = ({ type, data }) => {
        alert(`Bar code with type ${type} and data ${data} has been scanned!`);
      }
}

const mapStateToProps = (state, ownProps) => {
    
	console.log(state, ownProps)
	return {
	};
}

export default connect(mapStateToProps)(Setting);