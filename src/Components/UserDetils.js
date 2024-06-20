import React, { useState } from 'react'

const UserDetils = () => {
    const [detail,setdetail]= useState({
        roll: "",
        enroll: "",
        name: "",
        fname: "",
        mname: "",
        tp: "",
        grade: "",
        st: "",
        sf: "",
        cd: "",

    })

    const detailhandel = (e)=>{
        const { name,value}=e.target
        setdetail((prev)=>{
            return({
                ...prev,
                [name]:value
            })
        })
    }
    
    const alldata=(e)=>{
        e.preventDefault()
        console.log(detail)
    }

    return (
        <div className='flex justify-center h-screen w-full'>
            <form onSubmit={alldata} className='w-1/2 flex flex-col justify-center items-center' >
                <div className='flex flex-wrap gap-4 justify-between border w-[50%]'>

                    <div className="flex justify-between w-full">
                        <label>Roll No.</label>
                        <input type='text' placeholder='Enter Roll No.' value={detail.roll} name='roll' className='rounded' onChange={(e)=>{
                            detailhandel(e)
                        }}/>
                    </div>
                    <div className="flex justify-between w-full">
                        <label>Enrollment No.</label>
                        <input type='text' placeholder='Enter Enrollment No' className='rounded' value={detail.enroll} name='enroll' onChange={(e)=>{
                            detailhandel(e)
                        }}/>
                    </div>
                    <div className="flex justify-between w-full">
                        <label>Name</label>
                        <input type='text' placeholder='Enter Name' className='rounded' value={detail.name} name='name' onChange={(e)=>{
                            detailhandel(e)
                        }} />
                    </div>
                    <div className="flex justify-between w-full">
                        <label>Mother's Name</label>
                        <input type='text' placeholder='Enter Mother Name' className='rounded' value={detail.mname} name='mname' onChange={(e)=>{
                            detailhandel(e)
                        }}/>
                    </div>
                    <div className="flex justify-between w-full">
                        <label>Father's Name</label>
                        <input type='text' placeholder='Enter Father Name' className='rounded' value={detail.fname} name='fname' onChange={(e)=>{
                            detailhandel(e)
                        }}/>
                    </div>
                    
                    <div className="flex justify-between w-full">
                        <label>Training Programe</label>
                        <input type='text' placeholder='Enter Training Programe' className='rounded' value={detail.tp} name='tp' onChange={(e)=>{
                            detailhandel(e)
                        }}/>
                    </div>
                    <div className="flex justify-between w-full">
                        <label>Grade</label>
                        <input type='text' placeholder='Enter Grade' className='rounded' value={detail.grade} name='grade' onChange={(e)=>{
                            detailhandel(e)
                        }}/>
                    </div>
                    <div className="flex justify-between w-full">
                        <label>Session from</label>
                        <input type='text' placeholder='Enter Session from' className='rounded' value={detail.sf} name='sf' onChange={(e)=>{
                            detailhandel(e)
                        }}/>
                    </div>
                    <div className="flex justify-between w-full">
                        <label>Session to</label>
                        <input type='text' placeholder='Enter Session to' className='rounded' value={detail.st} name='st' onChange={(e)=>{
                            detailhandel(e)
                        }}/>
                    </div>

                    <div className="flex justify-between w-full">
                        <label>Course duration</label>
                        <input type='text' placeholder='Enter Course duration' className='rounded' value={detail.cd} name='cd' onChange={(e)=>{
                            detailhandel(e)
                        }}/>
                    </div>

                </div>
                <button type='submit' className='bg-green-600 text-white font-bold p-2 mt-2 rounded'>submit</button>
            </form>
        </div>
    )
}

export default UserDetils