import React from 'react'

function Wave(props) {
    return (
        <svg className={props.className} version="1.1" x="0px" y="0px"
        viewBox="414 377 1440 40" preserveAspectRatio="none">
            <path d="M414,417h1440v-13.7c-72.4-9.1-186.7-20.9-323-24.3c-247.8-6.2-373.3,19.3-588,26c-124.3,3.9-306.8,3.3-529-25"/>
        </svg>
    )
}

export default Wave