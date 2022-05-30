import React from 'react';
import {db} from "../firebase-config";
import {collection, addDoc} from "@firebase/firestore"
import {useState} from "react";
import "../assets/css/adminStyle.css";
import {storage} from "../firebase-config";
import {ref, uploadBytes, getDownloadURL} from "@firebase/storage";
import {v4} from "uuid";
import {useNavigate} from "react-router-dom";

function AddNew() {

    // const [newCategoryID, setNewCategoryID] = useState("");
    const navigate = useNavigate()
    const [newNews, setNewNews] = useState({
        title: "",
        content: "",
        author: "",
        dateCreated: "",
        categoryID: ""
    });
    const [newImage, setNewImage] = useState(null)
    const getNewData = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setNewNews({...newNews, [name]: value})
    }

    const createNew = async (event) => {
        event.preventDefault();
        if (newNews.title === "" || newNews.content === "" || newImage === null ||
            newNews.author === "" || newNews.dateCreated === ""){
            return;
        }
        const imageRef = ref(storage, `images/${newImage.name + v4()}`)
        const test = await uploadBytes( imageRef, newImage); // up storage
        await addDoc(collection(db, "news"), {title: newNews.title, content: newNews.content, author: newNews.author,
            image: await getDownloadURL(test.ref), date: newNews.dateCreated});
        console.log("created")
        navigate("/Admin")
    };

    console.log(newNews)
    return(
        <form className="form__container" onSubmit={createNew}>
                <div className="field">
                    <label htmlFor="title">i
                        <div className="name__tag">
                            Title:
                        </div>
                        <input id="title" type="text" name="title" onChange = {getNewData}/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="content">
                        <div className="name__tag">
                            Content:
                        </div>
                        <input id="content" type="text" name="content" onChange = {getNewData}/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="date">
                        <div className="name__tag">
                            Date Created:
                        </div>
                        <input id="date" type="text" name="dateCreated" onChange = {getNewData}/>
                    </label>
                </div>
                <div className="field">
                    <label htmlFor="author">
                        <div className="name__tag">
                            Author:
                        </div>
                        <input id="author" type="text" name="author" onChange = {getNewData}/>
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
    )
}

export default AddNew;


// const [newTitle, setNewTitle] = useState("");
// const [newContent, setNewContent] = useState("");
// const [newImage, setNewImage] = useState(null);
// const [newAuthor, setNewAuthor] = useState("");
// const [newDate, setNewDate] = useState("");
//
// const [newNews, setNewNews] = useState({
//     title: "",
//     content: "",
//     image: "",
//     author: "",
//     dateCreated: "",
//     categoryID: ""
// });
//
// let name, value;
// const getNewData = (event) => {
//     name = event.target.name;
//     value = event.target.value;
//
//     setNewNews({...newNews, [name]: value})
// }
// const newsCollectionRef = collection(db, "news");
//
// const createNew = async () => {
//     if (newTitle === "" || newContent === "" || newAuthor === "" ||
//         newDate === "" || newImage === null){
//         return;
//     }
//     const imageRef = ref(storage, `images/${newImage.name + v4()}`)
//     const test = await uploadBytes( imageRef, newImage); // up storage
//     await addDoc(newsCollectionRef, {title: newTitle, content: newContent, author: newAuthor, image: await getDownloadURL(test.ref), date: newDate});
// };