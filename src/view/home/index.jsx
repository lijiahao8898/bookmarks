import React, {Component} from 'react';
import Card from '@/components/card/index';

const css = [{
    title: 'dowebok',
    url: 'http://www.dowebok.com/',
}, {
    title: 'css 如何让你的文字更有文艺范',
    url: 'https://juejin.im/entry/5997cd576fb9a02493220164',
}, {
    title: 'css3 hover 大法',
    url: 'http://www.jq22.com/yanshi2597',
}, {
    title: 'H5颜色渐变3D文字特效',
    url: 'http://www.html5tricks.com/demo/html5-gradient-3d-text/index.html',
}, {
    title: 'jq 跑马灯',
    url: 'http://down.admin5.com/demo/code_pop/19/802/index.html',
}, {
    title: '人物头像跟随鼠标动',
    url: 'http://www.jq22.com/yanshi4047'
}, {
    title: '人物头像跟随鼠标动',
    url: 'http://www.jq22.com/yanshi4047'
}, {
    title: '人物头像跟随鼠标动',
    url: 'http://www.jq22.com/yanshi4047'
}, {
    title: '人物头像跟随鼠标动',
    url: 'http://www.jq22.com/yanshi4047'
}, {
    title: '人物头像跟随鼠标动',
    url: 'http://www.jq22.com/yanshi4047'
}, {
    title: '人物头像跟随鼠标动',
    url: 'http://www.jq22.com/yanshi4047'
}, {
    title: '人物头像跟随鼠标动',
    url: 'http://www.jq22.com/yanshi4047'
}, {
    title: '人物头像跟随鼠标动',
    url: 'http://www.jq22.com/yanshi4047'
}, {
    title: '人物头像跟随鼠标动',
    url: 'http://www.jq22.com/yanshi4047'
}];

class Home extends Component {
    render () {
        return (
            <div>
                <Card cardList={css} type="css"/>
                <Card cardList={css} type="css"/>
                <Card cardList={css} type="css"/>
                <Card cardList={css} type="css"/>
                <Card cardList={css} type="css"/>
                <Card cardList={css} type="css"/>
            </div>
        )
    }
}

export default Home