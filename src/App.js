import { Link, Route, Switch } from 'react-router-dom'
import { MainPage, Upcoming, Requests, Header, Movies, DKnight, Music, FeedbackForm, Babadook, BlueIguana, ThirtySix } from './components'




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
            <Route exact path='/Movies' component={Movies} />
            <Route path='/Movies/Demon+Knight' component={DKnight} />
            <Route path='/Movies/Babadook' component={Babadook} />
            <Route path='/Movies/The+36th+Chamber' component={ThirtySix} />
            <Route path='/Movies/Blue+Iguana' component={BlueIguana} />
            <Route exact path='/Music' component={Music} />
            <Route path='/FormTest' component={FeedbackForm} />
            </Switch>
        </main>

        <footer>
            Plot details and release info provided by OMDb API
        </footer>
        </div>
    );
    }


      
export default App;
