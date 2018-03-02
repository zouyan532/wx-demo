import React from 'react';

import {connect} from 'dva';
import styles from './styles'
import {View, ListView } from 'react-native';
import { Container, Header, Content, Button, Icon, List, ListItem, Text ,Left, Body, Right, Title} from 'native-base';

const datas=['1','2','3','5','36']
class Setting extends React.Component {
    constructor(props){
        super(props),
        this.ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2})
        this.state={
            basic:true,
            listViewData:datas,
            isReady: false  
        }
    }

    deleteRow=(secId,rowId,rowMap)=>{
        rowMap[`${secId}${rowId}`].props.closeRow();
        const newData = [...this.state.listViewData]
        newData.splice(rowId,1)
        this.setState({
            listViewData:newData
        })
    }

    async componentWillMount() {  
        await Expo.Font.loadAsync({  
            'Roboto': require('native-base/Fonts/Roboto.ttf'),  
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),  
        });  
        this.setState({ isReady: true });  
    }  
    render() {
        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2})
        if (!this.state.isReady) {  
            return <Expo.AppLoading />;  
        }  
        return (
            <Container>
                <Header >
                    <Left>
                        <Button transparent>
                        <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body style={{alignItems:'center'}}>
                        <Title style={{alignSelf:'center'}}>Header</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                        <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
                <Content>
                <List
                    dataSource={this.ds.cloneWithRows(this.state.listViewData)}
                    renderRow={data =>
                    <ListItem>
                        <Text> {data} </Text>
                    </ListItem>}
                    renderLeftHiddenRow={data =>
                    <Button full onPress={() => alert(data)}>
                        <Icon active name="information-circle" />
                    </Button>}
                    renderRightHiddenRow={(data, secId, rowId, rowMap) =>
                    <Button full danger onPress={_ => this.deleteRow(secId, rowId, rowMap)}>
                        <Icon active name="trash" />
                    </Button>}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state, ownProps) => {
    
	console.log(state, ownProps)
	return {
	};
}

export default connect(mapStateToProps)(Setting);