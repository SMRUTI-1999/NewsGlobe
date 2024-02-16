import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { imageUrl, title, desc, newsId, author, published, source } = this.props
        return (
            <div className={`newsItem card bg-${this.props.mode === 'light'?'light':'dark'}`}>
                <span className="badge rounded-pill bg-success" style={{position: 'absolute', right: '0'}}>
                    {source}
                </span>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className={`card-title text-${this.props.mode === 'light'?'dark':'light'}`}>{title}</h5>
                    <p className={`card-text text-${this.props.mode === 'light'?'dark':'light'}`}>{desc}</p>
                    <p className={`card-text text-${this.props.mode === 'light'?'dark':'light'}`}><small className="text-body-secondary">By {author} published at {published}</small></p>
                    <a href={newsId} target='_blank' rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                </div>
            </div>
        )
    }
}

export default NewsItem