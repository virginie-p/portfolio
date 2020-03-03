import React from 'react'

function Video() {
    return (
        <section id="video">
            <div className="sectionTitle">
                <h2>Un aperçu en live ?</h2>
            </div>
            <div className="sectionContent videoPresentation">
                    <iframe title="meInLive" src="https://www.youtube.com/embed/UYxdXZ-5ljU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </section>
    )
}

export default Video