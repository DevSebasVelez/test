import PropTypes from 'prop-types';

export const FirstApp = ({ tittle, subtittle }) => {



    return (
        <>
            <h1>{ tittle }</h1>
            <p>{ subtittle }</p>
        </>
    )
}


FirstApp.propTypes = {
    tittle: PropTypes.string.isRequired,
    subtittle: PropTypes.string,
}

FirstApp.defaultProps = {
    tittle: 'No hay titulo',
    subtittle: 'No hay subtitulo',
}