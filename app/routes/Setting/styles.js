import {StyleSheet} from 'react-native';
import Dimensions from 'Dimensions';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        flexDirection: 'column',
        flexWrap: 'wrap',
    },
    headContainer:{
        flexDirection:'row', 
        backgroundColor:'gray',
        
    },
    text:{
        marginLeft:10,
        width:80,
    },
    viewContainer:{
        height:60,    
        alignItems:'center',
        backgroundColor:'#FFF',
        marginLeft:3,
        marginRight:3,
        marginTop:1,
        flex:1,
        flexDirection:"row",
    },
    topViewContainer:{
        height:60,    
        alignItems:'center',
        backgroundColor:'#FFF',
        marginLeft:3,
        marginRight:3,
        marginTop:10,
        flex:1,
        flexDirection:"row",
    },
    headImge:{
        height:30,
        width:30,
        marginLeft:30
    },
    textContent:{
        marginLeft:30,
    },
    backImage:{
        height:20,
        width:20,
        position:'absolute',
        right:10,
    },
    selectSex:{
        flexDirection:"row",
        position:'absolute',
        right:10,
    }
    
});

export default styles;