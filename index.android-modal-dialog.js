﻿/**
 * Created by peixuan.xie on 2017/2/28.
 */
import React,{Component} from 'react';
import {
    Modal,
    Text,
    TouchableOpacity,
    View,
    StyleSheet,
    AppRegistry
}from 'react-native';

import ModalDialog from './ModalDialog'

  class ModalDemo extends Component {

// 构造
    constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            isDialogVisible: false
        };
    }

    showDialog(){
        this.setState({isDialogVisible:true});
    }

    hideDialog(){
        this.setState({isDialogVisible:false});
    }

    render() {
        return (
            <View style={styles.container}>
                <ModalDialog
                    _dialogVisible={this.state.isDialogVisible}
                    _dialogLeftBtnAction={()=> {this.hideDialog()}}
                    _dialogRightBtnAction={()=>{this.hideDialog()}}
                />
                <TouchableOpacity onPress={()=>this.showDialog()}>
                    <Text style={styles.hello}>dialog</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    hello: {
        fontSize: 20,
        margin: 10,
        textAlign:'left'
    },
});
AppRegistry.registerComponent('ModalDemo', () => ModalDemo);