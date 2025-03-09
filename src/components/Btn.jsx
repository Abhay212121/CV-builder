function Btn({ btnText, sectionHeading, doFunc }) {
  return (
    <button
      className="rounded-lg border-2 px-3 py-1 hover:cursor-pointer"
      onClick={() => {
        doFunc(sectionHeading);
      }}
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

function Btn3({ btnText, obj, index, doFunc }) {
  return (
    <button
      className="rounded-lg border-2 px-3 py-1 hover:cursor-pointer"
      onClick={() => {
        doFunc(obj, index);
      }}
    >
      {btnText}
    </button>
  );
}
export { Btn, Btn2, Btn3 };
