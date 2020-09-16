import React from 'react'
import './Searchpage.css'
import {useStateValue} from "../StateProvider";
import Googlesearch from "../googlesearch";
import { Link } from 'react-router-dom';
import Search from './Search';
function Searchpage() {
    const [{term},dispatch]=useStateValue();
    const {data} = Googlesearch(term);
    console.log(data)
    return (
        <div className='searchpage'>
            <div className='searchheader'>
               <Link to="/" >  <img className="searchicon" src="https://pngimg.com/uploads/google/google_PNG19644.png" alt=""></img></Link>
                 <div className="searchbody">
                       <Search hideButtons/>
                      <div className="searchoption">
                         <div className="searchleft">
                           <div className="searchoption">
                
                              <Link to="/all">All</Link>
                           </div>
                          </div>
                        </div>
                     </div>
                  </div>
            {term&&(<div className='searchresults'>
                <p className="searchcount">
                    About {data?.searchInformation.formattedTotalResults}
                    Results({data?.searchInformation.formattedSearchTime} seconds)
               for {term}
                </p>
                    {data?.items.map(item=>(
                 <div className='searchresult'>
                      <a href={item.link}>
                          {item.pagemap?.cse_image?.
                          length > 0 &&
                           item.pagemap?.cse_image
                           [0]?.src && (
                           <img
                            className="resultimage" 
                            src={item.pagemap?.
                            cse_image?.length> 0 && item.pagemap?.cse_image[0]?.src}alt=""/>)}
                       {item.displayLink}
                      </a>
                      <a className="resulttittle" href={item.link}><h2>{item.title}</h2></a>
                      <p className="resultsnippt">{item.snippet}</p>
                 </div>
            ))}
           
        </div>)}</div>
        
    )
                    }

export default Searchpage;
