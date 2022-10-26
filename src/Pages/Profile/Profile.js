import React, { useState } from 'react';
import { useContext } from 'react';
import { authContext } from '../../Context/AuthContext';
import toast, { Toaster } from 'react-hot-toast';
import './Profile.css'

const Profile = () => {
    //use context
    const { user, updateUser } = useContext(authContext);

    //state for update name
    const [name, setName] = useState(user.displayName)
    //state for update photo
    const [photo, setPhoto] = useState(user.photoURL)

    const btnHandler = (e) => {
        e.preventDefault();
        handleProfile(name, photo);
        toast.success('Congrats! your Profile Updated successfully')
        e.target.reset();
    }

    const nameUpdate = (e) => {

        setName(e.target.value)
    }

    const photoUpdate = (e) => {
        setPhoto(e.target.value)
    }

    const handleProfile = (name, photo) => {

        updateUser(name, photo)
            .then(() => console.log('Pfofile updated:', name, photo))
            .catch(err => console.log(err))
    }

    return (
        <div className='container'>
            {/* profile info section  */}
            <h3 className='ola text-center mb-5'>Welcome <span className='clr'>{user.displayName}!</span></h3>
            <section>
                <div className="card mb-3 p-lg-4 p-1 profile-card" >
                    <div className="row g-0">
                        <h4 className='text-center mb-5'>Profile Info</h4>
                        <div className='d-flex align-items-center'>
                            <div className="col-md-4">
                                <img src={user.photoURL} className="img-fluid rounded-circle" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">Name: {user.displayName}</h5>
                                    <h6>Email: {user.email}</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* update profile section  */}
            <section>

                <h4 className='text-center ptxt'>Update your profile</h4>
                <div className="card p-3 profile-update">
                    <div className="card-body">
                        <form onSubmit={btnHandler}>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                                <input readOnly defaultValue={user.email} type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail2" className="form-label">User Name</label>
                                <input onChange={nameUpdate} defaultValue={name} type="text" name='name' className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" required />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="exampleInputEmail3" className="form-label">Photo</label>
                                <input onChange={photoUpdate} defaultValue={photo} type="text" name='photo' className="form-control" id="exampleInputEmail3" aria-describedby="emailHelp" required />
                            </div>


                            <button type="submit" className="btn logbtn text-white">Update</button>
                        </form>
                    </div>
                </div>
            </section>
            <Toaster />
        </div>
    );
};

export default Profile;