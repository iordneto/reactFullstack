import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastname='Silva'>
        <Member name='Iord' />
        <Member name='Elisa' />        
        <Member name='Léo' />
    </Family>
    , 
    document.getElementById('app')) 
