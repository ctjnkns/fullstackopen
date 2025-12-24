const Hello = (props) => {
  console.log(props)
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const Footer = () => {
  return (
    <div>
      greeting app created by <a href='https://github.com/ctjnkns'>ctjnkns</a>
    </div>
  )
}

const App = () => {
  // const friends = [
  //   { name: 'Peter', age: 4 },
  //   { name: 'Maya', age: 10 },
  // ]
  const friends = [ 'Peter', 'Maya']


  return (
    // <>
    //   <p>Greetings</p>
    //   <Hello name='Maya' age={26+10} />
    //   <Hello name={name} age={age} />
    //   <Footer />
    // </>
    // <>
    // <p>{friends[0].name} {friends[0].age}</p>
    // <p>{friends[1].name} {friends[1].age}</p>
    // </>
      <div>
      <p>{friends}</p>
    </div>
  )
}

export default App