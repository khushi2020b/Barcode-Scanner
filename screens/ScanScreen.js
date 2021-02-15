import React,{Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import * as Permissions from 'expo-perssions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import { convertTypeAcquisitionFromJson } from 'typescript';

export default class ScanScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            hasCameraPermissions: null,
            scanned: false,
            scannedData: '',
            buttonState: 'normal'
        }
    }

    getCameraPermissions = async() => {
        const{status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermissions: status === "granted",
            buttonState: 'clicked'
        });
    }

    handleBarCodeScanned = async({type, data}) =>{
        this.setState({
            scanned:true,
            scannedData: data,
            buttonState: 'normal'
        });
    }

    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.displayText}>Dummy QR code output</Text>
                <TouchableOpacity style = {styles.scanButton}>
                    <Text style = {styles.buttonText}>Scan QR Code</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    displayText: {
        fontSize: 15,
        textDecorationLine: 'underline'
    },
    scanButton: {
        backgroundColor: '#2196F3',
        padding: 10,
        margin: 10
    }
})