import React, { useEffect, useState } from "react";
import Layout from "../Layout/layout";
import { useParams } from "react-router-dom";
import Bloglist from "../component/Bloglist";
import Loader from "../component/Loader";
import { postByCategory } from "../APIRequest/APIRequest";

const ByCategoryPage = () => {

  let {categoryID} = useParams();

  let [list, SetList] = useState(null);

  useEffect(()=> {
    (async ()=>{
      let res= await postByCategory(categoryID);
      SetList(res);
    })();


  }, [categoryID]);

  return (
    <Layout>
        {list===null?<Loader />:<Bloglist list={list} />}
    </Layout>
  );
};

export default ByCategoryPage;
