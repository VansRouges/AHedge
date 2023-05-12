import { useState } from "react";
import { Collapse } from "react-collapse"
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai"
import AccordionItems from "./AccordionItems";


const accordionData = [
  {
    title: 'First-class investment solutions',
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque.",
  },
  {
    title: 'Building the idea of future',
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque.",
  },
  {
    title: 'Investment-plan consulting',
    desc: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa cum sociis natoque.",
  },
]

export default function Example() {
  const [open, setOpen] = useState(0);

  const toggle = (index) => {
    if(open === index){
      return setOpen(null)
    }

    setOpen(index)
  }
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          
          <div className='grid place-items-center'>
              <div className='px-4 max-w-[800px]'>
                {accordionData.map((data, index) => {
                  return(
                    <AccordionItems 
                      key={index} 
                      title={data.title} 
                      desc={data.desc} 
                      toggle={() => toggle(index)} 
                      open={index === open}
                    />
                  )
                })}
              </div>
          </div>
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600 capitalize">How We Work</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl capitalize">Leading The Best Invest manager Team</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <dl className="grid max-w-xl grid-cols-2 gap-x-6 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-5 mt-4">
                <a href='#' className="bg-blue-600 uppercase p-4 w-44 text-center text-white">
                  Learn More 
                </a>
              </dl>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
