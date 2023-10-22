import { useRouter } from "next/router";
import { FaBitcoin } from "react-icons/fa"
import { FiCopy } from "react-icons/fi"
import { GiMetalPlate, GiSilverBullet, GiGoldBar } from "react-icons/gi"
import { IoDiamondOutline } from "react-icons/io5"
import Link from 'next/link'


const plans = [
  {
      package: "silver package",
      price: "$500 - $5000",
      roi: "5% daily",
      duration: "30 days",
      icon: GiSilverBullet,
      iconClass: "text-gray-100 mx-2 text-xl",
      href: '/dashboard/stake',
  },
  {
      package: "gold package",
      price: "$5000 - $50000",
      roi: "10% daily",
      duration: "30 days",
      icon: GiGoldBar,
      iconClass: "text-yellow-500 mx-2 text-xl",
      href: '/dashboard/stake',
  },
  {
      package: "diamond package",
      price: "$50000 - $500000",
      roi: "15% daily",
      duration: "30 days",
      icon: IoDiamondOutline,
      iconClass: "text-white mx-1 text-xl",
      href: '/dashboard/stake',
  },
  {
      package: "Platinum package",
      price: "$500000 - $1000000",
      roi: "20% daily",
      duration: "60 days",
      icon: GiMetalPlate,
      iconClass: "text-neutral-800 mx-1 text-xl",
      href: '/dashboard/stake',
  },
]

const Investment = () => {
  const router = useRouter();
  const usdt = "0x11f38b2Ca413457Ce7f964ad1633Bd6aFe11B213"
  const bitcoin = "bc1qkk9tf9c72kv7hlaf6cjazq2an9sstvnsawst33"
  const eth = "0xFC8D2A05260b03a3Eea9e458Ca88dc11A894Cb03"

  // const handleDeposit = async () =>{
  //   router.push('/dashboard/deposit')
  // }
  // const handleWithdrawal = async () =>{
  //   router.push('/dashboard/withdrawal')
  // }
  return (
        <div className="w-[28rem] lg:w-full py-5 p-2">
          <h1 className="font-bold text-2xl py-2">Staking Plans</h1>
          <div className="grid col-1 bg- h- shadow-sm rounded">
        <div className=" w-full h-96 space-y-7">
            {plans.map((plan) => (
                <div key={plan.package} className="bg-gray-500 text-gray-200 card-2 p-3 rounded-xl grid gap-x- grid-cols-5">
                    <div className="flex justify-center items-center">
                        <plan.icon className={plan.iconClass} />
                        <span className="capitalize">{plan.package}</span>
                    </div>
                    <div className="flex flex-col text-center">
                        <span>Price</span>
                        <span>{plan.price}</span>
                    </div>
                    <div className="flex flex-col text-center ">
                        <span>ROI</span>
                        <span>{plan.roi}</span>
                    </div>
                    <div className="flex flex-col text-center ">
                        <span>Duration</span>
                        <span>{plan.duration}</span>
                    </div>
                    <Link href={plan.href} className='bg-white rounded w-28 h-12 text-black hover:text-white hover:bg-transparent outline outline-white flex justify-center items-center'>Invest</Link>
                </div>
            ))}
        </div>
      </div>
        </div>
  )
}

export default Investment
