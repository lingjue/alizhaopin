import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import Banner from './../staick/img/banner.png'
import "./../css/Farme.css"
import Background from './../staick/img/background.png'
import List from './List'
import Aliyun from './../staick/img/ALiYun.png'
import ALiZiNeng from './../staick/img/ALiZiNeng.svg'
function Frame() {
    return (
    <>
    <Row>
      <Col span={24} >
          <div className={`Background header`}>
            <div className="flex">
              <img src={ Banner } alt="阿里巴巴集团招聘" className="imgBan" />   
              <i className="shezhao" >|</i>        
              <i className="shezhao" style= {{fontSize:"14px"}} >社招官网</i>  
              <ul>
                <li><a href="javascript" style={{color:"#f37327"}}>首&nbsp;&nbsp;页</a></li>
                <li><a href="javascript">社会招聘</a></li>
                <li><a href="javascript">校园招聘</a></li>
                <li><a href="javascript">了解阿里</a></li>
                <li><a href="javascript">个人中心</a></li>
                <div className="login">
                  欢迎来到阿里巴巴集团招聘！
                  <a href="javascript" className="a1">登录</a>
                  |
                  <a href="javascript" className="a1">注册</a>
                </div>
              </ul>
            </div>
          </div>
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <div className="content">
        <img src={ Background } alt="背景" className="backImg"/>
        <div className="absolu"></div>
        <div className="mid-index">
            {/* <from className="from"> */}
              <div className="float-mid">
                <p className="fontSize">If not now, when?</p>
                <p className="fontSize">If not me, who?</p>
                <p className="fontSize" style={{fontSize:'34px',lineHeight:"48px",margin:"0 0 38px" }}>此时此刻，非我莫属！</p>
                <div className="seach">
                    {/* <span className="seach-topic" style={{}}>请输入职位关键词</span> */}
                    <div className="inputic">
                    </div>
                    <Input placeholder="请输入职位关键词" className="inputcc"></Input>
                    <Button  className="btn">搜索</Button>
                </div>
                <div style={{color:"rgba(255,255,255,0.8)",marginLeft:"24px"}}>
                  热门搜索：
                  <a href="javascript" className="maee">JAVA</a>
                  <a href="javascript" className="maee">IOS</a>
                  <a href="javascript" className="maee">数据</a>
                  <a href="javascript" className="maee">安全</a>
                  <a href="javascript" className="maee">搜索</a>
                  <a href="javascript" className="maee">算法</a>
                  <a href="javascript" className="maee">运营</a>
                  <a href="javascript" className="maee">视觉</a>
                  <a href="javascript" className="maee">交互</a>
                  <a href="javascript" className="maee">前端</a>
                </div>
              </div>
            {/* </from> */}

        </div>
        </div>
      </Col>

    </Row>
    <Row>

      <Col span={24}>
          <div className="content-top">
            <div className="new-content">
            <List ></List>
         <div style={{width:"310px",float:"right"}}>
           <a href="javascript" className="fangkuai">
             <img src={Aliyun} alt="阿里云" className="aliyun"/>
           </a>
           <a href="javascript" className="fangkuai">
             <img src={ALiZiNeng} alt="阿里智能" className="aliyun"/>
           </a>
         </div>
            </div>
          </div>
         </Col>
        
    </Row>
    <Row >
      <Col span={24} className="footer">
            <div className="footer-content">
            阿里巴巴集团 Copyright ©1999-2020 版权所有
            </div>
      </Col>
     
    </Row>

        </>
    )
}

export default Frame
