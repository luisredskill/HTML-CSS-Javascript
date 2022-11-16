import './App.css';
import Joke from "./Components/Joke"
import JokesData from "./jokesData"

function App() {
  const jokeElements = JokesData.map(joke => {
    return <Joke setup={joke.setup} punchline={joke.punchline}/>
    
  })
  return (
    <div>
      <h1> Here are some jokes!</h1>
      {jokeElements}
    </div>
  );
}
// <body>
//   <div className="container">
//     <h1> Here are some jokes!</h1>
//     <Joke
//       setup="I got my daughter a fridge for her birthday."
//       punchline="I can't wait to see her face light up when she opens it."
//       isPun={true}
//       upVotes={10}
//       downVotes={2}
//       comments = {[{author: "Luis", authorid: "01", title: "This joke is awesome", body: "This joke was awesome"}]}
//     />
//     <Joke
//       setup="How did the hacker escape the police?"
//       punchline="He just ransomware!"
//       isPun={true}
//       upVotes={20}
//       downVotes={5}
//     />
//     <Joke
//       setup="Why don't pirates travel on mountain roads?"
//       punchline="Scurvy."
//       isPun={true}
//       upVotes={5}
//       downVotes={1}
//     />
//     <Joke
//       setup="Why do bees stay in the hive in the winter?"
//       punchline="Swarm."
//       isPun={true}
//       upVotes={2}
//       downVotes={5}
//     />
//     <Joke
//       setup="What's the best thing about Switzerland?"
//       punchline="I don't know, but the flag is a big plus!"
//       isPun={true}
//       upVotes={10}
//       downVotes={30}
//     />
//     <Joke
//       punchline="I don't know, but the flag is a big plus!"
//       isPun={false}
//       upVotes={100}
//       downVotes={10}

//     />
//   </div>
// </body>

export default App;
