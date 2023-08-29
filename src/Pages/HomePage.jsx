import React, { useEffect, useState } from 'react';
import Layout from '../Layout/layout';
import Bloglist from '../component/Bloglist';
import { postLatest } from '../APIRequest/APIRequest';
import Loader from '../component/Loader';
const HomePage = () => {

    let[list,SetList]=useState(null);
    useEffect(()=>{
        (async()=>{
            let res = await postLatest();
            SetList(res);
        })()



    },[])

    return (
     <Layout>
        {list===null?<Loader/>:<Bloglist list={list} />}
     </Layout>
    );
};

export default HomePage;
