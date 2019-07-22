import React from 'react'
import divider from './../img/divider-01.png'

function Project() {
        return (
            <section id="my-projects">
                <div className="sectionTitle">
                    <img src={divider} alt=""/>
                    <h1>Mes Projets</h1>
                    <img src={divider} alt=""/>
                </div>
                <div>
                    <div className="glide">
                        <div className="glide__track" data-glide-el="track">
                            <ul className="glide__slides">
                            </ul>
                        </div>
                        <div class="glide__arrows" data-glide-el="controls">
                            <button className="glide__arrow glide__arrow--left" data-glide-dir="<">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <path d="M0 12l10.975 11 2.848-2.828-6.176-6.176H24v-3.992H7.646l6.176-6.176L10.975 1 0 12z"></path>
                                </svg>
                            </button>
                            <button className="glide__arrow glide__arrow--right" data-glide-dir=">">
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                                    <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z"></path>
                                </svg>
                            </button>
                        </div>
                        <div className="glide__bullets" data-glide-el="controls[nav]">
                            <button className="glide__bullet" data-glide-dir="=0"></button>
                            <button className="glide__bullet" data-glide-dir="=1"></button>
                            <button className="glide__bullet" data-glide-dir="=2"></button>
                        </div>
                    </div>
                </div>
            </section>
        )
}

export default Project