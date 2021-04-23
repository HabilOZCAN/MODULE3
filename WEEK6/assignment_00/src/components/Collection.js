import React from 'react'
import ArticleWithLink from './ArticleWithLink';
import HeaderLink from './HeaderLink';
import FooterLink from './FooterLink';

export default function Collection() {
    return (
        <div>
            <HeaderLink/>
            <ArticleWithLink
            headerone = 'Merhaba Yeni Gun'
            headertwo = 'Gunesin Insan Hayatina Faydalari'
            imgAddress = 'https://ychef.files.bbci.co.uk/1600x640/p03gqczd.jpg'
            siteAddress = 'http://www.bbc.com/earth/story/20160128-how-do-we-know-what-stars-like-our-sun-are-made-of'/>
            <ArticleWithLink
            headerone = 'Hayvanlar Alemi'
            headertwo = 'Muhtesem ve Tehlikeli Surungenler'
            imgAddress = 'https://static.dw.com/image/50193312_303.jpg'
            siteAddress = 'https://www.dw.com/en/escaped-venomous-snake-on-the-loose-in-german-town/a-50161580'/>
            <ArticleWithLink
            headerone = 'Feza'
            headertwo = 'Evrende Yanliz miyiz?'
            imgAddress = 'https://cdn.someecards.com/posts/31-of-the-funniest-area-51-memes-for-anyone-ready-to-see-them-aliens-WPE.jpg'
            siteAddress = 'https://www.someecards.com/memes-lists-comics/memes/31-of-the-funniest-area-51-memes-for-anyone-ready-to-see-them-aliens/'/>
            <FooterLink/>
        </div>
    )
}
