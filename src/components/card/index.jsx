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
                                <div>
                                <a href={item.url} target="_blank" key={index}>
                                    <span className="card-index">{index + 1}.</span>
                                    <span className="card-list__name">{item.title.toUpperCase()}</span>
                                </a>
                                    {item.children && item.children.map((o, i) => {
                                        return (
                                            <a className="card-children" href={o.url} target="_blank" key={i}>
                                                <span className="card-index">*</span>
                                                <span className="card-list__name">{o.title.toUpperCase()}</span>
                                            </a>
                                        )
                                    })}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default Card