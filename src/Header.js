import { BackgroundColor } from 'jest-matcher-utils/node_modules/chalk'
import React from 'react'
import styled from 'styled-components'


function header() {
    return (
        <div>
        <HeaderLogo>

        </HeaderLogo>
        <HeaderOptionAddress>
           <span className="Header-optionaLineOne">Hello,</span>
           <span className="Header-optionaLineTwo">Hello,</span> 
        </HeaderOptionAddress>
        </div>
    )
}

export default header

const HeaderLogo = styled.div`
    height: 60px;
    background-color: #0F1111;
    `

    const HeaderOptionAddress =styled.div`
        `

    const optionaLineOne =styled.div`
        `
        
    const optionaLineTwo =styled.div`
        `
