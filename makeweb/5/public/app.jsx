ReactDOM.render(
    <h1>Hello, world!</h1>,
    document.getElementById('root')
)


// function SectionItem(props){
//     return (
//         <section>
//             This is section, not &nbsp;
//             <b>{props.htmlTag}</b>
//         </section>
//     )
// }

const SectionItem = props => (
    <section>
        This is section, not &nbsp;
        <b>{props.htmlTag}</b>
    </section>
)

ReactDOM.render(
    <div>
        <SectionItem htmlTag="span"/>
        <SectionItem htmlTag="div"/>
        <SectionItem htmlTag="header"/>
    </div>,
    document.getElementById('root1')
)



const HeadingItem = props => {
    const Heading = props.tagType

    return <Heading> {props.headingText} </Heading>
}

const DescriptionItem = props => {
    const Dis = props.tagType

    return <Dis> {props.descriptionText} </Dis>
}

const SectionItemB = props => (
    <section className="item">
        <HeadingItem 
            headingText = {props.headingText}
            tagType = {props.headingTagType}
        />
        <DescriptionItem
            descriptionText = {props.descriptionText}
            tagType = {props.descriptionTagType}
        />
    </section>
)

ReactDOM.render(
    <div className='wraper'>
        <SectionItemB
            headingText = 'HTML'
            headingTagType = 'h1'
            descriptionText = 'Transform into the DOM'
            descriptionTagType = 'p'
        />
        <SectionItemB
            headingText = 'CSS'
            headingTagType = 'h2'
            descriptionText = 'Style DOM-elements'
            descriptionTagType = 'quote'
        />
        <SectionItemB
            headingText = 'Java script'
            headingTagType = 'h3'
            descriptionText = 'Adds interactivity to elements'
            descriptionTagType = 'div'
        />
    </div>,
    document.getElementById('root2')
)

// === Mounting

class Profile extends React.Component {
    constructor (props) {
      super(props)
      console.log(1, 'constructor')
    }
  
    componentWillMount() {
      console.log(2, 'UNSAFE_componentWillMount')
    }
  
    componentDidMount() {
      console.log(4, 'componentDidMount')
    }
  
