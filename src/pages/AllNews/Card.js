import React,{useState,useEffect} from 'react';
import { BiDetail } from 'react-icons/bi';
import api from '../../Api'
import SkeletonNews from '../../components/News/SkeletonNews'

import {
    ServicesContainer,
    SerivicesH1,
    SerivicesWrapper,
    SerivicesCard,
    SerivicesIcon,
    SerivicesH2,
    SerivicesP,
    NewsButtonR
} from './CardElements';

const Card = () => {
    const [loading, setLoading] = useState(false);
    const [ posts, setPosts] = useState(null);

        const fetchPosts = () => {
            api.getAllPost().then(res => {
            const result = res.data;
            setPosts(result.data)
    });
    }

        useEffect(() => {
            fetchPosts();
        },[]);

    //   Skeleton
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
    return posts.map((post) => (
      
      
           <SerivicesCard>
                <SerivicesIcon src={post.thumbnail}/>
                <SerivicesH2>  <b>{post.title}</b> </SerivicesH2>
                <SerivicesP>{post.description}</SerivicesP>
                <NewsButtonR> <BiDetail/> Baca</NewsButtonR>
           </SerivicesCard>
    ))
}
    return (
          <ServicesContainer id='berita'>
              <SerivicesH1>  </SerivicesH1>
              <SerivicesH1>  </SerivicesH1>
          <SerivicesWrapper>
                  {renderPosts()}
                  
           </SerivicesWrapper>
           <br/>
        </ServicesContainer>
    )
}

export default Card;
