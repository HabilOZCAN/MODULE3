import React from 'react'

export default function ArticleWithLink(props) {
    let headerone = props.headerone;
    let headertwo = props.headertwo;
    let siteAddress = props.siteAddress;
    let imgAddress = props.imgAddress;
    return (
        <div>
            <section>
                <h1>{headerone}</h1>
                <article>
                    <a href={siteAddress} style={{"textDecoration": "none"}}>
                        <img src={imgAddress} alt='imageDescription' style={{"width": "10rem", "height": "auto"}}></img>
                        <h2>{headertwo}</h2>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Perferendis ea beatae quam debitis? Neque nobis quaerat aperiam. Tenetur, enim quisquam iste, iure dignissimos error ab expedita voluptatibus nihil architecto inventore.</p>
                    </a>
                </article>
            </section>
        </div>
    )
}
