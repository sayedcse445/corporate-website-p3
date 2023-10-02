import './App.css';
import './components/appWork.css'
import AppAbout from './components/appAbout';
import AppService from './components/appService';
import AppWork from './components/appWork';
import Header from './components/header';
import Heros from './components/heros';
import TeamApp from './components/team';
import TestiMomial from './components/testiomial';
import AppPricing from './components/pricing';
import BlogApp from './components/blog';
import ContactApp from './components/contact';
import FooterApp from './components/footer';

let  App = () => {
  return (
    <div className='App'>
      <header>
    <Header />
    </header>
    <main>
     <Heros />
    <AppAbout/>
    <AppService/> 
    <AppWork/>
    <TeamApp/>
    <TestiMomial/>
    <AppPricing/>
    <BlogApp/>
    <ContactApp/>
    <FooterApp/>
    </main>
    </div>
  );
}

export default App;
