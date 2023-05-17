import Films from "../components/Films";

const FilmsList = ({ films }) => {

    const filmComponents = films.map((film) => {
        return (
            <Films key={film.id} name={film.name} url={film.url} />
        );
    });

    return (
        <>
            {filmComponents}
        </>
    )
};

export default FilmsList;