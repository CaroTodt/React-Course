
import './App.css';
import ParentComponent from './components/ParentComponent'
// import React, { useReducer } from 'react'
// import Greet from './components/Greet';
// import Welcome from './components/Welcome';
// import Hello from './components/Hello';
// import Message from './components/Message';
// import Counter from './components/Counter'
// import FunctionClick from './components/FunctionClick';
// import ClassClick from './components/ClassClick';
// import EventBind from './components/EventBind';
// import ParentComponent from './components/ParentComponent';
// import UserGreeting from './components/UserGreeting';
// import NameList from './components/NameList';
// import Stylesheets from './components/Stylesheets';
// import Inline from './components/Inline';
// import './appStyles.css'
// import styles from './appStyles.module.css'
// import Form from './components/Form';
// import LifecycleA from './components/LifecycleA';
// import FragmentDemo from './components/FragmentDemo';
// import Table from './components/Table';
// import ParenComp from './components/ParenComp';
// import RefsDemo from './components/RefsDemo';
// import PortalDemo from './components/PortalDemo';
// import Hero from './components/Hero';
// import ErrorBoundary from './components/ErrorBoundary';
// import ClickCounter from './components/ClickCounter';
// import HoverCounter from './components/HoverCounter';
// import ComponentC from './components/ComponentC';
// import {UserProvider} from './components/userContext'
// import PostList from './components/PostList';
// import PostForm from './components/PostForm';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterOne from './components/HookCounterOne'
// import DataFetching from './components/DataFetching';
// import CounterOne from './components/CounterOne';
// import CounterTwo from './components/CounterTwo';
//  import CounterThree from './components/CounterThree';
// import ComponentA from './components/ComponentA'
// import ComponentB from './components/ComponentB'
// import ComponentC from './components/ComponentC'
// import DataFetchingOne from './components/DataFetchingOne';
// import DataFetchingTwo from './components/DataFetchingTwo';


// const initialState = 0
// const reducer = (state, action) => {
// 	switch (action) {
// 		case 'increment':
// 			return state + 1
// 		case 'decrement':
// 			return state - 1
// 		case 'reset':
// 			return initialState
// 		default:
// 			return state
// 	}
// }

// export const CountContext = React.createContext()

function App() {
  // const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <ParentComponent />
      {/* <DataFetchingOne/> */}
      {/* <DataFetchingTwo/> */}
      {/* <CountContext.Provider
			value={{ countState: count, countDispatch: dispatch }}
		>
			<div className="App">
				<CounterOne /> 
				 <CounterTwo /> 
			 <CounterThree /> 
				 {count} 
			 <ComponentA />
				 <ComponentB />
				 <ComponentC />

			</div>
		</CountContext.Provider> */}
      {/* <CounterTwo/> */}
      {/* <CounterThree/> */}
      {/* <CounterOne/> */}
      {/* <DataFetching/> */}
      {/* <HookCounterOne/> */}
      {/* <HookCounterFour/> */}
      {/* <PostList/> */}
      {/* <PostForm/> */}
      {/* <UserProvider value="Carolina"> */}
      {/* <ComponentC/> */}
      {/* </UserProvider> */}
      {/* <ClickCounter name='Carolina'/>
      <HoverCounter/> */}
      {/* <ErrorBoundary>
      <Hero heroName='Batman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='Superman'/>
      </ErrorBoundary>
      <ErrorBoundary>
      <Hero heroName='Jocker'/>
      </ErrorBoundary> */}
      {/* <PortalDemo/> */}
      {/* <RefsDemo/> */}
      {/* <ParenComp/> */}
      {/* <FragmentDemo /> */}
      {/* <Table/> */}
      {/* <LifecycleA/> */}
      {/* <Form/> */}
      {/* <h1 className='error'>Error</h1>
      <h1 className={styles.success}>Success</h1>
      <Stylesheets primary={true} />
      <Inline/> */}
      {/* <NameList /> */}
      {/* <UserGreeting/> */}
      {/* <ParentComponent/> */}
      {/* <EventBind/> */}
      {/* <FunctionClick />
      <ClassClick /> */}
      {/* <Counter/> */}
      {/* <Greet name="Diana" heroName="Wonder Woman"/>
      <Welcome name="Diana" heroName="Wonder Woman"/> */}
      {/* <Message /> */}
      {/* <Greet/>
     <Welcome/> */}
      {/* <Greet name="Bruce" heroName="Batman">
       <p>This is children props</p>
      </Greet>
     <Greet name="Clark" heroName="Superman">
       <button>Action</button>
     </Greet>
     <Greet name="Diana" heroName="Wonder Woman"/>
     <Welcome name="Bruce" heroName="Batman"/>
     <Welcome name="Clark" heroName="Superman"/>
     <Welcome name="Diana" heroName="Wonder Woman"/>
     <Hello/> */}
    </div>
  );
}

export default App;
