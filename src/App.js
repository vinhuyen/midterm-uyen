import HotNews from './components/HotNews';
import ExtraNews from './components/ExtraNews';
import Header from "./components/Header.component";

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
  return (
  <div>
      <Header/>
      <div className="layout__container">
          <HotNews {...hotNews}/>
          <div className="secondary-news__wrapper">
              <HotNews {...mainNews}/>
              <HotNews {...mainNews}/>
              <HotNews {...mainNews}/>
              <HotNews {...mainNews}/>
          </div>
          <div className="extra-news__wrapper">
              <ExtraNews {...extraNews}/>
              <ExtraNews {...extraNews}/>
              <ExtraNews {...extraNews}/>
              <ExtraNews {...extraNews}/>

          </div>
      </div>
  </div>
  );
}

export default App;
