import React from 'react'
import Login from './components/LogIn/Login'
import Header from './components/Header/Header'
import ViewGoals from './components/ViewGoals/ViewGoals'
import AddGoal from './components/AddGoal/AddGoal'
import DeleteGoal from './components/DeleteGoals/DeleteGoal'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
   <>
      <Header/>
      <Login/>
      <ViewGoals/>
      <AddGoal/>
      <DeleteGoal/>
      <Footer/>
   </>
  )
}

export default App