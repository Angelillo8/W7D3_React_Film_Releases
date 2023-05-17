

const Films = ({ name, url }) => {

    return (
        <li><a target="_blank" rel="noreferrer" href={url}>{name}</a></li>
    );
};

export default Films;