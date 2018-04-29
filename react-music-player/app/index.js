import React from 'react'
import {render} from 'react-dom'
import {AppContainer} from 'react-hot-loader';
import Hello from './component/hello'

render(
    <AppContainer>
        <Hello />
    </AppContainer>,
    document.getElementById('root')
);

if(module.hot){
    module.hot.accept('./component/hello',()=>{
        const NewHello=require('./component/hello').default;
        render(
            <AppContainer>
                <NewHello />
            </AppContainer>,
            document.getElementById('root')
        )
    })
}
