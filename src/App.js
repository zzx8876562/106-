import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const zzx01 =require("./img/0.png");
const zzx02 =require("./img/1.jpg");
const zzx03 =require("./img/2.jpg");
const zzx04 =require("./img/3.jpg");
const zzx05 =require("./img/4.jpg");

const zzx06 =require("./img/发现.png");
 const zzx07 =require("./img/微信.png");
 const zzx08 =require("./img/我.png");
 const zzx09 =require("./img/通讯录.png");
class App extends Component {
  render() {
    return (
      <div> 
<div className="box" onclick="handleClickDiv(event)" >

<div className="header">

    <ul>
        <li >
<div className="left">
<img src={zzx01}/>
<dl>
<dt className="Name">小年糕训练营</dt>
<dd>比巴阿布：辛苦了</dd>


</dl>
</div>
<div className="right">
<p>上午：11：11</p>
</div>

        </li>
        <li>
                <div className="left">
                    <img src={zzx02}/>
                     <dl>
                        <dt className="Name">小年糕训练营</dt>
                        <dd>比巴阿布：辛苦了</dd>
                
                     </dl>
                </div>
                <div className="right">
                    <p>上午：11：32</p>
                </div>
                
                                </li>
                                <li>
                                        <div className="left">
                                            <img src={zzx03}/>
                                             <dl>
                                                <dt className="Name">小年糕训练营</dt>
                                                <dd>比巴阿布：辛苦了</dd>
                                        
                                             </dl>
                                        </div>
                                        <div className="right">
                                            <p>上午：11：53</p>
                                        </div>
                                        
                                                        </li>
                                                        <li>
                                                            <div className="left">
                                                                <img src={zzx04}/>
                                                                 <dl>
                                                                    <dt className="Name">小年糕训练营</dt>
                                                                    <dd>比巴阿布：辛苦了</dd>
                                                            
                                                                 </dl>
                                                            </div>
                                                            <div className="right">
                                                                <p>上午：11：53</p>
                                                            </div>
                                                            
                                                                            </li>
                                                                            <li>
                                                                                <div className="left">
                                                                                    <img src={zzx05}/>
                                                                                     <dl>
                                                                                        <dt className="Name">小年糕训练营</dt>
                                                                                        <dd>比巴阿布：辛苦了</dd>
                                                                                
                                                                                     </dl>
                                                                                </div>
                                                                                <div className="right">
                                                                                    <p>上午：11：53</p>
                                                                                </div>
                                                                                
                                                                                                </li>
    </ul>
</div>
<div className="bottom">

    <ul className="one">

        <li>
            <a href="#"><img src={zzx06}/></a>
        
            
        </li>
        <li>
                <a href="#"><img src={zzx07}/></a>            
            </li>
            <li>
                    <a href="#"><img src={zzx08}/></a>
                </li>
                <li>
                        <a href="#"><img src={zzx09}/></a>
                    </li>
    </ul>

    <ul className="two">

        <li>
            <p>微信</p>
        </li>
        <li>
                <p>通讯录</p>
            </li>
            <li>
                    <p>发现</p>
                </li>
                <li>
                        <p>我</p>
                    </li>
    </ul>
</div>
</div>-

        
      </div>

    );
  }
}

class App extends Component {

    constructor(props){
      super(props);
  
      this.state={
        message : [
          {
            zzx: zzx01,
            title : '小年糕前端训练营',
            description : '比巴阿布：辛苦了',
            time : '上午：11：11' 
          },
          {
           zzx : zzx02,
            title : '小年糕前端训练营',
            description : '比巴阿布：辛苦了',
            time : '上午：11：32' 
          },
          {
            zzx : zzx03,
            title : '小年糕前端训练营',
            description : '比巴阿布：辛苦了',
            time : '上午：11：53' 
          },
          {
            zzx : zzx04,
            title : '小年糕前端训练营',
            description : '比巴阿布：辛苦了',
            time : '上午：11：53' 
          },
          {
            zzx : zzx05,
            title : '小年糕前端训练营',
            description : '比巴阿布：辛苦了',
            time : '上午：11：53' 
          },
        ],
        message2 :[
          {
            zzx : zzx06,
            title : '微信'
          },
          {
            zzx : zzx07,
            title : '通讯录'
          },
          {
            zzx : zzx08,
            title : '发现'
          },
          {
            zzx : zzx09,
            title : '我'
          }
  
        ],
        showDailog : false
      }
    }
    onItemClick = (message) =>{
        console.log(message);
        this.setState({
          showDailog : true   //控制DialogView的显示
        })
    }
  
    renderDailog = () => {
      if(this.setState.showDailog){
        //  return <DialogView />
      }
      return null;
    }
   
  
    renderMessages = () => {
        const msg = this.state.message.map((item,idx) => {
          return <MessageItemView key={idx} item={item} onClick={this.onItemClick} />
      });
      return msg;
    }
    renderMessages1 = () => {
      const msg = this.state.message2.map((item,idx) => {
        return <ButtonItemView key={idx} item={item}  />
    });
    return msg;
  }
  
  
  
  render() {
    return (
      <div>
            <ul>
              {
                this.renderDailog()
              }
              {
                this.renderMessages()
              }
            </ul>
  
            <nav className="chat-nav">
              {
                this.renderDailog()
              }
               {
                this.renderMessages1()
              }
             
            </nav>
            <div>
  
  
            </div>
      
      </div>
  
  
  
    );
  }
  }
  
export default App;
