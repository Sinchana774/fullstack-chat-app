const AuthLogoPattern = ({ title, subtitle }) => {
    return (
      <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
        <div className="max-w-md text-center">
          <img src="https://res.cloudinary.com/dvfkurhis/image/upload/v1747510468/Echo_fyfbje.png"></img>
          <br/>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-base-content/60">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default AuthLogoPattern;

  
