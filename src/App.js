// import HotNews from './components/HotNews';
// import ExtraNews from './components/ExtraNews';
// import Header from "./components/Header.component";
import {db} from "./firebase-config";
import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc,} from "@firebase/firestore"
import {useEffect, useState} from "react";
const hotNews = {
    htmlAttribute: {
        className: 'primary__news',
        id: '',
    },
    data: {
        image: 'https://cdn.sanity.io/images/cxgd3urn/production/5764bce0bbcb82788881e644a38f60fe9dcc13a3-2048x1448.jpg?rect=59,0,1931,1448&w=1920&h=1440&fit=crop&auto=format',
        content: 'Georgian galleries unite for first Tbilisi Gallery Weekend in support of Ukraine',
        title: 'Georgian galleries unite for first Tbilisi Gallery Weekend in support of Ukraine',
        author: 'Dzinh Yen',
    }
}

const mainNews = {
    htmlAttribute: {
        className: 'secondary__news',
        id: '',
    },
    data: {
        image: 'https://cdn.sanity.io/images/cxgd3urn/production/5764bce0bbcb82788881e644a38f60fe9dcc13a3-2048x1448.jpg?rect=59,0,1931,1448&w=1920&h=1440&fit=crop&auto=format',
        content: 'Georgian galleries unite for first Tbilisi Gallery Weekend in support of Ukraine',
        title: 'Georgian galleries unite for first Tbilisi Gallery Weekend in support of Ukraine',
        author: 'Dzinh Yen',
    }
}

const extraNews = {
    htmlAttribute: {
        className: 'extra__news',
        id: '',
    },
    data:{
        date: '26 May 2022',
        title: 'Georgian galleries unite for first Tbilisi Gallery Weekend in support of Ukraine',
        content: 'Georgian galleries unite for first Tbilisi Gallery Weekend in support of Ukraine'
    }
}


function App() {
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
  return (
  <div>
      {news.map((ele) => {
          return (
            <div key={ele.id}>
                {ele.title}
                <br/>
                {ele.content}
                <form action="">
                    <input type="text" onChange = {(event) => setNewTitle(event.target.value)}/>
                    <input type="text" onChange = {(event) => setNewContent(event.target.value)}/>
                    <input type="text" onChange = {(event) => setNewDate(event.target.value)}/>
                    <input type="text" onChange = {(event) => setNewAuthor(event.target.value)}/>
                    <input type="text" onChange = {(event) => setNewImage(event.target.value)}/>
                </form>
                <button onClick={createNew}>add</button>
                <button onClick={() => updateNew(ele.id, ele.title, ele.content, ele.date, ele.author, ele.image)}>edit</button>
            </div>

          )
      })}



      {/*<Header/>*/}
      {/*<div className="layout__container">*/}
      {/*    <HotNews {...hotNews}/>*/}
      {/*    <div className="secondary-news__wrapper">*/}
      {/*        <HotNews {...mainNews}/>*/}
      {/*        <HotNews {...mainNews}/>*/}
      {/*        <HotNews {...mainNews}/>*/}
      {/*        <HotNews {...mainNews}/>*/}
      {/*    </div>*/}
      {/*    <div className="extra-news__wrapper">*/}
      {/*        <ExtraNews {...extraNews}/>*/}
      {/*        <ExtraNews {...extraNews}/>*/}
      {/*        <ExtraNews {...extraNews}/>*/}
      {/*        <ExtraNews {...extraNews}/>*/}

      {/*    </div>*/}
      {/*</div>*/}
  </div>
  );
}

export default App;
