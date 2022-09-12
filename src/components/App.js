import React from "react"
import CourseList from "./CourseList/CourseList.js"
import NavBar from "./NavBar/NavBar.js"
import {Redirect, Route, Switch,} from "react-router-dom"
import About from "./About/About.js"
import Blog from "./Blog/Blog.js"
import Jobs from "./Jobs/Job.js"



const App = () => {

    return <div>
        <NavBar />
        <Switch>
        <Route path="/home" component={CourseList} />
        <Route path="/about" exact component={About} />
        <Route path="/courses" exact component={CourseList} />
        <Route path="/jobs" exact component={Jobs} />
        <Route path="/blog" exact component={Blog} />
        <Redirect from="/" exact to="/home" />
        <Redirect to="/about" />
        </Switch>
                  
         </div>
}

export default App 