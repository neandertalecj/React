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
  