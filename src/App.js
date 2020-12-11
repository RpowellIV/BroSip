import { Link, Route, Switch } from 'react-router-dom'
import { MainPage, Upcoming, Requests, Header, Movies } from './components'


const App = () => {
    return (
        <div className="y-app">
        <header>
            <Header/>
        </header>

        <main>
            <Switch>
            <Route exact path='/' component={MainPage} />
            <Route path='/Upcoming' component={Upcoming} />
            <Route path='/Requests' component={Requests} />
            <Route path='/Movies' component={Movies} />
            </Switch>
        </main>

        <footer>
            This is the footer
        </footer>
        </div>
    );
    }

export default App;
