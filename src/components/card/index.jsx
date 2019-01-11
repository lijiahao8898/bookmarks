import React, {Component} from 'react';
import './index.scss';

class Card extends Component {
    render () {
        const cardList = this.props.cardList;
        return (
            <div className="card">
                <span className="card-title">{this.props.type}</span>
                <div className="card-list">
                    {
                        cardList.map((item, index) => {
                            return (
                                <a href={item.url} target="_blank" key={index}>
                                    <span className="card-index">{index + 1}.</span>
                                    <span className="card-list__name">{item.title.toUpperCase()}</span>
                                </a>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Card