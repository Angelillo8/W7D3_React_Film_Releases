

const FilmsMore = () => {
    const url = "https://www.imdb.com/calendar/?region=gb"

    return (
        <button onClick={()=> window.open(url, "_blank")} >View more upcoming releases &#62;&#62;</button>
    );

};

export default FilmsMore;