import toast from "react-hot-toast";

import copyImg from "../../assets/images/copy.svg";
import "./styles.scss";

type RoomCodeProps = {
  code: string;
};

export function RoomCode(props: RoomCodeProps) {
  const notify = () => toast.success("Room ID copied to clipboard");

  function copyRoomCodeToClipboard() {
    navigator.clipboard.writeText(props.code);

    notify();
  }

  return (
    <button className="room-code" onClick={copyRoomCodeToClipboard}>
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <span>Sala #{props.code}</span>
    </button>
  );
}
