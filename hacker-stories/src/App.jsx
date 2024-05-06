import * as React from 'react';

function getTitle(title){
    return title;
}

const list = [
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

const welcome = {
    title: 'React',
    greeting: 'Hey',
}
const App = () => {
    return (
        <div>
            <h1>My Road to React</h1>

            <Search />
            <hr />
            <List />
        </div>
    );
}

const Search = () => {
    const handleChange = (event) =>{
        console.log(event)
        console.log(event.target.value)
    }
    return (
        <label htmlFor="search">Search: </label>,
        <input id='search' type='text' onChange={handleChange}/>
    )
}


const List = () => {
    return (
        <ul>
            {list.map((item) => {
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

export default App;