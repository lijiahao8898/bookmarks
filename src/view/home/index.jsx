import React, {Component} from 'react';
import Card from '@/components/card/index';
import axios from 'axios';

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            Team: [],
            Website: [],
            Document: [],
            Blog: [],
            Rule: [],
            Vue: [],
            ReactList: [],
            Tool: []
        };
    }

    componentDidMount () {
        axios.get('./mock/readme.json')
            .then((response) => {
                const {Team, Document, Website, Blog, Rule, Vue, ReactList, Tool} = response.data;
                this.setState({
                    Team,
                    Document,
                    Website,
                    Blog,
                    Rule,
                    Vue,
                    ReactList,
                    Tool
                });
            })
            .catch(() => {

            });
    }

    render () {
        const state = this.state;
        return (
            <div>
                {Object.keys(state).map((key) => {
                    console.log(key);
                    if(key === 'ReactList') {
                        // 防止React 冲突
                        const newKey = key.replace('List', '');
                        return (
                            <Card cardList={state[key]} type={newKey} key={key}/>
                        )
                    } else {
                        return (
                            <Card cardList={state[key]} type={key} key={key}/>
                        )
                    }
                })}
            </div>
        );
    }
}

export default Home;