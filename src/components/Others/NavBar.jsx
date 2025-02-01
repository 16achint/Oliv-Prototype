import Button2 from "../Button/Button2";

function NavBar() {
  return (
    <div className="text-black">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center space-x-4 ">
          <img
            className="h-10"
            src="https://cdn.prod.website-files.com/63c3f1995d4c3581bbc944b5/63c3fed42405e70f33df42ee_logo.svg"
            alt="Logo"
          />

          <div className="rounded-full bg-orange-50 px-4 py-2 cursor-pointer">
            <div>we are hiring!</div>
          </div>
        </div>
        <div className="flex justify-between items-center space-x-8 text-black">
          <div>Work</div>
          <div>Service</div>
          <div>About</div>
          <div>Blog</div>
          <div>
            Pages
            <span className="ml-3 cursor-pointer">ˇ</span>
          </div>
          <div>
            Cart
            <span className="rounded-full ml-3 bg-orange-50 border-black px-2 cursor-pointer">
              0
            </span>
          </div>
          <Button2 label={"Get in Touch"} />
        </div>
      </div>
    </div>
  );
}

export default NavBar;
