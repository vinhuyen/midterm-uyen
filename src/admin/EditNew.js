import React from 'react';
import {db} from "../firebase-config";
import {collection, addDoc} from "@firebase/firestore"
import {useState} from "react";


function EditNew() {

    const [news, setNews] = useState({
        title: "",
        content: "",
        author: "",
        dateCreated: "",
        categoryID: ""
    });

    const newsCollectionRef = collection(db, "news");

    const updateNew = async () => {

    };


    return(
        <div>
            <form action="">
                <div className="field">
                    <label htmlFor="title">
                        Title:
                        <input id="title" type="text"
                               value={news.title}
                               onChange = {(event) => setNewTitle(event.target.value)}/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="content">
                        Content:
                        <input id="content" type="text"
                               value={news.content}
                               onChange = {(event) => setNewContent(event.target.value)}/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="date">
                        Date:
                        <input id="date"
                               type="text"
                               onChange = {(event) => setNewDate(event.target.value)}/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="author">
                        Author:
                        <input id="author"
                               type="text"
                               onChange = {(event) => setNewAuthor(event.target.value)}/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="image">
                        Image:
                        <input id=""
                               type="file"
                               onChange = {(event) => setNewImage(event.target.value)}/>
                    </label>
                </div>
            </form>
            <button onClick={updateNew}>edit</button>
        </div>
    )
}

export default EditNew;