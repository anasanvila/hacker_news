import React, { Component } from 'react'

import HeaderHN from './components/Header/HeaderHN'
import ListItemsHN from './components/ListItems/ListItemsHN.js'
import FooterHN from './components/Footer/FooterHN'
import axios from 'axios'
import { MainBox } from './AppStyle.js'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: [],
      item: {}
    };
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

  render() {
    return (
          <MainBox>
             <HeaderHN refresh={this.refresh} />
             <ListItemsHN />
             <FooterHN />
          </MainBox>
    );
  }
}

export default App
