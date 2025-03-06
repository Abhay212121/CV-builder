function Btn({ btnText, sectionHeading, doFunc }) {
  if (sectionHeading === "Education") {
  }

  if (sectionHeading === "Experience") {
  }

  if (sectionHeading === "Projects") {
  }

  return (
    <button
      className="rounded-lg border-2 px-3 py-1 hover:cursor-pointer"
      onClick={doFunc}
    >
      {btnText}
    </button>
  );
}

export default Btn;
