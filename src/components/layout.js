import React from 'react';
import ColorScroll from '../helpers/color-scroll';
import Fade from 'react-reveal/Fade';

export default function Layout({ children }) {
    return (
        <ColorScroll
            colors={['#fff7ef', '#f2f2fd', '#f7d0d0']}
        >
            <div className='body-content'>
                <Fade down>
                    <header id="headerbar">
                        <h2>🚀 mikex.dev</h2>
                    </header>
                </Fade>
                {children}
            </div>
        </ColorScroll>
    )
}