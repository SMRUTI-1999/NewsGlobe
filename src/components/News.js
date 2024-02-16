import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import Footer from './Footer';

export class News extends Component {
    date = new Date();
    dd = this.date.getDate();
    mm = this.date.getMonth() + 1;
    yyyy = this.date.getFullYear();
    fullDate = `${this.dd}/${this.mm}/${this.yyyy}`
    constructor(){
      super()
      this.state = {
        article : [],
        isLoading : false,
        page : 1,
        pageSize : 20
      }
    }

    async componentDidMount(){
      this.setState({isLoading : true})
      this.props.setProgress(10)
      const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.state.pageSize}`
      let data = await fetch(url);
      this.props.setProgress(30)
      let parsedData = await data.json();
      this.props.setProgress(70)
      this.setState({
        article : parsedData.articles,
        totalResults : parsedData.totalResults,
        isLoading : false
      })
      this.props.setProgress(100)
    }

    handleNext = async ()=>{
      this.setState({isLoading : true})
      this.props.setProgress(10)
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${this.props.apiKey}&page=${this.state.page+1}&pageSize=${this.state.pageSize}`
      let data = await fetch(url);
      this.props.setProgress(30)
      let parsedData = await data.json();
      this.props.setProgress(70)
      this.setState({
        article : parsedData.articles,
        page : this.state.page+1,
        isLoading : false
      })
      this.props.setProgress(100)
    }

    handlePrev = async ()=>{
      this.setState({isLoading : true})
      this.props.setProgress(10)
      const url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${this.props.apiKey}&page=${this.state.page-1}&pageSize=${this.state.pageSize}`
      let data = await fetch(url);
      this.props.setProgress(30)
      let parsedData = await data.json();
      this.props.setProgress(70)
      this.setState({
        article : parsedData.articles,
        page : this.state.page-1,
        isLoading : false
      })
      this.props.setProgress(100)
    }

    capitalize = (str)=>{
      return str.charAt(0).toUpperCase() + str.slice(1)
    }

  render() {
    return (
        <div className="container">
          <h2 className={`text-center text-${this.props.mode === 'light'? 'dark':'light'}`} style={{marginTop : '80px'}}>Top Headlines - {this.capitalize(this.props.category)} - {this.fullDate}</h2>
          {this.state.isLoading && <Spinner/>}
          <div className="row">
            {!this.state.isLoading && this.state.article.map((elem)=>{
              return  <div key={elem.url} className="col-md-3 my-3">
                        <NewsItem mode={this.props.mode} imageUrl={elem.urlToImage? elem.urlToImage : this.props.imageUrl} title={elem.title? elem.title : "Error fetching the news Title"} desc={elem.description? elem.description : "Error fetching the news Description"} newsId={elem.url} author={elem.author} published={new Date(elem.publishedAt).toGMTString()} source={elem.source.name}/>
                      </div>
            })}
          </div>
          {!this.state.isLoading && <div className="d-flex justify-content-between my-3">
            <button className="btn btn-primary" disabled={this.state.page <= 1} onClick={this.handlePrev}>&larr; Prev</button>
            <button className="btn btn-primary" disabled={this.state.page >= Math.ceil(this.state.totalResults/this.state.pageSize)} onClick={this.handleNext}>Next &rarr;</button>
          </div>}
          {!this.state.isLoading && <Footer/>}
        </div>
    )
  }
}

export default News
