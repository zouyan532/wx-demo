import React from 'react';

import index, { connect } from 'dva';
import {Image, ToastAndroid} from 'react-native'
import {ActionSheet,View,Thumbnail ,DeckSwiper,Card,CardItem, Container, Header, Content, Button, Icon, List, ListItem, Text ,Left, Body, Right, Title} from 'native-base';
import {BarCodeScanner,Permissions,MapView} from 'expo' 
import {SectionList} from 'react-native'
class RefreshList extends React.Component {
    constructor(props){
        super(props),
        this.actionSheet = null;
        this.state={
            isReady: false,
            refreshing:false,
            sections:[
                {data: [{title: 'a'}, {title: 'a'}, {title: 'a'}, {title: 'a'}], title: '第一个头部'},
                {data: [{title: 'a'}, {title: 'a'}], title: '第2个头部'},
                {data: [{title: 'a'}], title: '第3个头部'}
            ],
            isFirst:true,
        }
    }
    componentWillMount(){
   
    }

    async componentWillMount() {  
        
        await Expo.Font.loadAsync({  
            'Roboto': require('native-base/Fonts/Roboto.ttf'),  
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),  
        });  
        this.setState({ isReady: true });  
    }  

    _keyExtractor=(item,index)=>index

    _renderItem=(item)=>{
        return <Text
        style={{
            height: 100,
            textAlignVertical: 'center',
            color: 'gray',
            fontSize: 15
        }}>{item.title}</Text>
    }

    _ItemSeparatorComponent=()=>{
        return(
            <View style={{backgroundColor:"#fff",height:1}}/>
        )
    }

    _onRefresh=()=>{
        console.log(this.state.sections[0].data)
        this.setState({
            refreshing:true
        })
        setTimeout(()=>{
            this.state.sections[0].data.pop()
            this.setState({
                refreshing:false
            })
        },2000)
    }

    render() {
        if (!this.state.isReady) {  
            return <Expo.AppLoading />;  
        }  
          return (
            <View style={{flex:1}}>
                <Header>
                    <Left>
                        <Button transparent >
                        <Icon name="heart" size={20} color='red'/>
                        </Button>
                    </Left>
                    <Body>
                        <Title>List</Title>
                    </Body>
                    <Right/>
                </Header>
                <SectionList
                    keyExtractor={this._keyExtractor}
                    sections={this.state.sections}
                    renderSectionHeader={({section})=> 
                        <Text
                            style={{
                                height: 50,
                                textAlign: 'center',
                                textAlignVertical: 'center',
                                backgroundColor: 'black',
                                color: 'white',
                                fontSize: 30
                            }}
                        >{section.title}</Text>
                        }
                    refreshing={this.state.refreshing}
                    onEndReachedThreshold={0.01}
                    onEndReached={(info)=>{
                        // if(this.state.isFirst){
                        //     this.setState({
                        //         isFirst:false
                        //     })
                        //     return
                        // }
                        ToastAndroid.show("到了底部",ToastAndroid.SHORT)
                        this.setState({
                            sections: this.state.sections.concat(this.state.sections)
                        })

                       
                    }}
                    onRefresh={this._onRefresh}
                    renderItem={this._renderItem}
                    ItemSeparatorComponent={this._ItemSeparatorComponent}
                />
            </View>
          );
    }

}

const mapStateToProps = (state, ownProps) => {
    
	console.log(state, ownProps)
	return {
	};
}

export default connect(mapStateToProps)(RefreshList);