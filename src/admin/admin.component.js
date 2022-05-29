import React, {useEffect, useState} from 'react';
import {db} from "../firebase-config";
import {collection, getDocs, deleteDoc, doc} from "@firebase/firestore";
import "../assets/css/adminStyle.css";
import * as Icon from "react-icons/ri";


function Admin() {

    const [data, setData] = useState({
        newsList: [],
        isLoaded: false
    });
    const newsCollectionRef = collection(db, "news");


    const deleteNew = async (id) => {
        const userDoc = doc(db, "news", id);
        await deleteDoc(userDoc);
    };

    useEffect(() => {
        const getNews = async () => {
          const data = await getDocs(newsCollectionRef);
          setData({
              newsList: data.docs.map((doc => ({...doc.data(), id: doc.id}))),
              isLoaded: true
          });
        }
        if (!data.isLoaded) {
            getNews()
        }
    }, [data.isLoaded, newsCollectionRef])
    return(
        data.isLoaded
            ?
            (
                <div className="container__admin">
                    <button className="btn--create">Create New</button>
                    <table>
                        <thead>
                            <tr className="thead">
                                <th>ID</th>
                                {/*<th>CategoryID</th>*/}
                                <th>Title</th>
                                <th>Content</th>
                                <th>Image</th>
                                <th>Date</th>
                                <th>Author</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                            <tbody>
                                {
                                    data.newsList.map((ele, index) => (
                                        <tr className="data__display" key={index}>
                                            <td>{ele.id}</td>
                                            {/*<td>{ele.categoryID}</td>*/}
                                            <td>{ele.title}</td>
                                            <td>{ele.content}</td>
                                            <td><img className="img__display" src={ele.image} alt=""/></td>
                                            <td>{ele.date}</td>
                                            <td>{ele.author}</td>
                                            <td>
                                                <Icon.RiEditBoxFill/>
                                                <Icon.RiDeleteBin6Fill onClick={ () => {
                                                    deleteNew(ele.id)
                                                    setData({...data, isLoaded: false})
                                                }}/>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                    </table>
                </div>
            )
            : <div>Loading...</div>
    )
}

export default Admin;