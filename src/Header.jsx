import React from 'react'

function Header({ ShowBoxes }) {
    return (
        <div>
            <div className="lead-line" id="lead-line">
                Beautiful Email Converter
            </div>

            <ul className='menu'>
                <li>
                    <a onClick={() => ShowBoxes({
                        textarea: true,
                        markdownBox: true,
                    })} >SPLIT VIEW</a>
                </li>
                <li onClick={() => ShowBoxes({
                    textarea: false,
                    markdownBox: true,
                })}>
                    <a>Email</a>
                </li>
                <li onClick={() => ShowBoxes({
                    textarea: true,
                    markdownBox: false,
                })}>
                    <a>Markdown</a>
                </li>
            </ul>
            <div>

            </div>
        </div>
    )
}

export default Header