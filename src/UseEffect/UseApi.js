import React, { useEffect, useState } from 'react'

const UseApi = () => {

    const[users,setusers]=useState([])


    const getUsers= async (abortController) => {
            const response= await fetch('https://jsonplaceholder.typicode.com/photos', {signal: abortController.signal});
            // console.log(response);
           setusers (await response.json());
            // console.log(data)
    }

    useEffect(()=>{
        const abortController = new AbortController();

        getUsers(abortController);

        return () => abortController.abort();
    },[setusers])
  return (
    <>
    <h2>List of github users</h2>
    <div className='container-fluid mt-4'>
    <div className="row text-center">

        {
            users.map((curEle)=>{
                return(
                    <>
                   <div className="col-10 col-md-4 mt-5" key={curEle.id}>
            <div className="card p-2">
                <div className="d-flex align-items-center">
                    <div className="image"><img src={curEle.thumbnailUrl} className='rounded' width="155" /></div>
                    <div className="ml-3 w-100">
                        <h4 className='mb-0 mt-0 textLeft'></h4><span className='textLeft'>{curEle.title}</span>
                        <div className="p-2 mt-2 bg-primary d-flex justify-content-between rounded text-white stats">
                            <div className="d-flex flex-column"><span className='articles'>Articles</span><span className='number1'>38</span>
                            <div className="d-flex flex-column"><span className='followers'>followers</span><span className='number2'>938</span>
                            <div className="d-flex flex-column"><span className='rating'>Rating</span><span className='number3'>9.8</span></div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                    </>
                )
            })


        }



        
    </div>

    </div>
    </>
  )
}

export default UseApi