export default function UserMessage({ msg }) {
  return (
    <div className="w-full">
      <div className="w-full chat chat-end my-2">
        <div className="chat-bubble bg-red-100 text-black">{msg}</div>
      </div>
    </div>
  );
}