    render() {
      console.log(3, 'first render')
  
      return (
        <div>
          <img src="http://i.pravatar.cc/300" />
          <h1>{this.props.name} {this.props.surname}</h1>
          <p>Возраст: {this.props.age}</p>
          <p>Пол: {this.props.gender}</p>
          <p>О себе: {this.props.about}</p>
        </div>
      )
    }
  }

  ReactDOM.render(
    <Profile
      age='25'
      gender='мужской'
      about='Немного обо мне..'
    />,
    document.getElementById('root3')
  )


  // === Updating

  class Profilee extends React.Component {
    constructor (props) {
      super(props)
      console.clear()
    }
  
    shouldComponentUpdate(nextProps, nextState) {
      console.log(2, 'shouldComponentUpdate')
      return true
    }
  
    componentWillUpdate(nextProps, nextState) {
      console.log(3, 'UNSAFE_componentWillUpdate')
    }
  
    componentWillReceiveProps(nextProps) {
      console.log(1, 'UNSAFE_componentWillReceiveProps')
    }
  
    componentDidUpdate(prevProps, prevState) {
      console.log(5, 'componentDidUpdate')
    }
    
    render() {
      console.log(4, 'render')
  
      return (
        <div>
          <img src="http://i.pravatar.cc/300" />
          <h1>{this.props.name} {this.props.surname}</h1>
          <p>Возраст: {this.props.age}</p>
          <p>Пол: {this.props.gender}</p>
          <p>О себе: {this.props.about}</p>
        </div>
      )
    }
  }
  
  class Appp extends React.Component {
    state = {
      age: 25
    }
  
    newRandomAge = () => {
      this.setState({
        age: Math.ceil(Math.random() * 100)
      })
    }
  
    render() {
      return (
        <div>
          <button onClick={this.newRandomAge}>Rerender</button>
  
          <Profilee
            age={this.state.age}
            gender='мужской'
            about='Немного обо мне..'
          />
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <Appp />,
    document.getElementById('root4')
  )

  
  // === Unmounting

  class Profileee extends React.Component {
    constructor (props) {
      super(props)
      console.clear()
    }
  
    componentWillUnmount() {
      console.log('componentWillUnmount')
    }
  
    render() {
      return (
        <div>
          <img src="http://i.pravatar.cc/300" />
          <h1>{this.props.name} {this.props.surname}</h1>
          <p>Возраст: {this.props.age}</p>
          <p>Пол: {this.props.gender}</p>
          <p>О себе: {this.props.about}</p>
        </div>
      )
    }
  }
  
  class Apppp extends React.Component {
    constructor (props) {
      super(props)
    }
   
    state = {
      age: 25
    }
  
    newRandomAge = () => {
      this.setState({
        age: Math.ceil(Math.random() * 100)
      })
    }
  
    render() {
      return (
        <div>
          <button onClick={this.newRandomAge}>Rerender</button>
  
          {
            this.state.age < 50
              ? (
                <Profileee
                  age={this.state.age}
                  gender='мужской'
                  about='Немного обо мне..'
                />
              )
              : null
          }
          
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <Apppp />,
    document.getElementById('root5')
  )




  class Clock extends React.Component {
    constructor (props) {
      super(props)
      console.log('--- Clock ---', 1);
      this.state = {
        date: new Date()
      }
    }

    componentDidMount(){
      console.log(3)
      this.timerId = setInterval( () => this.tick(), 1000)
    }

    componentWillUnmount() {
      console.log(4)
      clearInterval(this.timerId)
    }

    tick () {
      this.setState({
        date: new Date()
      })
    }

    render() {
      console.log(2)
      return (
        <div>
          <h1>Its timer</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        </div>
      )
    }
  }

  ReactDOM.render(
    <Clock />,
    document.getElementById('root6')
  )




    class Modal extends React.Component {
      state = {modalVisibile: true}

      toggleModalHendler = (e) => {
        console.log(e.target)
        console.log(this)
        this.setState(
          prevState => ({modalVisibile: !prevState.modalVisibile})
        )
      }

      render() {
        return (
          <div>
            {this.state.modalVisibile
              ? <div className="modal">
                  Some text is here
                  
                </div>
              : null
            }
            <button onClick={this.toggleModalHendler}>Toggle Modal</button>
          </div>
        )
      }
    }

  ReactDOM.render(<Modal />, document.getElementById('root7'))

  

  function UserGreeting(props) {
    return <h1>Welcome back!</h1>
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn
  
    if (isLoggedIn) {
      return <UserGreeting />
    }
  
    return <GuestGreeting />
  }
  
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    )
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    )
  }
  
  class LoginControl extends React.Component {
    constructor(props) {
      super(props)
      this.handleLoginClick = this.handleLoginClick.bind(this)
      this.handleLogoutClick = this.handleLogoutClick.bind(this)
      this.state = {isLoggedIn: false}
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true})
    }
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false})
    }
  
    render() {
      const isLoggedIn = this.state.isLoggedIn
      let button
  
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />
      }
  
      return (
        <div>
          <Greeting isLoggedIn={isLoggedIn} />
          {isLoggedIn && <img src='http://i.pravatar.cc/300' alt='' />}
          {button}
        </div>
      )
    }
  }
  
  ReactDOM.render(
    <LoginControl />,
    document.getElementById('root8')
  )


  const users = [
    {
      id:20,
      name: "Aaron Abramovich",
      speciality: 'Animator',
      age: 29
    },
    {
      id:21,
      name: "Bob Marley",
      speciality: 'singer',
      age: 53
    },
    {
      id:22,
      name: "Sara Connor",
      speciality: 'killer',
      age: 40
    },
  ]

  class AppLi extends React.Component {
    render() {
      return (
        <div className="wraper">
          {users.map(user => <Card key={user.id} {...user} />)}
        </div>
      )
    }
  }

  const Card = (props) => {
    const {id, name, speciality, age} = props
    console.log(props)
    return(
      <div className="item">
        <img src="http://i.pravatar.cc/300" alt=""/>
        <h2>{name}</h2>
        <p>Age: {age}</p>
        <p>Speciality: {speciality}</p>
      </div>
    )
  }

  ReactDOM.render(
    <AppLi />,
    document.getElementById('root9')
  )


  class AppInp extends React.Component {
    state = {value: ''}

    handleChange = ({target: {value}}) => this.setState({value})

    handleSubmit = () => alert('Aname was submited' + this.state.value)

    render = () => (
      <form>
        <label>
          <input type="text" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <button type="button">send</button>
      </form>
    )
  }

  ReactDOM.render(
    <AppInp />,
    document.getElementById('root10')
  )


  class App2Handl extends React.Component {
    state = {
      studing: false,
      grade: 2
    }

    handleChange = ({ target: { type, checked, value, name } }) => {
      this.setState({
        [name]: type === 'checkbox' ? checked : value
      })
    }

    render = () => (
      <form>
        <label>
          Is studying:

          <input
            name='studing'
            type='checkbox'
            checked={this.state.studying}
            onChange={this.handleChange}
          />
        </label>

        <br />

        <label>
          Your grade:

          <input
            name='grade'
            type='number'
            value={this.state.grade}
            onChange={this.handleChange}
          />
        </label>
      </form>
    )
  }

  ReactDOM.render(
    <App2Handl />,
    document.getElementById('root11')
  )

  
  class AppRef extends React.Component {
    constructor(props) {
      super(props)
      this.input = React.createRef()
    }
  
    handleSubmit = (e) => {
      alert('A name was submitted: ' + this.input.current.value)
      e.preventDefault()
    }
  
    render = () => (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type='text' ref={this.input} />
        </label>
  
        <input type='submit' value='Submit' />
      </form>
    )
  }

  ReactDOM.render(
    <AppRef />,
    document.getElementById('root12')
  )