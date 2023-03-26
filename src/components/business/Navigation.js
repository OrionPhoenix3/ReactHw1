import React from 'react';
import {componentData} from '../../utils/array';

export default class Navigation extends React.Component {
    state = {
        currentPage: 'home'
    };

    renderFromState(){
        let page = componentData.find(elem => elem.name === this.state.currentPage);
        return page.component;
    };

    handleClick(name) {
        this.setState({currentPage: name});
    };

    render(){
        return(
            <>
            <div className='menu'>
                {componentData.map(({id, name, text}) => (
                <li key={id} className='menu-item'>
                        <a href=' ' onClick={(e) => {
                            e.preventDefault()
                            this.handleClick(name)
                    }}>
                             {text}
                        </a>
                    </li> 
                 ))}
            </div>
            <div className='page'>
                {this.renderFromState()}
            </div>
            </>
        )
    }
   
}