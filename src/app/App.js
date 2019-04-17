import React, { Component } from 'react'
import HeaderHN from './components/Header/HeaderHN'
import ListItemsHN from './components/ListItems/ListItemsHN'
import FooterHN from './components/Footer/FooterHN'
import axios from 'axios'
import { MainBox } from './AppStyle'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      listID: [],
      item: {},
      itemsArr: [],
      num: 1,
      limit: 20,
      interval: null,
    }
    this.prev = this.prev.bind(this)
    this.more = this.more.bind(this)
    this.refresh = this.refresh.bind(this)
  }

  getListOfBestStories(limit){
    axios.get(`https:/hacker-news.firebaseio.com/v0/beststories.json?print=pretty&orderBy="$key"&limitToFirst=${limit}`,
    {
      headers: {        
          "X-RapidAPI-Host": "community-hacker-news-v1.p.rapidapi.com",         "X-RapidAPI-Key": "20bf02c64bmshe1a7544480fd5c4p1348a6jsne490756e066e",
          "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(result=>{
      this.setState({ listID: result.data })
      this.createItemsArray(result.data)
    });
  }

  getItem(id){
    axios.get(`https:/hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`,
    {
      headers: {        
          "X-RapidAPI-Host": "community-hacker-news-v1.p.rapidapi.com",
          "X-RapidAPI-Key": "20bf02c64bmshe1a7544480fd5c4p1348a6jsne490756e066e",
          "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(result=>{
      let newItem = {...result.data}
      newItem.key=this.state.num
      const newNum=this.state.num+1
      if (newItem.title===undefined) newItem.title="No Title"
      if (newItem.url===undefined) newItem.url="No Url"
      if (newItem.score===undefined) newItem.score="No"
      const itemsArr = [...this.state.itemsArr]
      itemsArr.push(newItem)
      this.setState({ num: newNum, itemsArr })      
    });
  }

  createItemsArray(idArray){
    idArray.forEach(id=>this.getItem(id))
  }

  componentDidMount() {
    this.getListOfBestStories(this.state.limit)
    const myInterval = setInterval(this.refresh, 30000)
    this.setState({interval: myInterval})
  }

  componentWillUnmount(){
    clearInterval(this.state.interval)
  }

  refresh(){
    console.log("this.state.limit", this.state.limit)
    console.log("refreshing")
    const newNum = 1
    this.setState({num: newNum, item: {}, itemsArr: []})
    this.getListOfBestStories(this.state.limit)
  }

  refreshing(limit){
    console.log("refresh, limit", limit )
    const newNum = 1
    this.setState({num: newNum, item: {}, itemsArr: []})
    if (limit) this.getListOfBestStories(limit)
  }
  
  prev() {
    const newLimit = this.state.limit > 20
                      ? this.state.limit - 20
                      : this.state.limit
    console.log("prev",newLimit)
    this.setState({limit: newLimit })
    this.refreshing(newLimit)
  }

  more() {
    const newLimit = this.state.limit + 20
    this.setState({limit: newLimit })
    this.refreshing(newLimit)
  }
  
  render() {
    //{console.log(this.state.listID)}    
    return (
      // <div className="App">
      //   <header className="App-header">
          <MainBox>
            <HeaderHN refresh={this.refresh} />
            <ListItemsHN itemsArr={this.state.itemsArr} />
            <FooterHN prev={this.prev} more={this.more}/>
          </MainBox>
      //   </header>
      // </div>
    );
  }
}

export default App
