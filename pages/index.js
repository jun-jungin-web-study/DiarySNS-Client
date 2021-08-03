import Layout from '../components/MyLayout'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

const Index = (props) => (
    <Layout>
        <h1>BatMAn TV</h1>
        <ul>
            {props.shows.map(({show}) => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

Index.getInitialProps = async function(){
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()
    console.log(data.length)
    return {
        shows: data
    }
}

export default Index
// const PostLink = (props) => (
//     <li>
//         <Link as={`/p/${props.id}`} href={`/post?title=${props.title}`}>
//             <a>{props.title}</a>
//         </Link>
//     </li>
// )
// export default () => (
//     <Layout>
//         <h1>My Blog</h1>
//         <ul>
//         <PostLink id="hello" title="hello"/>
//         <PostLink id="learn" title="Learn"/>
//         <PostLink id="Deploy" title="Deploy apps"/>
//         </ul>
//     </Layout>
// )
