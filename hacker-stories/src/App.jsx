import * as React from 'react';

function getTitle(title){
    return title;
}



const welcome = {
    title: 'React',
    greeting: 'Hey',
}
const App = () => {
    const stories = [
        {
            title: 'React',
            url: 'https://reactjs.org/',
            author: 'Jordan Walke',
            num_comments: 3,
            points: 0,
            objectId: 0
        },
        {
            title: 'Redux',
            url: 'https://redux.js.org/',
            author: 'Dan Abramov',
            num_comments: 2,
            points: 5,
            objectId: 1
        },
    ]

    return (
        <div>
            <h1>My Road to React</h1>

            <Search />
            <hr />
            <List list = {stories}/>
        </div>
    );
}

const Search = () => {
    //Using State. We start with searchTerm = '', than make it setSearchTerm
    let [searchTerm, setSearchTerm] = React.useState('')
    const handleChange = (event) =>{
        console.log(event)
        console.log(event.target.value)
        //setSearchTerm is getting the value from input area
        setSearchTerm(event.target.value);
    }
    return (
        <>
            <label htmlFor="search">Search: </label>,
            <input id='search' type='text' onChange={handleChange}/>

            <p>
                Searching for <strong>{searchTerm}</strong>
            </p>
        </>
    )
}


const List = (props) => {
    return (
        <ul>
            {props.list.map((item) => {
                return (
                    <li key={item.objectId}>
                    <span><a href={item.url}>{item.title}</a></span>
                        <span>{item.author}</span>
                        <span>{item.num_comments}</span>
                        <span>{item.points}</span>
                    </li>
                )
            })}
        </ul>
    )
}

const Button = () =>{

    return <button>Click me</button>
}

export default App;