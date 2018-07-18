import React, { Component } from 'react';
import './App.css';


export default class MessageItem extends Component{
    constructor(props){
        super(props);
    }


    onMsgClick = () => {
        const { onClick,item } = this.props;
        if(onClick){   
            onClick(item);
        }
    }


    render(){
        const {item} = this.props;
        return(
            
        )
    }

}