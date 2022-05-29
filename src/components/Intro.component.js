import HotNews from "./HotNews";
import ExtraNews from "./ExtraNews";
import {useState, useEffect} from 'react';
import {collection, getDocs, deleteDoc, doc} from "@firebase/firestore";
import {db} from "../firebase-config";


function NewsProps(className ,data){
    return {
        htmlAttribute: {
            className: className,
            id: '',
        },
        data: data
    }
}
//
// const mainNews = {
//     htmlAttribute: {
//         className: 'secondary__news',
//         id: '',
//     },
//     data: {
//         image: 'https://cdn.sanity.io/images/cxgd3urn/production/5764bce0bbcb82788881e644a38f60fe9dcc13a3-2048x1448.jpg?rect=59,0,1931,1448&w=1920&h=1440&fit=crop&auto=format',
//         content: 'Georgian galleries unite for first Tbilisi Gallery Weekend in support of Ukraine',
//         title: 'Georgian galleries unite for first Tbilisi Gallery Weekend in support of Ukraine',
//         author: 'Dzinh Yen',
//     }
// }
//
// const extraNews = {
//     htmlAttribute: {
//         className: 'extra__news',
//         id: '',
//     },
//     data:{
//         date: '26 May 2022',
//         title: 'Georgian galleries unite for first Tbilisi Gallery Weekend in support of Ukraine',
//         content: 'Georgian galleries unite for first Tbilisi Gallery Weekend in support of Ukraine'
//     }
// }

const News = () => {
    const [hottestNews, setHottestNews] = useState({
        isLoaded: false,
        props: {}
    });
    const [mainNews, setmainNews] = useState([]);
    const [extraNews, setExtraNews] = useState([]);

    const newsCollectionRef = collection(db, "news");

    useEffect(() => {
        const getNews = async () => {
            const data = await getDocs(newsCollectionRef);
            const dataList =  data.docs.map((doc => ({...doc.data(), id: doc.id})))
            setHottestNews({
                isLoaded: true,
                props: dataList[0]
            });
            setmainNews(dataList.slice(1, 5));
            setExtraNews(dataList.slice(5));
        }
        getNews()
    }, [])

    return(
        <div className="layout__container">
            {hottestNews.isLoaded? <HotNews {...NewsProps('primary__news', hottestNews.props)}/> : 'test'}
            {/*<HotNews {...NewsProps('primary__news', hottestNews.props)}/>*/}
            <div className="secondary-news__wrapper">
                {
                    mainNews.map((ele, index) => {
                        return <HotNews key={index} {...NewsProps('secondary__news', ele)}/>
                    })
                }
            </div>
            <div className="extra-news__wrapper">
                {
                    extraNews.map((ele, index) => {
                        return <ExtraNews key={index} {...NewsProps('extra__news', ele)}/>
                    })
                }
            </div>
        </div>
    )
}

export default News;