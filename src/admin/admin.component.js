import React from 'react';
import {db} from "./firebase-config";
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc,} from "@firebase/firestore"
import {useEffect, useState} from "react";


function Admin() {
    const [newTitle, setNewTitle] = useState("");
    const [newContent, setNewContent] = useState("");
    const [newImage, setNewImage] = useState("");
    const [newAuthor, setNewAuthor] = useState("");
    const [newDate, setNewDate] = useState("");

    const [news, setNews] = useState([]);
    const newsCollectionRef = collection(db, "news");

    const createNew = async () => {
        await addDoc(newsCollectionRef, {title: newTitle, content: newContent, author: newAuthor, image: newImage, date: newDate});
    };

    const updateNew = async (id, title, content, author, image, date) => {

    }


    const deleteNew = async (id) => {
        const userDoc = doc(db, "news", id);
        await deleteDoc(userDoc);
    };

    useEffect(() => {
        const getNews = async () => {
            const data = await getDocs(newsCollectionRef);
            setNews(data.docs.map((doc => ({...doc.data(), id: doc.id}))));
        }
        getNews();
    }, [])

    return(
        <div className="container__admin">
            <table>
                <tr>
                    <th>ID</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Image</th>
                    <th>Date</th>
                    <th>Author</th>
                </tr>
                <tr>
                    {news.map((ele) => {
                        return (
                            <div key={ele.id}>
                                {ele.title}
                                <br/>
                                {ele.content}
                            </div>
                        )
                    })}
                </tr>
            </table>
        </div>
    )
}