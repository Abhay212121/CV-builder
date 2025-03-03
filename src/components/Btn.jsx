function Btn({ btnText, doFunc }) {


    return (
        <button className="border-2 px-3 py-1 rounded-lg" onClick={doFunc}>{btnText}
        </button>
    )
}

export default Btn