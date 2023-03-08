export default function ShopMessage({ msg }) {
  return (
    <div className="w-full">
      <div className="w-full chat chat-start my-2">
        <div className="chat-bubble mt-4 bg-red-300 text-black">{msg}</div>
      </div>
    </div>
  );
}
