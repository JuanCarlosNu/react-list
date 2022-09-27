import React from "react"
import CourseList from "./CourseList/CourseList.js"
import NavBar from "./NavBar/NavBar.js"
import {Redirect, Route, Switch,} from "react-router-dom"
import About from "./About/About.js"
import Blog from "./Blog/Blog.js"
import Jobs from "./Jobs/Job.js"
import CourseDetails from "./CourseDetails/CourseDetails.js"
import Signup from "./Signup/Signup.js"





const App = () => {

    return <div>
        <NavBar />
        <Switch>
        <Route path="/home" component={CourseList} />
        <Route path="/about" exact component={About} />
        <Route path="/courses/:id" exact component={CourseDetails} />
        <Route path="/courses" exact component={CourseList} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/blog" exact component={Blog} />
        <Route path="/signup" exact component={Signup} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/about"/>
        </Switch>
                  
         </div>
}

export default App 