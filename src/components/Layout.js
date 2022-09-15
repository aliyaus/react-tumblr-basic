import React, { useState } from 'react'
import Masonry from 'react-masonry-css'
import ContentCard from './ContentCard';
import content from '../data/contentData.json';
import Avatar from './Avatar';
import { AiFillHome } from 'react-icons/ai';
import { BsGearFill } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';

const pageProfile = {
  headerDescription: "a basic tumblr blog",
  profileDescription: "...this is my art, my blog, my happy place..."
}

const breakpointColumnsObj = {
  default: 3,
  2500: 4,
  1100: 3,
  700: 2,
  500: 1
};

function Layout() {

  const navigate = useNavigate();

  const [searchText, setSearchText] = useState('');

  const search = () => {
    let allItems = content;
    return allItems.filter((item) => {
      return (
        item["tags"].toString().toLowerCase().indexOf(searchText.toLowerCase()) > -1
      )
    })
  }

  return (
    <div className="layout-container">
      <div className="layout-edit-bar">
        <div className="layout-btn" onClick={() => navigate('/')}> <AiFillHome /></div>
        <div className="layout-btn"> <BsGearFill /></div>
      </div>
      <div className="layout-header">
        <Avatar image={''} />
        <div className="profile-header-text">
          <h4>{pageProfile.headerDescription}</h4>
        </div>
        <p>{pageProfile.profileDescription}</p>
        <input placeholder='search...' onKeyDown={() => search()} onChange={(text) => setSearchText(text.target.value)}></input>
      </div>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {
          search(content).map((item, idx) => (
            <ContentCard item={item} key={idx} />
          ))
        }
      </Masonry>
    </div>
  )
}

export default Layout