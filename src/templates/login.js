<div className="w-[390px] min-h-[845px] bg-white mx-auto border">
      <div className="w-full h-[70px] px-4 bg-orange-400 flex items-center">
        <div className="text-[25px] text-white font-bold">Login</div>
      </div>
      <div className="flex items-center justify-center py-10">
        <div className="w-[100px] h-[100px] rounded-full flex items-center justify-center">
          <img src={"Logo"} alt="" />
        </div>
      </div>
      <div className="w-full px-14">
        <form className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label className="px-2">E-mail</label>
            <input
              placeholder="email@address.com"
              className="w-full rounded-xl border px-4 py-1"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="px-2">Password</label>
            <input
              placeholder="password"
              className="w-full rounded-xl border px-4 py-1"
            />
          </div>
          <div className="flex justify-center py-4">
            <button className="w-[200px] bg-orange-400 py-1 rounded-xl text-white font-bold">
              Log in
            </button>
          </div>
        </form>
        <div className="flex justify-center text-[12px] font-bold py-4">
          <button>Forgot password?</button>
        </div>
      </div>
    </div>