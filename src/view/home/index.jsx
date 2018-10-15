import React, {Component} from 'react';
import Card from '@/components/card/index';
import axios from 'axios';

class Home extends Component {
    constructor (props) {
        super(props);
        this.state = {
            organizations: [],
            website: [],
            blog: []
        };
    }

    componentDidMount () {
        axios.get('./mock/readme.json')
            .then((response) => {
                const data = response.data;
                this.setState({
                    organizations: data.Organizations,
                    website: data.Website,
                    blog: data.Blog
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
                    return (
                        <Card cardList={state[key]} type={key} key={key}/>
                    )
                })}
            </div>
        );
    }
}

export default Home;