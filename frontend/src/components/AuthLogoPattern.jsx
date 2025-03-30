const AuthLogoPattern = ({ title, subtitle }) => {
    return (
      <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
        <div className="max-w-md text-center">
          <img src="https://media-hosting.imagekit.io//3081c88fcaa44309/Echo.png?Expires=1836833620&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=KvE9Bm6sCoPtZ-eMDpKuZb1ax6hp63NDVUB4UHeLIO8rGNbF-NMXEc9OZgXiyF9iR0zDMoiBfT8coiTO71iCBbKqyVIv2FMXp0csbXP83GT1xSpP~8El5UoVdDBOo2ZqVOTGwjkSdgV7gBqEE-Qf8UB1yzJsxEPWnnOQkI0Hk4Te~HtPf2tpKLii71LAyT5ugLR7v0lMzAz6A~6wmQ0JyItufusIOh7nD~TebcJxJArNeNEvTZXHZHIIe9ZQRblyVHE0KNezRDf31hm7V16Y9WjeppmulTMQCzZ~2jYbcHoGw8m4GQgTfIIUgfuU3Qqtafuqk3Y2--Jwb9QVeM2Apg__"></img>
          <br/>
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <p className="text-base-content/60">{subtitle}</p>
        </div>
      </div>
    );
  };
  
  export default AuthLogoPattern;

  