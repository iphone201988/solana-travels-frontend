import edit_icon from "../../../assets/icons/edit-icon.svg";

export default function ProfileInfo() {
  return (
    <div className=" ">
      <div className="flex items-center justify-between ">
        <div>
          <h2 className="text-2xl font-bold text-blue-900">John Smith</h2>
        </div>
        <button className="">
          <img src={edit_icon} alt="" />
        </button>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6">
        <section>
          <h4 className="text-lg font-bold text-secondary">
            Basic Information
          </h4>

          <div className="mt-4 grid grid-cols-2 gap-4">
            <div>
              <div className=" text-secondary/75 font-semibold">Name</div>
              <div className="mt-1 font-normal text-secondary/75">
                John Smith
              </div>
            </div>

            <div>
              <div className=" text-secondary/75 font-semibold">Bio</div>
              <div className="mt-1 font-normal text-secondary/75">
                Not provided
              </div>
            </div>

            <div>
              <div className=" text-secondary/75 font-semibold">
                Date of birth
              </div>
              <div className="mt-1 font-normal text-secondary/75">
                Nov 24, 2025
              </div>
            </div>

            <div>
              <div className=" text-secondary/75 font-semibold">Gender</div>
              <div className="mt-1 font-normal text-secondary/75">Male</div>
            </div>
          </div>
        </section>

        <section>
          <h4 className="text-lg font-bold text-secondary">
            Contact Information
          </h4>

          <div className="mt-4 grid grid-cols-2 gap-4 ">
            <div>
              <div className=" text-secondary/75 font-semibold">
                Mobile Number
              </div>
              <div className="mt-1 font-normal text-secondary/75">
                8765 435146
              </div>
            </div>

            <div>
              <div className=" text-secondary/75 font-semibold">Email</div>
              <div className="mt-1 font-normal text-secondary/75">
                johnsmith123@gmail.com
              </div>
            </div>

            <div>
              <div className=" text-secondary/75 font-semibold">
                Emergency Contact
              </div>
              <div className="mt-1 font-normal text-secondary/75">
                Not provided
              </div>
            </div>

            <div>
              <div className=" text-secondary/75 font-semibold">Address</div>
              <div className="mt-1 font-normal text-secondary/75">
                Mohali, Chandigarh
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
