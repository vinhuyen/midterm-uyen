import React, {useEffect} from 'react';
import {db} from "../firebase-config";
import {collection, addDoc, getDoc, doc, updateDoc} from "@firebase/firestore"
import {useState} from "react";
import "../assets/css/adminStyle.css";
import {storage} from "../firebase-config";
import {ref, uploadBytes, getDownloadURL} from "@firebase/storage";
import {useParams, useNavigate} from "react-router-dom"

function UpdateNew() {

    const params = useParams()
    const navigate = useNavigate()
    const [news, setNews] = useState({
        title: '',
        content: '',
        author: '',
        date: '',
    });
    const [isLoaded, setIsloaded] = useState(false)
    const [newImage, setNewImage] = useState(null)
    const getNewData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setNews({...news, [name]: value})
    }
    const update = async (event) => {
        event.preventDefault()
        await updateDoc(doc(db, "news", params.id), news)
        navigate("/Admin")
    }

    useEffect(() => {
        const getNews = async () => {
            const newsRef = doc(db, "news", params.id);
            const data = await getDoc(newsRef);
            setNews({
                ...data.data(), id: data.id
            });
            setIsloaded(true)
        }
        if (!isLoaded) {
            getNews()
        }
    }, [isLoaded])
    return(
        isLoaded
            ?
                <form className="form__container" onSubmit={update}>
                    <div className="field">
                        <label htmlFor="title">i
                            <div className="name__tag">
                                Title:
                            </div>
                            <input id="title" type="text" name="title" defaultValue={news.title} onChange = {getNewData}/>
                        </label>
                    </div>
                    <div className="field">
                        <label htmlFor="content">
                            <div className="name__tag">
                                Content:
                            </div>
                            <input id="content" type="text" name="content" defaultValue={news.content} onChange = {getNewData}/>
                        </label>
                    </div>
                    <div className="field">
                        <label htmlFor="date">
                            <div className="name__tag">
                                Date Created:
                            </div>
                            <input id="date" type="text" name="dateCreated" defaultValue={news.date} onChange = {getNewData}/>
                        </label>
                    </div>
                    <div className="field">
                        <label htmlFor="author">
                            <div className="name__tag">
                                Author:
                            </div>
                            <input id="author" type="text" name="author" defaultValue={news.author} onChange = {getNewData}/>
                        </label>
                    </div>
                    <div className="field">
                        <label htmlFor="image">
                            <div className="name__tag">
                                Image:
                            </div>
                            <input id="" type="file" onChange = {(event) =>
                                setNewImage(event.target.files[0])}/>
                        </label>
                    </div>
                    <button className="btn--add" >add</button>
                </form>
            : <div>Loading...</div>
    )
}

export default UpdateNew;