
const Footer = () => {
  return (
     <footer className=" bg-[#F3F3F3] p-[40px] max-lg:px-[20px]">
                  <div className="flex justify-between max-w-[1400px] mx-auto max-md:flex-col gap-4">
                    <div className="">
                        <h3 className="text-[28px] text-primary font-instrument font-bold">SolanaTravels</h3>
                        <p className="text-primary text-[14px]">We accept Credit Card, Debit Card <br /> and Cryptocurrency payments.</p>
                    </div>
                    <div className="flex gap-[60px] max-lg:gap-6 max-md:flex-wrap">
                        <div className="flex gap-[4px] flex-col">
                            <h5 className="text-secondary font-bold">SOLANA TRAVELS</h5>
                            <a className=" text-darkGrey/75 text-sm" href="">About Us</a>
                            <a className=" text-darkGrey/75 text-sm" href="">Feedback</a>
                            <a className=" text-darkGrey/75 text-sm" href="">FAQs</a>
                            <a className=" text-darkGrey/75 text-sm" href="">Price Guarantee</a>
                        </div>
                        <div className="flex gap-[4px] flex-col">
                            <h5 className="text-secondary font-bold">SUPPORT</h5>
                            <a className=" text-darkGrey/75 text-sm" href="">Help Center</a>
                            <a className=" text-darkGrey/75 text-sm" href="">Payment Options</a>
                            <a className=" text-darkGrey/75 text-sm" href="">Terms & Conditions</a>
                            <a className=" text-darkGrey/75 text-sm" href="">Privacy Policy</a>
                            <a className=" text-darkGrey/75 text-sm" href="">Cookie Policy</a>
                            <a className=" text-darkGrey/75 text-sm" href="">Contact Us</a>
                            <a className=" text-darkGrey/75 text-sm" href="">Media Contact</a>
                        </div>
                        <div className="flex gap-[4px] flex-col">
                            <h5 className="text-secondary font-bold">COMMUNITY</h5>
                            <a className=" text-darkGrey/75 text-sm" href="">Twitter</a>
                            <a className=" text-darkGrey/75 text-sm" href="">Facebook</a>
                            <a className=" text-darkGrey/75 text-sm" href="">Telegram</a>
                            <a className=" text-darkGrey/75 text-sm" href="">Instagram</a>
                            <a className=" text-darkGrey/75 text-sm" href="">LinkedIn</a>
                            <a className=" text-darkGrey/75 text-sm" href="">Discord</a>
                        </div>
                    </div>
                    </div>      
            </footer>
  )
}

export default Footer
