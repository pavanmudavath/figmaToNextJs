import Image from "next/image";
import FeaturesImage from "../../../public/assets/FeaturesImage.svg";
import FeaturesImage1 from "../../../public/assets/FeatureImage2.svg";
import FeaturesImage2 from "../../../public/assets/FeatureImage3.svg";
import Arrow from "../../../public/assets/FeaturesArrow.svg";
import GreenArrow from "../../../public/assets/GreenArrow.svg";
import PinkArrow from "../../../public/assets/PinkArrow.svg";
import Check from "../../../public/assets/Check.svg";

export function Features(){
    return(
        <div className="flex flex-col gap-y-[56px] py-[56px] lg:py-[120px] lg:gap-y-[80px] ">

            {/* First feature */}

            <div className="flex flex-col gap-x-6 sm:flex-row-reverse ">
            <Image src={FeaturesImage} alt="FeaturesImage" className="hidden  w-1/2 sm:block"/>
              <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                <h3 className="font-medium text-[#0085FF] lg:text-[18px] ">Sales Monitoring</h3>
                <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                  Simplify your sales monitoring
                </h1>
                <Image src={FeaturesImage} alt="FeaturesImage" className="pt-[24px] sm:hidden"/>
                <p className="py-[24px] text-[#36485C] lg:text-[18px]" >Stay on top of things and revamp your work 
                process with our game-changing feature. Get 
                a bird{`'`}s eye view with our customizable dashboard.
             </p>

             <ul className="flex flex-col gap-y-3 lg:text-[18px]">
                <li className="flex items-center gap-x-2 text-[#36485C]">
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
                    Sed do eiusmod tempor incididunt ut labore
               </li>
             </ul>

             <p className="flex  items-center gap-x-2 pt-[24px] font-medium text-[#0085FF] lg:text-[18px]">
             Learn More {" "}
                <span>
                <Image src={Arrow} alt="Aroow"/>
                </span>
             </p>
        </div>
        </div>
        
             {/* Second feature */}

            <div className="flex flex-col gap-x-6 sm:flex-row  ">
            <Image src={FeaturesImage1} alt="FeaturesImage" className="hidden  w-1/2 sm:block"/>
              <div className="sm:w-1/2 lg:py-[56px] lg:pl-[56px]">
                <h3 className="font-medium text-[#00A424] lg:text-[18px] ">Customer Support</h3>
                <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                Get in touch with your customers
                </h1>
                <Image src={FeaturesImage1} alt="FeaturesImage" className="pt-[24px] sm:hidden"/>
                <p className="py-[24px] text-[#36485C] lg:text-[18px]" >Stay on top of things and revamp your work process with our game-changing feature. Get a birds eye view with our customizable dashboard. 
             </p>

             <ul className="flex flex-col gap-y-3 lg:text-[18px]">
                <li className="flex items-center gap-x-2 text-[#36485C]">
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
                    Sed do eiusmod tempor incididunt ut labore
               </li>
             </ul>

             <p className="flex  items-center gap-x-2 pt-[24px] font-medium text-[#00A424] lg:text-[18px]">
             Learn More {" "}
                <span>
                <Image src={GreenArrow} alt="Aroow"/>
                </span>
             </p>
        </div>
        </div>

         {/* Third feature */}

            <div className="flex flex-col gap-x-6 sm:flex-row-reverse ">
            <Image src={FeaturesImage2} alt="FeaturesImage" className="hidden  w-1/2 sm:block"/>
              <div className="sm:w-1/2 lg:py-[56px] lg:pr-[56px]">
                <h3 className="font-medium text-[#EB2891] lg:text-[18px] ">Growth Monitoring</h3>
                <h1 className="pt-[12px] text-2xl font-medium text-[#172026] lg:text-[42px] lg:leading-[58px]">
                Monitor your sites new subscribers 
                </h1>
                <Image src={FeaturesImage2} alt="FeaturesImage" className="pt-[24px] sm:hidden"/>
                <p className="py-[24px] text-[#36485C] lg:text-[18px]" >
                    Stay on top of things and revamp your work process
                     with our game-changing feature. Get a birds eye
                      view with our customizable dashboard. 
             </p>

             <div className="flex w-full gap-x-[24px]">
                <div className="w-1/2 flex flex-col gap-y-3">
                    <h3 className="text-[20px] text-[#172026] font-medium ">100+</h3>
                    <p  className="text-[#5F7896]">Lorem ipsum dolor sit</p>
                </div>
                <div className="w-1/2 flex flex-col gap-y-3">
                    <h3 className="text-[20px] text-[#172026] font-medium ">800+</h3>
                    <p className="text-[#5F7896]">Conse adipiscing elit</p>
                </div>
             </div>

             <p className="flex  items-center gap-x-2 pt-[24px] font-medium text-[#EB2891] lg:text-[18px]">
             Learn More {" "}
                <span>
                <Image src={PinkArrow} alt="Aroow"/>
                </span>
             </p>
        </div>
        </div>

        </div>
        
    )
}