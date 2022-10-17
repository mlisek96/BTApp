import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Layout} from "./components/Layout";
import {MainPage} from "./views/MainPage/index.jsx";
import './App.scss'

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/welcome-page' />
                <Route path='/login' />
                <Route path='/' element={<Layout />}>
                    <Route path='/' element={<MainPage />}/>
                    <Route path='/add-expense' />
                    <Route path='/expenses-list' >
                        <Route path='/expenses-list/total' />
                        <Route path='/expenses-list/by-category' />
                    </Route>
                </Route>
            </Routes>
        </Router>
    );
}

export default App
