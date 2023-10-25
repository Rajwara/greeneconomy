import React from "react";

const ContactForm = () => {
  return (
    <>
      <section className="mt-[30px] md:mt-[50px] lg:mt-[100px]  dark:bg-white px-[0px] md:px-[60px] lg:px-[80px] xl:px-[100px]">
        <div className="container">
          <div className="flex flex-wrap  lg:justify-between">
            <div className="w-full  lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <span className="block mb-0 md:mb-2 lg:mb-2 xl:mb-4 text-sm md:text-base xl:text-lg  font-semibold text-[#BAB220] text-primary font-montserrat  leading-5 xl:leading-7">
                  Feel free to...
                </span>
                <h2 className="mb-2 md:mb-4 xl:mb-6 text-2xl md:text-3xl xl:text-4xl leading-7 xl:leading-10 font-bold uppercase text-[#316D69] text-dark   font-montserrat ">
                  CONTACT US
                </h2>
                <p className="text-sm md:text-base xl:text-lg  leading-5 xl:leading-7 mb-2 md:mb-4 xl:mb-6 text-[#3c3c3c] font-poppins font-normal">
                  For any questions about Green Economy, please do not hesitate
                  to contact us.
                </p>
                <div className="mb-2 md:mb-4 lg:mb-6 flex w-full max-w-[370px]">
                  <div className="mr-2 flex h-[60px] w-full max-w-[60px] items-start overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width={24}
                      height={24}
                      viewBox="0 0 24 24"
                      className="fill-current text-[#316D69] mt-2"
                    >
                      <path d="M21.8182 24H16.5584C15.3896 24 14.4156 23.0256 14.4156 21.8563V17.5688C14.4156 17.1401 14.0649 16.7893 13.6364 16.7893H10.4026C9.97403 16.7893 9.62338 17.1401 9.62338 17.5688V21.8173C9.62338 22.9866 8.64935 23.961 7.48052 23.961H2.14286C0.974026 23.961 0 22.9866 0 21.8173V8.21437C0 7.62972 0.311688 7.08404 0.818182 6.77223L11.1039 0.263094C11.6494 -0.0876979 12.3896 -0.0876979 12.9351 0.263094L23.2208 6.77223C23.7273 7.08404 24 7.62972 24 8.21437V21.7783C24 23.0256 23.026 24 21.8182 24ZM10.3636 15.4251H13.5974C14.7662 15.4251 15.7403 16.3995 15.7403 17.5688V21.8173C15.7403 22.246 16.0909 22.5968 16.5195 22.5968H21.8182C22.2468 22.5968 22.5974 22.246 22.5974 21.8173V8.25335C22.5974 8.13642 22.5195 8.01949 22.4416 7.94153L12.1948 1.4324C12.0779 1.35445 11.9221 1.35445 11.8442 1.4324L1.55844 7.94153C1.44156 8.01949 1.4026 8.13642 1.4026 8.25335V21.8563C1.4026 22.285 1.75325 22.6358 2.18182 22.6358H7.48052C7.90909 22.6358 8.25974 22.285 8.25974 21.8563V17.5688C8.22078 16.3995 9.19481 15.4251 10.3636 15.4251Z" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-base md:text-lg xl:text-xl font-bold text-[#316D69] font-montserrat tracking-normal leading-7 xl:leading-9">
                      Our Location
                    </h4>
                    <p className="text-sm md:text-base xl:text-lg leading-5 xl:leading-7 text-[#3c3c3c] font-poppins font-normal">
                      Unit 19319-001, Dubai Silicon Oasis, DDP, Building A2,
                      Dubai, UAE
                    </p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-2 flex h-[60px] w-full max-w-[60px] items-start overflow-hidden rounded bg-primary bg-opacity-5 text-primary sm:h-[70px] sm:max-w-[70px]">
                    <svg
                      width={28}
                      height={19}
                      viewBox="0 0 28 19"
                      className="fill-current text-[#316D69] mt-2"
                    >
                      <path d="M25.3636 0H2.63636C1.18182 0 0 1.16785 0 2.6052V16.3948C0 17.8322 1.18182 19 2.63636 19H25.3636C26.8182 19 28 17.8322 28 16.3948V2.6052C28 1.16785 26.8182 0 25.3636 0ZM25.3636 1.5721C25.5909 1.5721 25.7727 1.61702 25.9545 1.75177L14.6364 8.53428C14.2273 8.75886 13.7727 8.75886 13.3636 8.53428L2.04545 1.75177C2.22727 1.66194 2.40909 1.5721 2.63636 1.5721H25.3636ZM25.3636 17.383H2.63636C2.09091 17.383 1.59091 16.9338 1.59091 16.3499V3.32388L12.5 9.8818C12.9545 10.1513 13.4545 10.2861 13.9545 10.2861C14.4545 10.2861 14.9545 10.1513 15.4091 9.8818L26.3182 3.32388V16.3499C26.4091 16.9338 25.9091 17.383 25.3636 17.383Z" />
                    </svg>
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-base md:text-lg xl:text-xl font-bold text-[#316D69] font-montserrat leading-7 xl:leading-9">
                      Email Address
                    </h4>
                    <p className="text-sm md:text-base xl:text-lg  leading-5 xl:leading-7 text-[#3c3c3c] font-poppins font-normal">
                      info@greeneconomy.ae
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
              <div className="relative p-8 bg-gradient-to-r rounded-lg shadow-lg border sm:p-12 ">
                <form>
                  <ContactInputBox
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                  />
                  <ContactInputBox
                    type="text"
                    name="email"
                    placeholder="Email"
                  />
                  <ContactInputBox
                    type="text"
                    name="phone"
                    placeholder="Contact No."
                  />
                  <ContactTextArea
                    row="6"
                    placeholder="Your Message"
                    name="details"
                    defaultValue=""
                  />
                  <div>
                    <button
                      type="submit"
                      className="py-3 px-5 text-sm md:text-base lg:text-lg   text-[#EFEDD1] bg-[#316D69] font-semibold hover:bg-[#BAB220] transition duration-300 rounded-lg"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
                <div>
                  <span className="absolute -top-10 -right-9  z-[1]">
                    <svg
                      width={100}
                      height={100}
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                        fill="#316D69"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactForm;

const ContactTextArea = ({ row, placeholder, name, defaultValue }) => {
  return (
    <>
      <div className="mb-6">
        <textarea
          rows={row}
          placeholder={placeholder}
          name={name}
          className="border-l-0 border-r-0 border-t-0 border-[#316D69] leading-5 lg:leading-7 w-full resize-none border-b-2 font-montserrat py-3 px-[14px] text-sm md:text-base lg:text-lg  text-[#3c3c3c] outline-none focus:border-primary focus-visible:shadow-none"
          defaultValue={defaultValue}
        />
      </div>
    </>
  );
};

const ContactInputBox = ({ type, placeholder, name }) => {
  return (
    <>
      <div className="mb-6">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          className="border-b-2 border-l-0 border-r-0 border-t-0 leading-5 lg:leading-7 border-[#316D69] font-montserrat w-full py-3 px-[14px] text-sm md:text-base lg:text-lg  text-body-color outline-none "
        />
      </div>
    </>
  );
};
