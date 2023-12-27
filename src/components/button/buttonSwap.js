const ButtonSwap = ({ clickHandel, url, title }) => {
    return <button className='buttonSwap' onClick={() => clickHandel(url)}>
        <span>{title}</span>
    </button>
}
export default ButtonSwap