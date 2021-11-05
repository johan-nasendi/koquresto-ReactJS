import React,{useState,useEffect} from 'react';
import { BiDetail } from 'react-icons/bi';
import api from '../../Api'
import SkeletonNews from './SkeletonNews'

import {
    ServicesContainer,
    SerivicesH1,
    SerivicesWrapper,
    SerivicesCard,
    SerivicesIcon,
    SerivicesH2,
    SerivicesP,
    NewsButtonR
} from './NewsElements';
import Show from './Show';

const News = () => {
    // Modal
    const [ posts, setPosts] = useState(null);
    const [model, setModel] = useState(false);
    const [tempData, setTempData] = useState([]);

    // Paginate

        const fetchPosts = () => {
            api.getAllPost().then(res => {
            const result = res.data;
            setPosts(result.data)
    });
    }

        useEffect(() => {
            fetchPosts();
        },[]);

   
        const [loading, setLoading] = useState(false);
  
        useEffect(() => {
          setLoading(true);
          const timing = setTimeout(() => {
    
            setLoading(true);
          }, 3000);
          return () => clearTimeout(timing);
        }, []);



 const renderPosts = () => {
    if(!posts) {
        return (

        <SerivicesH1> 
         {loading && <SkeletonNews/>}       
       </SerivicesH1> 
        );
    }
    
const getData = (thumbnail,title,description,content) => {
    let tempData = [thumbnail,title,description,content];
    setTempData(post => [1, ...tempData])
    return setModel(true)
}


    return posts.map((post) => (
        
        <>
           <SerivicesCard>
                <SerivicesIcon src={post.thumbnail}/>
                <SerivicesH2>  <b>{post.title}</b> </SerivicesH2>
                <SerivicesP>{post.description}</SerivicesP>
                <NewsButtonR to="#" onClick={() => 
                    getData(post.thumbnail, post.title, post.description, 
                    )}> 
                <BiDetail/> Baca</NewsButtonR>
           </SerivicesCard>
         </>
    ))
}
    return (
          <ServicesContainer id='berita'>
              <SerivicesH1> Tong Berita </SerivicesH1>
          <SerivicesWrapper>
        
                  {renderPosts()}
                 
           </SerivicesWrapper>
           <br/>
                
                {
                    model === true ? 
                    <Show 
                    thumbnail={tempData[1]}  
                    title={tempData[2]} 
                    description={tempData[3]} 
                    hide={() => setModel(false)} />: ''
                }
                <NewsButtonR to="/allnews">Semua Berita</NewsButtonR>
        </ServicesContainer>
    )
}

export default News;
