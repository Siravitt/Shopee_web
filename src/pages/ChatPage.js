import ChatListContainer from "../components/chat/ChatListContainer";
import ChatSearchForm from "../components/chat/ChatSearchForm";

export default function ChatPage() {
  return (
    <>
      <div className="w-full h-[70px] bg-orange-400 flex items-center justify-center">
        <div className="text-[25px] text-white font-bold">Chat</div>
      </div>
      <ChatSearchForm />
      <ChatListContainer />
    </>
  );
}
