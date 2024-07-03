import Image from "next/image";
import Check from "../../../public/assets/Check.svg";
import Check1 from "../../../public/assets/check 1.svg";
export default function Pricing(){
    return(
        <div className="py-[48px] lg:py-[60px]">
            <h1 className="text-[#172026] text-center  text-[24px] font-medium lg:text-[42px]">Flexible plans for you</h1>
            <p className="text-[#36485C] pt-[16px] pb-[40px] text-center lg:text-[18px]">No hidden fees!</p>
          
         
              <div className="flex flex-col gap-y-6 gap-x-[24px] lg:flex-row  ">
                <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                    <div>
                <h3 className="text-[#4328EB] text-[18px] font-medium lg:text-xl">Free Trial</h3>
                <p className="text-[#36485C] text-[16px] lg:text-[18px]  ">Perfect for testing the waters</p>
                <h2 className="text-[#5F7896] text-[24px] mt-2 lg:text-[32px]"><span className="text-[#172026]">$0</span>/mo</h2>

                <ul className="flex flex-col gap-y-3 lg:text-[18px] mt-2 mb-2">
                <li className="flex items-center gap-x-2    text-[#36485C]">
                    <span>
                        <Image src={Check}alt="Checkmark"/>
                    </span>
                    Lorem ipsum dolor sit amet
               </li>
                <li className="flex items-center gap-x-2 text-[#36485C]">
                    <span>
                        <Image src={Check}alt="Checkmark"/>
                    </span>
                    Consectetur adipiscing elit
               </li>
                <li className="flex items-center gap-x-2 text-[#36485C]">
                    <span>
                        <Image src={Check}alt="Checkmark"/>
                    </span>
                    Sed do eiusmod tempor incididunt
               </li>
             </ul>
             </div>

             <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium ">Start Trial</button>
             </div>
            
              
                <div className="w-full rounded-[8px] bg-[#4328EB] p-6 flex flex-col">
                    <div>
                <h3 className="text-[#FFFFFF] text-[18px] font-medium lg:text-xl">Business</h3>
                <p className="text-[#F4F8FA] text-[16px] lg:text-[18px] ">Perfect for small businesses</p>
                <h2 className="text-[#F4F8FA] text-[24px] mt-2 lg:text-[32px] "><span className="text-[#F4F8FA]">$550</span>/mo</h2>

                <ul className="flex flex-col gap-y-3 lg:text-[18px] mt-2 mb-2">
                <li className="flex items-center gap-x-2    text-[#F4F8FA]">
                    <span>
                        <Image src={Check1}alt="Checkmark"/>
                    </span>
                    Lorem ipsum dolor sit amet
               </li>
                <li className="flex items-center gap-x-2 text-[#F4F8FA]">
                    <span>
                        <Image src={Check1}alt="Checkmark"/>
                    </span>
                    Consectetur adipiscing elit
               </li>
                <li className="flex items-center gap-x-2 text-[#F4F8FA]">
                    <span>
                        <Image src={Check1}alt="Checkmark"/>
                    </span>
                    Consectetur adipiscing elit
               </li>
                <li className="flex items-center gap-x-2 text-[#F4F8FA]">
                    <span>
                        <Image src={Check1}alt="Checkmark"/>
                    </span>
                    Consectetur adipiscing elit
               </li>
                <li className="flex items-center gap-x-2 text-[#F4F8FA]">
                    <span>
                        <Image src={Check1}alt="Checkmark"/>
                    </span>
                    Sed do eiusmod tempor incididunt
               </li>
             </ul>
             </div>

             <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium ">Get Started</button>
           
              </div>
              
                <div className="w-full rounded-[8px] bg-[#F5F4FF] p-6 flex flex-col lg:justify-between">
                <div>
                <h3 className="text-[#4328EB] text-[18px] font-medium lg:text-xl">Enterprise</h3>
                <p className="text-[#36485C] text-[16px]  lg:text-[18px] ">Perfect for big companies</p>
                <h1 className="font-medium text-[#172026] text-[24px] mt-2 mb-2 lg:text-[32px]">Custom</h1>
               
                <ul className="flex flex-col gap-y-3 lg:text-[18px] mt-2 mb-2">
                <li className="flex items-center gap-x-2    text-[#36485C]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore. 
               </li>
                <li className="flex items-center gap-x-2 text-[#36485C]">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

               </li>
              
             </ul>
             </div>

             <button className="mt-[16px] rounded-[4px] bg-white py-[14px] text-[#4328EB] font-medium ">Contact Us</button>
              </div>
           </div>
           </div>
         
      
    );
}