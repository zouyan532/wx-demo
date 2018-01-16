import React, { Component, PropTypes } from 'react';
import styles from './Style'
import { View, Image, Text,TouchableHighlight } from 'react-native';

class DefaultNavBar extends Component{
    constructor(props){
        super(props)
        this.state={

        }
    }

    render(){
        return (
            <View style={styles.headContainer}>
                <TouchableHighlight underlayColor={'transparent'} onPress={() => { this.props.onBack(); }}>
                    <View style={[styles.flex1,styles.rowJustifyCenter]}>
                        <Image style={styles.img_toolBarLeft} source={this.props.leftIcon} />
                    </View>
                </TouchableHighlight>  
                <View style={[styles.flex9, styles.rowJustifyCenter]}>
                    <Text style={styles.titleText}>{this.props.title}</Text>
                </View>
                <View style={{ flex: 0.5 }} ></View>
            </View>
        );
    }
}
// DefaultNavBar.propTypes = {
//     title: PropTypes.string,
//     onBack: PropTypes.func,
// };
export default DefaultNavBar;