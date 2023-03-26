import React from 'react';
import Home from '../components/ui/Home';
import News from '../components/ui/News';
import CallBack from '../components/ui/CallBack';
import Contacts from '../components/ui/Contacts';

export const componentData = [
    {
       id: 1,
       name: 'home',
       text: 'Home',
       component: <Home />
    },
    {
        id: 2,
        name: 'news',
        text: 'News',
        component: <News />
    },
    {
        id: 3,
        name: 'callBack',
        text: 'CallBack',
        component: <CallBack />
    },
    {
        id: 4,
        name: 'contacts',
        text: 'Contacts',
        component: <Contacts />
    }

]