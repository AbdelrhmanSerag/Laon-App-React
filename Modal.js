import "../formStyle.css";
export default function Modal(theMsg) {
  const color = { color: theMsg.color };
  if (theMsg.isVisible) {
    return (
      <div className="modal">
        <div id="modal-erorr" style={color}>
          <h1>{theMsg.msg}</h1>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
