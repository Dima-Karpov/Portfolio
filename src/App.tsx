import React from 'react';
import s from './App.module.scss';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills';
import { Portfolio } from './portfolio/Portfolio';
import { ContactMe } from './contactme/ContactMe';
import { Footer } from './footer/Footer';


export const App: React.FC = React.memo(() => {
  return (
    <div className={s.app}>
      <Header />
      <Main/>
      <Skills/>
      <Portfolio />
      <ContactMe />
      <Footer />
    </div>
  )
})



