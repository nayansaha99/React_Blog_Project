import React, { useEffect, useState } from 'react';
import Layout from '../Layout/layout';
import { useParams } from 'react-router-dom';
import {postDetails } from '../APIRequest/APIRequest';
import Loader from '../component/Loader';
import BlogDetails from '../component/BlogDetails';

const DetailsPage = () => {
let{postID}=useParams();
let[list,SetList]=useState(null);

useEffect(()=>{
  (async ()=>{

    let res = await postDetails(postID);
    SetList(res);


  })()
},[postID])


    return (
      <Layout>
        {list===null?<Loader/>:<BlogDetails list={list} />}
      </Layout>
    );
};

export default DetailsPage;