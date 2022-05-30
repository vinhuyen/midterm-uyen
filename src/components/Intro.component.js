import HotNews from "./HotNews";
import ExtraNews from "./ExtraNews";
import BeCaredNews from "./BeCaredNews"
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

const News = () => {
    const [hottestNews, setHottestNews] = useState({
        isLoaded: false,
        props: {}
    });
    const [mainNews, setmainNews] = useState([]);
    const [extraNews, setExtraNews] = useState([]);
    const [beCared, setbeCared] = useState([]);

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
            setExtraNews(dataList.slice(5,9));
            setbeCared(dataList.slice(8))
        }
        getNews()
    }, [])

    return(
        <div className="layout__container">
            <div>
                {hottestNews.isLoaded? <HotNews {...NewsProps('primary__news', hottestNews.props)}/> : 'test'}
                {
                    beCared.map((ele, index) => {
                        return <BeCaredNews key={index} {...NewsProps('be__cared_news', ele)}/>
                    })
                }
            </div>
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