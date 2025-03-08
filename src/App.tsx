import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Inventory from './pages/Inventory'
import ShoppingList from './pages/ShoppingList'
import MealPlanner from './pages/MealPlanner'

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/shopping-list" element={<ShoppingList />} />
          <Route path="/meal-planner" element={<MealPlanner />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App
