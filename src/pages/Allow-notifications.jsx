

const AllowNotifications = () => {
    
    return (
    <div className="flex flex-col h-screen justify-evenly">
      <div className="relative">
        <div className="text-lg font-bold absolute right-10 text-[#E94057]">Passer</div>
      </div>
      <div className="flex justify-center">
        <img src="/img/chat.svg" alt="image d'une bulle de message"/>
      </div>
      <div className="">
        <div className="text-center">
          <h2 className="font-bold text-[24px]">Activer les notifications</h2>
          <p className="px-6">Recevez une notification push lorsque vous obtenez la correspondance ou recevez un message.</p>
        </div>
      </div>
      <div className="flex justify-center">
        <button className="btn bg-[#E94057] text-white w-[295px]">Je veux être averti</button>
      </div>
    </div>
  );
}

export default AllowNotifications;
