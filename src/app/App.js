import React, { Component } from 'react'
import HeaderHN from './components/Header/HeaderHN'
import ListItemsHN from './components/ListItems/ListItemsHN'
import FooterHN from './components/Footer/FooterHN'
import axios from 'axios'
import { MainBox } from './AppStyle'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      item: {}
    }
  }

  getListOfBestStories(){
    axios.get('https:/hacker-news.firebaseio.com/v0/beststories.json?print=pretty&orderBy="$key"&limitToFirst=20',
    {
      headers: {        
          "X-RapidAPI-Host": "community-hacker-news-v1.p.rapidapi.com",
          "X-RapidAPI-Key": "20bf02c64bmshe1a7544480fd5c4p1348a6jsne490756e066e",
          "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(result=>{
      this.setState({ data: result.data })
    });
  }

  getItem(){
    axios.get('https:/hacker-news.firebaseio.com/v0/item/8863.json?print=pretty',
    {
      headers: {        
          "X-RapidAPI-Host": "community-hacker-news-v1.p.rapidapi.com",
          "X-RapidAPI-Key": "20bf02c64bmshe1a7544480fd5c4p1348a6jsne490756e066e",
          "Content-Type": "application/x-www-form-urlencoded"
      }
    }).then(result=>{
      this.setState({ item: result.data })
    });
  }

  componentDidMount() {
    this.getListOfBestStories()    
    this.getItem()
  }

  refresh(){
    console.log("refresh")
  }
  
  prev() {
    console.log("prev")
  }

  more() {
    console.log("more")
  }
  
  itemsArr = ([
    {
      key: 1,
      id: 8863,
      by: "justin",
      score: 21,
      kids: [8952, 9224, 8917],
      time: 1210981217,
      title: "Justin.tv is biggest",
      url: "lwn.net",
    }, 
    {
      key: 5,
      id: 8863,
      by: "ana",
      score: 30,
      kids: [8952, 9224, 8917],
      time: 1314211127,
      title: "Anna.tv is better",
      url: "lwn.net",
    }
  ])
  
  render() {
    return (
          <MainBox>
             <HeaderHN refresh={this.refresh} />
             <ListItemsHN itemsArr={this.itemsArr}/>
             <FooterHN prev={this.prev} more={this.more}/>
          </MainBox>
    );
  }
}

export default App
