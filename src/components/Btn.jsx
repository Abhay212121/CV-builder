function Btn({ btnText, doFunc }) {
  return (
    <button
      className="rounded-lg border-2 px-3 py-1 hover:cursor-pointer"
      onClick={doFunc}
    >
      {btnText}
    </button>
  );
}

function Btn2() {
  return (
    <>
      <button
        className="rounded-lg border-2 px-3 py-1 hover:cursor-pointer"
        onClick={doFunc}
      >
        {btnText}
      </button>
    </>
  );
}

export { Btn, Btn2 };
