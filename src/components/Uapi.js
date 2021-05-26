import React, { useEffect, useState } from 'react'
import Loading from './Loading';

/**
* @author
* @function Gituser
**/

const Gituser = (props) => {
  const [udata,setUdata]=useState([])
  const[loading,setLoading]=useState(true);
  const getusers=async()=>{
    try{
      const res=await fetch("https://api.github.com/users");
      setLoading(false);
      console.log(res);
      // const data=await res.json();
      // console.log(data)
      setUdata(await res.json())
    }catch(error){
          console.log(error)
    }
    

  }

   useEffect(()=>{
       getusers();
   },[])

   if(loading){
     return <Loading />
   }

  return(
      <>
      <h2>Github users</h2>
    <div className="container-fluid-mt-5" >
      <div className="row-text-center">

      {
        udata.map((user)=>{
                 return(
                   <div className="rosh">
                   <div className="col-10 col-md-4 mt-5" key={user.id}>
                      <div className="card p-2">
                                <div className="d-flex align-items-center">
                                        <div className="image"> <img src={user.avatar_url}className="rounded" width="155" /> </div>
                                    <div className="ml-3 w-100">
                                            <h4 className="mb-0 mt-0 textLeft">{user.login} </h4>
                                            {/* <span className="text-left">Developer</span> */}
                                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                                                <div className="d-flex flex-column">
                                                    <span className="articles">Articles</span> <span className="number1">50</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="followers">Followers</span> <span className="number2">1000</span> </div>
                                                <div className="d-flex flex-column">
                                                    <span className="rating">Rating</span> <span className="number3">4.5</span> </div>
                                        </div>
                                      
                                    </div>
                             </div>
                          </div>
                    </div>
                   </div>
                 )
        })
      }

     

      </div>
    
    </div>
    </>
   )

 }

export default Gituser