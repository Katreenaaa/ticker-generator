import Header from "../components/Header";

const Ticket = ({ userData }) => {
  const currentDate = new Date().toLocaleDateString();

  return (
    <div className="flex flex-col items-center min-h-screen bg-[#13072e] text-white pr-2 pl-2 ">
      <Header/>
      <h2 className=" text-2xl xs:text-3xl sm:text-5xl font-bold text-center">
        Congrats, <span className="text-orange-400">{userData.name}!</span><br />
        Your ticket is ready.
      </h2>
      <p className="text-gray-300 mt-4 mb-10  text-center">
        We've emailed your ticket to<br /> {" "}
        <span className="text-orange-400">{userData.email}</span> and will send updates in<br/>
         the run-up to the event.
      </p>

      {/* Ticket Card */}
      <div className="mt-8 relative bg-gradient-to-br from-[#a0a0a0]/40 via-[#c2c2c2]/30 via-[#b39ddb]/25 to-[#c4a2ff]/20 backdrop-blur-2xl backdrop-saturate-150 rounded-xl p-6 shadow-lg max-w-md w-full border-2 border-white/30">





      <div className="absolute top-0 right-[12%] transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-[#13072e] rounded-full border-b-4 border-white/30"></div>


        <div className="flex items-center mb-4">
          {userData.profilePic && (
            <img
              src={userData.profilePic}
              alt="Profile"
              className="w-14 h-14 rounded-full border-2 border-orange-400 mr-4"
            />
          )}
          <div>
            <h3 className="text-xl font-semibold">{userData.name}</h3>
            <a
              href={`https://github.com/${userData.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 text-sm flex items-center gap-1 hover:text-white"
            >
              <img src="https://github.githubassets.com/favicons/favicon-dark.svg" alt="GitHub" className="w-4 h-4" />
              @{userData.github}
            </a>
          </div>
        </div>

        <p className="text-gray-400 text-sm">
          <strong>Event:</strong> Coding Conf
        </p>
        <p className="text-gray-400 text-sm">
          <strong>Date:</strong> Jan 31, 2025 / Austin, TX
        </p>
        <p className="text-gray-400 text-sm">
          <strong>Generated on:</strong> {currentDate}
        </p>
        <div className="absolute bottom-0 right-[12%] transform -translate-x-1/2 translate-y-1/2 w-12 h-12 bg-[#13072e] rounded-full border-t-4 border-white/30"></div>

      </div>
      

    </div>
  );
};

export default Ticket;
