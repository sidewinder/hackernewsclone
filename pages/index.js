import 'isomorphic-fetch'
import Layout from '../components/Layout'

const Index = ({ stories }) => {
      
    return ( 
    <Layout title="Latest News">
      <h1>Latest News</h1>
 
      { stories.map((story) => (
        <h2><a href={ story.url }>{ story.title }</a></h2>
      )) }

      <style jsx>{`
       h1 {
         font-family: system-ui;
         font-weight: 300;
         color: #333;
       }
     `}</style>     
    </Layout>
    )
}

Index.getInitialProps = async () => {

    const req = await fetch(`https://api.hackerwebapp.com/news`)
    const stories = await req.json()
    return { stories }
}

export default Index