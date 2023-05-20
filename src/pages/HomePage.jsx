import React from 'react'
import { About } from '../components/about/About'
import { MainContent } from './../components/mainContent/MainContent';

export const HomePage = ({db, favorite ,setFavorite, searchedData, headphonesSearchedData}) => {
  return (
    <div>
      <About/>
      <MainContent db={db} favorite={favorite} setFavorite={setFavorite} searchedData={searchedData} headphonesSearchedData={headphonesSearchedData}/>
    </div>
  ) 
}
