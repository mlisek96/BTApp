import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {MantineProvider} from '@mantine/core';
import {Layout} from "./components/Layout";
import {MainPage} from "./views/MainPage/index.jsx";
import {HeroPage} from "./views/HeroPage/HeroPage.jsx";
import {LogIn} from "./views/LogIn/LogIn.jsx";
import {AddExpense} from "./views/AddExpense/AddExpense.jsx";
import {ExpensesTable} from "./views/ExpensesTable/ExpensesTable.jsx";
import {ExpensesTableCategory} from "./views/ExpensesTableCategory/ExpensesTableCategory";
import {NotFoundPage} from "./views/404Page/404Page";
import './App.scss'

function App() {
    return (
        <MantineProvider withGlobalStyles withNormalizeCSS theme={{
            fontFamily: 'Poppins, sans serif',
        }}
        >
            <Router>
                <Routes>
                    <Route path='/' element={<HeroPage/>}/>
                    <Route path='/login' element={<LogIn/>}/>
                    <Route path='/' element={<Layout/>}>
                        <Route path='/main-page' element={<MainPage/>}/>
                        <Route path='/add-expense' element={<AddExpense/>}/>
                        <Route path='/expenses-table' element={<ExpensesTable/>}/>
                        <Route path='/expenses-table/by-category' element={<ExpensesTableCategory/>}/>
                    </Route>
                    <Route path='*' element={<NotFoundPage />}/>
                </Routes>
            </Router>
        </MantineProvider>
    );
}

export default App
