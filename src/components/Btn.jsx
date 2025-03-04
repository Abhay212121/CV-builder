function Btn({ btnText, doFunc }) {


    return (
        <button className="border-2 px-3 py-1 rounded-lg hover:cursor-pointer" onClick={doFunc}>{btnText}
        </button>
    )
}

export default Btn