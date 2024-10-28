//Nous créons une interface pour définir le type de données des props.

interface ArticleProps {
    imgSrc : string;
    mainTitle : string;
    description : string;
}

function Article({imgSrc, mainTitle, description}: ArticleProps)  {
    return(
        <article>
            <img src={imgSrc} alt="" />
            <h2>{mainTitle}</h2>
            <h3>{description}</h3>
        </article>
    )
}

export default Article;