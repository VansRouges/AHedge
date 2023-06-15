import { useRouter } from "next/router";
import { FaBitcoin } from "react-icons/fa"
import { FiCopy } from "react-icons/fi"

const Investment = () => {
  const router = useRouter();
  const usdt = "0x11f38b2Ca413457Ce7f964ad1633Bd6aFe11B213"
  const bitcoin = "bc1qkk9tf9c72kv7hlaf6cjazq2an9sstvnsawst33"
  const eth = "0xFC8D2A05260b03a3Eea9e458Ca88dc11A894Cb03"

  const handleDeposit = async () =>{
    router.push('/dashboard/deposit')
  }
  const handleWithdrawal = async () =>{
    router.push('/dashboard/withdrawal')
  }
  return (
    <div>
        <div className="w-[22rem] lg:w-full py-10 p-2">
          <h1 className="font-bold text-2xl py-2">Investment Plans</h1>
          <div className="space-y-4">
            <div onClick={handleDeposit} className="bg-white hover:bg-gray-200 active:bg-sky-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300
            cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <div>
                <p className=" font-medium ">Bronze Plan</p>
                <p className="font-light">$500-$5000{" "}
                <span aria-hidden="true" className="font-bold">&middot;</span>{" "}
                +20%{" "}
                <span aria-hidden="true" className="font-bold">&middot;</span>{" "}
                Low
                </p>
              </div>
              <div className="text-white w-16 p-2 bg-cyan-500 rounded-lg">
                Invest
              </div>
            </div>
            <div onClick={handleDeposit} className="bg-white hover:bg-gray-200 active:bg-sky-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300
            cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <div>
                <p className=" font-medium ">Silver Plan</p>
                <p className="font-light">$5000-$10,000{" "}
                <span aria-hidden="true" className="font-bold">&middot;</span>{" "}
                +35%{" "}
                <span aria-hidden="true" className="font-bold">&middot;</span>{" "}
                Min
                </p>
              </div>
              <div className="text-white w-16 p-2 bg-cyan-500 rounded-lg">
                Invest
              </div>
            </div>
            <div onClick={handleDeposit} className="bg-white hover:bg-gray-200 active:bg-sky-900 active:bg-opacity-75 active:text-white active:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-sky-300
            cursor-pointer h-14 flex justify-between items-center shadow-md rounded-xl px-8 pt-8 pb-8 relative py-4 focus:outline-none">
              <div>
                <p className=" font-medium ">Gold Plan</p>
                <p className="font-light">$10,000-Max{" "}
                <span aria-hidden="true" className="font-bold">&middot;</span>{" "}
                +50%{" "}
                <span aria-hidden="true" className="font-bold">&middot;</span>{" "}
                Min
                </p>
              </div>
              <div className="text-white w-16 p-2 bg-cyan-500 rounded-lg">
                Invest
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full mt-5 md:col-span-2 relative lg:h-fit h-[20vh] p-4 border rounded-lg bg-white">
          <p className="font-bold tracking-wide text-lg">Your Wallet</p>
          <div className="w-full h-20 rounded-lg flex justify-between p-4 px-7 my-2">
            <div>
              <h5 className="font-bold">BTC</h5>
            </div>
            <div className="text-xs h-fit p-2 font-medium text-gray-500 border rounded-lg flex justify-between">
              <p>{bitcoin}</p>
            </div>
            <div>
            <button onClick={handleDeposit} className="h-10 p-2 text-white bg-red-500">Deposit</button>
            </div>
            <button onClick={handleWithdrawal} className="h-10 p-2 text-white bg-green-500">Send</button>
          </div>
          <div className="w-full h-20 rounded-lg flex justify-between p-4 px-7 my-2">
            <div>
              <h5 className="font-bold">USDT</h5>
              <h6 className="text-xs">BEP20</h6>
            </div>
            <div className="text-xs h-fit p-2 font-medium text-gray-500 border rounded-lg flex justify-between">
                <p>{usdt}</p>
            </div>
            <div>
              <button onClick={handleDeposit} className="h-10 p-2 text-white bg-red-500">Deposit</button>
            </div>
            <button onClick={handleWithdrawal} className="h-10 p-2 text-white bg-green-500">Send</button>
          </div>
          <div className="w-full h-20 rounded-lg flex justify-between p-4 px-7 my-2">
            <div>
              <h5 className="font-bold">ETH</h5>
              <h6 className="text-xs">ERC20</h6>
            </div>
            <div className="text-xs h-fit p-2 font-medium text-gray-500 border rounded-lg flex justify-between">
              <p>{eth}</p>
            </div>
            <div>
            <button onClick={handleDeposit} className="h-10 p-2 text-white bg-red-500">Deposit</button>
            </div>
            <button onClick={handleWithdrawal} className="h-10 p-2 text-white bg-green-500">Send</button>
          </div>
        </div>
    </div>
  )
}

export default Investment