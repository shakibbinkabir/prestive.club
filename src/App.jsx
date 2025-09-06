export default function App() {
  return (
    <div data-layer="Home" className="Home p-2 sm:p-4 bg-zinc-900 rounded-[110px] inline-flex flex-col justify-start items-start overflow-hidden min-h-screen">
      <div data-layer="Page Wrapper" className="PageWrapper bg-gray-200/40 rounded-[96px] flex flex-col justify-start items-center w-full">
        <div data-layer="Hero" className="Hero w-full max-w-7xl h-[2350px] lg:h-[2350px] md:h-[1800px] sm:h-[1400px] relative rounded-tl-[96px] rounded-tr-[96px] overflow-hidden">
          <img data-layer="image" className="Image w-full h-full left-0 top-0 absolute object-cover" src="/home_hero.png" />
          <div data-layer="overlay" className="Overlay w-full h-full left-0 top-0 absolute opacity-20 bg-zinc-900" />
          <div data-layer="overlay" className="Overlay w-full h-[60%] left-0 bottom-0 absolute opacity-60 bg-gradient-to-t from-black via-black/60 to-black/0" />
          <div data-layer="cursor" className="Cursor w-20 h-20 sm:w-28 sm:h-28 px-3 py-2 sm:px-5 sm:py-2.5 right-4 top-[60%] sm:right-8 lg:left-[1500px] lg:top-[987px] absolute bg-zinc-900 rounded-[500px] inline-flex justify-center items-center gap-8">
            <div data-layer="View" className="View justify-start text-white text-sm sm:text-base font-medium font-['Satoshi_Variable'] uppercase leading-tight tracking-wide">scroll</div>
          </div>
          <div data-layer="Grid" className="Grid left-4 right-4 top-[80px] sm:left-8 sm:right-8 sm:top-[120px] lg:left-[464px] lg:top-[316px] absolute inline-flex flex-col justify-start items-center gap-2 sm:gap-4 px-4">
            <div data-layer="Grid" className="Grid flex flex-col justify-start items-center">
              <div data-layer="A LIFETIME" className="ALifetime justify-start text-white text-4xl sm:text-6xl md:text-8xl lg:text-[160px] font-medium font-['Satoshi_Variable'] uppercase leading-tight sm:leading-[50px] md:leading-[80px] lg:leading-[160px] text-center">A LIFETIME</div>
              <div data-layer="GOLFING" className="Golfing justify-start text-white text-4xl sm:text-6xl md:text-8xl lg:text-[160px] font-normal font-['Zodiak_Variable'] uppercase leading-tight sm:leading-[50px] md:leading-[80px] lg:leading-[160px] text-center">GOLFING</div>
              <div data-layer="EXPERIENCE" className="Experience justify-start text-white text-4xl sm:text-6xl md:text-8xl lg:text-[160px] font-medium font-['Satoshi_Variable'] uppercase leading-tight sm:leading-[50px] md:leading-[80px] lg:leading-[160px] text-center">EXPERIENCE</div>
            </div>
            <div data-layer="Prestive Platinum Membership" className="PrestivePlatinumMembership w-full max-w-[600px] text-center justify-start text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal font-['Satoshi_Variable'] px-4">Prestive Platinum Membership</div>
          </div>
          <div data-layer="Grid" className="Grid left-4 right-4 bottom-[200px] sm:left-8 sm:right-8 sm:bottom-[300px] lg:left-[260px] lg:bottom-[200px] lg:top-[1232px] absolute inline-flex flex-col justify-start items-start gap-8 sm:gap-12 px-4">
            <div data-layer="Grid" className="Grid flex flex-col justify-start items-start gap-16">
              <div data-layer="Presitve Club: The essence of Golf" className="PresitveClubTheEssenceOfGolf w-full max-w-[600px] justify-start text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-['Satoshi_Variable'] leading-tight sm:leading-[50px] md:leading-[60px] lg:leading-[76.80px]">Presitve Club:<br/>The essence<br/>of Golf</div>
            </div>
            <div data-layer="Grid" className="Grid flex flex-col justify-start items-start gap-12">
              <div data-layer="Golf is a timeless game that blends physical skill with mental clarity. It offers a space where strategy and calmness coexist, and where the environment itself becomes part of the challenge. For many, golf is more than competition, it's about patience, discipline, and personal growth. From rolling fairways to quiet greens, it’s a sport that nourishes both body and mind." className="GolfIsATimelessGameThatBlendsPhysicalSkillWithMentalClarityItOffersASpaceWhereStrategyAndCalmnessCoexistAndWhereTheEnvironmentItselfBecomesPartOfTheChallengeForManyGolfIsMoreThanCompetitionItSAboutPatienceDisciplineAndPersonalGrowthFromRollingFairwaysToQuietGreensItSASportThatNourishesBothBodyAndMind w-[600px] justify-start text-white text-3xl font-medium font-['Satoshi_Variable']">Golf is a timeless game that blends physical skill with mental clarity. It offers a space where strategy and calmness coexist, and where the environment itself becomes part of the challenge.<br/><br/>For many, golf is more than competition, it's about patience, discipline, and personal growth. From rolling fairways to quiet greens, it’s a sport that nourishes both body and mind.</div>
              <div data-layer="button-text" data-size="default" data-style="inverse" className="ButtonText inline-flex justify-start items-center gap-6">
                <div data-layer="Button" className="Button justify-start text-white text-xl font-medium font-['Satoshi_Variable'] leading-9">Membership Store</div>
                <div data-layer="icon" className="Icon w-14 h-14 rounded-[200px] outline-1 outline-offset-[-1px] outline-white flex justify-center items-center gap-2.5">
                  <div data-layer="ri:arrow-down-line" className="RiArrowDownLine w-0 h-6 relative origin-top-left -rotate-90">
                    <div data-svg-wrapper data-layer="Vector" className="Vector left-[3.89px] top-[4.29px] absolute">
                      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2284 7.00819L7.79191 1.68764L9.22502 0.285099L17.1081 8.00009L9.22502 15.7151L7.79191 14.3125L13.2284 8.99199H0.891907L0.891907 7.00819H13.2284Z" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-layer="navbar" className="Navbar w-full max-w-7xl left-4 right-4 top-4 sm:left-8 sm:right-8 sm:top-8 lg:left-[160px] lg:top-[80px] absolute inline-flex justify-between items-center px-4 sm:px-0">
            <div data-layer="navbar-left" className="NavbarLeft inline-flex flex-col justify-start items-start gap-2.5">
              <div data-layer="logo" className="Logo h-16 sm:h-20 lg:h-24 inline-flex justify-start items-start gap-[3px]">
                <img data-layer="prestive 1" className="Prestive1 w-auto h-full object-contain" src="/logo.png" />
              </div>
            </div>
            <div data-layer="menu" className="Menu inline-flex flex-col justify-start items-start gap-2.5">
              <div data-layer="navbar-nav" className="NavbarNav px-3 py-2 sm:px-5 sm:py-2.5 bg-zinc-900 rounded-[500px] backdrop-blur-lg inline-flex justify-start items-center gap-2 sm:gap-8 overflow-hidden">
                <div data-layer="inner" className="Inner flex justify-start items-center gap-0.5">
                  <div data-layer="menu" className="Menu flex justify-start items-center">
                    <div data-layer="menu-item" className="MenuItem p-2 sm:p-4 rounded-[100px] flex justify-start items-center gap-0.5">
                      <div data-layer="Projects" className="Projects justify-start text-white text-sm sm:text-base font-medium font-['Satoshi_Variable'] leading-none">Home</div>
                    </div>
                    <div data-layer="menu-item" className="MenuItem p-2 sm:p-4 rounded-[100px] flex justify-start items-start gap-2.5">
                      <div data-layer="About" className="About justify-start text-white text-sm sm:text-base font-medium font-['Satoshi_Variable'] leading-none">Shop</div>
                    </div>
                    <div data-layer="menu-item" className="MenuItem p-2 sm:p-4 rounded-[100px] flex justify-start items-start gap-0.5">
                      <div data-layer="Pages" className="Pages justify-start text-white text-sm sm:text-base font-medium font-['Satoshi_Variable'] leading-none">Contact</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div data-layer="navbar-right" className="NavbarRight flex justify-end items-center gap-2 sm:gap-4">
              <div data-layer="socials" className="Socials flex justify-start items-start gap-2 sm:gap-4">
                <div data-layer="badge" className="Badge w-8 h-8 sm:w-10 sm:h-10 px-2 py-1 sm:px-5 sm:py-2.5 bg-gray-200/40 rounded-[500px] flex justify-center items-center gap-8">
                  <div data-svg-wrapper data-layer="solar:user-bold" className="SolarUserBold relative">
                    <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M9.99996 8.33334C11.8409 8.33334 13.3333 6.84095 13.3333 5.00001C13.3333 3.15906 11.8409 1.66667 9.99996 1.66667C8.15901 1.66667 6.66663 3.15906 6.66663 5.00001C6.66663 6.84095 8.15901 8.33334 9.99996 8.33334Z" fill="#191919"/>
                      <path d="M16.6667 14.5833C16.6667 16.6542 16.6667 18.3333 10 18.3333C3.33337 18.3333 3.33337 16.6542 3.33337 14.5833C3.33337 12.5125 6.31837 10.8333 10 10.8333C13.6817 10.8333 16.6667 12.5125 16.6667 14.5833Z" fill="#191919"/>
                    </svg>
                  </div>
                </div>
                <div data-layer="badge" className="Badge w-8 h-8 sm:w-10 sm:h-10 px-2 py-1 sm:px-5 sm:py-2.5 bg-gray-200/40 rounded-[500px] flex justify-center items-center gap-8">
                  <div data-svg-wrapper data-layer="fluent:cart-16-filled" className="FluentCart16Filled relative">
                    <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3.125 2.5C2.95924 2.5 2.80027 2.56585 2.68306 2.68306C2.56585 2.80027 2.5 2.95924 2.5 3.125C2.5 3.29076 2.56585 3.44973 2.68306 3.56694C2.80027 3.68415 2.95924 3.75 3.125 3.75H3.4325C3.56821 3.75023 3.70016 3.79464 3.80841 3.8765C3.91666 3.95836 3.99531 4.07323 4.0325 4.20375L6.015 11.1413C6.12713 11.5328 6.36368 11.8771 6.68888 12.1223C7.01408 12.3674 7.41025 12.5 7.8175 12.5H13.5287C13.9036 12.5001 14.2698 12.3878 14.5802 12.1777C14.8905 11.9676 15.1308 11.6693 15.27 11.3212L17.1125 6.71375C17.1882 6.52416 17.2164 6.3189 17.1945 6.11591C17.1726 5.91293 17.1013 5.7184 16.9869 5.54932C16.8724 5.38025 16.7183 5.24178 16.538 5.14602C16.3577 5.05026 16.1567 5.00013 15.9525 5H5.56L5.23375 3.86C5.12191 3.46847 4.88564 3.12398 4.56068 2.87862C4.23571 2.63326 3.83969 2.50036 3.4325 2.5H3.125ZM8.125 17.5C8.37123 17.5 8.61505 17.4515 8.84253 17.3573C9.07002 17.263 9.27672 17.1249 9.45083 16.9508C9.62494 16.7767 9.76305 16.57 9.85727 16.3425C9.9515 16.115 10 15.8712 10 15.625C10 15.3788 9.9515 15.135 9.85727 14.9075C9.76305 14.68 9.62494 14.4733 9.45083 14.2992C9.27672 14.1251 9.07002 13.987 8.84253 13.8927C8.61505 13.7985 8.37123 13.75 8.125 13.75C7.62772 13.75 7.15081 13.9475 6.79917 14.2992C6.44754 14.6508 6.25 15.1277 6.25 15.625C6.25 16.1223 6.44754 16.5992 6.79917 16.9508C7.15081 17.3025 7.62772 17.5 8.125 17.5ZM13.125 17.5C13.3712 17.5 13.615 17.4515 13.8425 17.3573C14.07 17.263 14.2767 17.1249 14.4508 16.9508C14.6249 16.7767 14.763 16.57 14.8573 16.3425C14.9515 16.115 15 15.8712 15 15.625C15 15.3788 14.9515 15.135 14.8573 14.9075C14.763 14.68 14.6249 14.4733 14.4508 14.2992C14.2767 14.1251 14.07 13.987 13.8425 13.8927C13.615 13.7985 13.3712 13.75 13.125 13.75C12.6277 13.75 12.1508 13.9475 11.7992 14.2992C11.4475 14.6508 11.25 15.1277 11.25 15.625C11.25 16.1223 11.4475 16.5992 11.7992 16.9508C12.1508 17.3025 12.6277 17.5 13.125 17.5Z" fill="#191919"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div data-layer="Inner" className="Inner self-stretch bg-black/50 flex flex-col justify-start items-center bg-[url('/inner.png')] px-4 sm:px-8">
          <div data-layer="Section Projects" className="SectionProjects flex flex-col justify-start items-start w-full max-w-7xl gap-4 sm:gap-8">
            <div data-layer="Project" className="Project w-full h-[600px] sm:h-[800px] lg:h-[1000px] relative rounded-[48px] sm:rounded-[96px] overflow-hidden">

              <img data-layer="Overlay" className="Overlay w-full h-full left-0 top-0 absolute object-cover" src="/card_1.png" />
              <img data-layer="Image" className="Image w-full h-full left-0 top-0 absolute object-cover opacity-20" src="/card_1_overlay.png" />
              
              <div data-layer="Content" className="Content w-full h-full px-6 sm:px-12 lg:px-28 pt-12 sm:pt-20 lg:pt-28 pb-8 sm:pb-16 lg:pb-24 left-0 top-0 absolute inline-flex flex-col justify-between items-start">
                <div data-layer="Top" className="Top flex flex-col justify-start items-start gap-4 sm:gap-8">
                  <div data-layer="Grid" className="Grid self-stretch flex flex-col justify-start items-start">
                    <div data-layer="INDIVIDUAL" className="Individual justify-start text-white text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-normal font-['Zodiak_Variable'] uppercase leading-tight sm:leading-[60px] md:leading-[80px] lg:leading-[128px]">PERSONAL</div>
                    <div data-layer="GOLFING" className="Golfing justify-start text-white text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium font-['Satoshi_Variable'] uppercase leading-tight sm:leading-[60px] md:leading-[80px] lg:leading-[128px]">GOLFING</div>
                  </div>
                  <div data-layer="Perfect your personal game with unlimited access to our championship courses and professional training to elevate your skills." className="PerfectYourPersonalGameWithUnlimitedAccessToOurChampionshipCoursesAndProfessionalTrainingToElevateYourSkills w-full max-w-[735px] justify-start text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal font-['Satoshi_Variable'] leading-relaxed">Perfect your personal game with unlimited access to our championship courses and professional training to elevate your skills.</div>
                </div>
                <div data-layer="Bottom" className="Bottom self-stretch inline-flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                  <div data-layer="Categories" className="Categories flex flex-wrap justify-start items-start gap-2 sm:gap-4">
                    <div data-layer="label" data-style="border inverse" className="Label px-3 sm:px-4 py-2 sm:py-2.5 rounded-[500px] outline-1 outline-offset-[-1px] outline-white flex justify-start items-start gap-2.5">
                      <div data-layer="Label" className="Label justify-start text-white text-xs sm:text-sm font-medium font-['Satoshi_Variable'] uppercase leading-none tracking-wide">PERSONAL GROWTH</div>
                    </div>
                    <div data-layer="label" data-style="border inverse" className="Label px-3 sm:px-4 py-2 sm:py-2.5 rounded-[500px] outline-1 outline-offset-[-1px] outline-white flex justify-start items-start gap-2.5">
                      <div data-layer="Label" className="Label justify-start text-white text-xs sm:text-sm font-medium font-['Satoshi_Variable'] uppercase leading-none tracking-wide">SKILLS DEVELOPMENT</div>
                    </div>
                  </div>
                  <button data-layer="button" className="Button px-5 sm:px-7 py-3 sm:py-5 bg-gray-200/40 hover:bg-white/60 rounded-[100px] flex justify-center items-center gap-1.5 transition-colors duration-200 cursor-pointer">
                    <div data-layer="SELECT PLAN" className="SelectPlan justify-start text-zinc-900 text-sm sm:text-base font-medium font-['Satoshi_Variable'] uppercase leading-none tracking-wide">SELECT PLAN</div>
                    <div data-svg-wrapper data-layer="solar:login-outline" className="SolarLoginOutline relative">
                      <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2.70825C9.83424 2.70825 9.67527 2.7741 9.55806 2.89131C9.44085 3.00852 9.375 3.16749 9.375 3.33325C9.375 3.49901 9.44085 3.65798 9.55806 3.77519C9.67527 3.8924 9.83424 3.95825 10 3.95825C10.7934 3.95825 11.579 4.11452 12.312 4.41815C13.0451 4.72177 13.7111 5.16679 14.2721 5.72782C14.8331 6.28884 15.2781 6.95486 15.5818 7.68787C15.8854 8.42088 16.0417 9.20652 16.0417 9.99992C16.0417 10.7933 15.8854 11.579 15.5818 12.312C15.2781 13.045 14.8331 13.711 14.2721 14.272C13.7111 14.833 13.0451 15.2781 12.312 15.5817C11.579 15.8853 10.7934 16.0416 10 16.0416C9.83424 16.0416 9.67527 16.1074 9.55806 16.2246C9.44085 16.3419 9.375 16.5008 9.375 16.6666C9.375 16.8323 9.44085 16.9913 9.55806 17.1085C9.67527 17.2257 9.83424 17.2916 10 17.2916C11.9339 17.2916 13.7885 16.5234 15.156 15.1559C16.5234 13.7885 17.2917 11.9338 17.2917 9.99992C17.2917 8.06605 16.5234 6.21138 15.156 4.84393C13.7885 3.47648 11.9339 2.70825 10 2.70825Z" fill="#191919"/>
                        <path d="M8.72504 7.9417C8.61464 7.82322 8.55454 7.66652 8.55739 7.5046C8.56025 7.34268 8.62584 7.18819 8.74036 7.07368C8.85487 6.95917 9.00935 6.89358 9.17127 6.89072C9.33319 6.88787 9.48989 6.94797 9.60837 7.05837L12.1084 9.55837C12.2254 9.67556 12.2912 9.83441 12.2912 10C12.2912 10.1657 12.2254 10.3245 12.1084 10.4417L9.60837 12.9417C9.55115 13.0031 9.48215 13.0524 9.40549 13.0865C9.32882 13.1207 9.24606 13.139 9.16214 13.1405C9.07822 13.142 8.99487 13.1266 8.91704 13.0951C8.83922 13.0637 8.76852 13.0169 8.70918 12.9576C8.64983 12.8982 8.60304 12.8275 8.5716 12.7497C8.54017 12.6719 8.52473 12.5885 8.52621 12.5046C8.52769 12.4207 8.54606 12.3379 8.58022 12.2613C8.61438 12.1846 8.66363 12.1156 8.72504 12.0584L10.1584 10.625H3.33337C3.16761 10.625 3.00864 10.5592 2.89143 10.442C2.77422 10.3248 2.70837 10.1658 2.70837 10C2.70837 9.83427 2.77422 9.6753 2.89143 9.55809C3.00864 9.44088 3.16761 9.37504 3.33337 9.37504H10.1584L8.72504 7.9417Z" fill="#191919"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div data-layer="Project" className="Project w-full h-[600px] sm:h-[800px] lg:h-[1000px] relative bg-slate-400 rounded-[48px] sm:rounded-[96px] overflow-hidden">
              <img data-layer="Image" className="Image w-full h-full left-0 top-0 absolute object-cover" src="/card_2.png" />
              <img data-layer="Overlay" className="Overlay w-full h-full left-0 top-0 absolute opacity-10 object-cover" src="/card_2_overlay.png" />
              <div data-layer="Content" className="Content w-full h-full px-6 sm:px-12 lg:px-28 pt-12 sm:pt-20 lg:pt-28 pb-8 sm:pb-16 lg:pb-24 left-0 top-0 absolute inline-flex flex-col justify-between items-start">
                <div data-layer="Top" className="Top flex flex-col justify-start items-start gap-4 sm:gap-8">
                  <div data-layer="Grid" className="Grid self-stretch flex flex-col justify-start items-start">
                    <div data-layer="HERE, FAMILIES" className="HereFamilies justify-start text-white text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-normal font-['Zodiak_Variable'] uppercase leading-tight sm:leading-[60px] md:leading-[80px] lg:leading-[128px]">HERE, FAMILIES</div>
                    <div data-layer="Swing together" className="SwingTogether justify-start text-white text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium font-['Satoshi_Variable'] uppercase leading-tight sm:leading-[60px] md:leading-[80px] lg:leading-[128px]">Swing together</div>
                  </div>
                  <div data-layer="Create lasting memories as you teach younger generations the values of patience, focus, and strategic thinking on our scenic courses." className="CreateLastingMemoriesAsYouTeachYoungerGenerationsTheValuesOfPatienceFocusAndStrategicThinkingOnOurScenicCourses w-full max-w-[753px] justify-start text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal font-['Satoshi_Variable'] leading-relaxed">Create lasting memories as you teach younger generations the values of patience, focus, and strategic thinking on our scenic courses.</div>
                </div>
                <div data-layer="Bottom" className="Bottom self-stretch inline-flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                  <div data-layer="Categories" className="Categories flex flex-wrap justify-start items-start gap-2 sm:gap-4">
                    <div data-layer="label" data-style="border inverse" className="Label px-3 sm:px-4 py-2 sm:py-2.5 rounded-[500px] outline-1 outline-offset-[-1px] outline-white flex justify-start items-start gap-2.5">
                      <div data-layer="Label" className="Label justify-start text-white text-xs sm:text-sm font-medium font-['Satoshi_Variable'] uppercase leading-none tracking-wide">FAMILY BONDING</div>
                    </div>
                    <div data-layer="label" data-style="border inverse" className="Label px-3 sm:px-4 py-2 sm:py-2.5 rounded-[500px] outline-1 outline-offset-[-1px] outline-white flex justify-start items-start gap-2.5">
                      <div data-layer="Label" className="Label justify-start text-white text-xs sm:text-sm font-medium font-['Satoshi_Variable'] uppercase leading-none tracking-wide">VALUABLE LESSONS</div>
                    </div>
                  </div>
                  <button data-layer="button" className="Button px-5 sm:px-7 py-3 sm:py-5 bg-gray-200/40 hover:bg-white/60 rounded-[100px] flex justify-center items-center gap-1.5 transition-colors duration-200 cursor-pointer">
                    <div data-layer="SELECT PLAN" className="SelectPlan justify-start text-zinc-900 text-sm sm:text-base font-medium font-['Satoshi_Variable'] uppercase leading-none tracking-wide">SELECT PLAN</div>
                    <div data-svg-wrapper data-layer="solar:login-outline" className="SolarLoginOutline relative">
                      <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2.7085C9.83424 2.7085 9.67527 2.77434 9.55806 2.89155C9.44085 3.00876 9.375 3.16774 9.375 3.3335C9.375 3.49926 9.44085 3.65823 9.55806 3.77544C9.67527 3.89265 9.83424 3.9585 10 3.9585C10.7934 3.9585 11.579 4.11477 12.312 4.41839C13.0451 4.72201 13.7111 5.16704 14.2721 5.72806C14.8331 6.28908 15.2781 6.95511 15.5818 7.68812C15.8854 8.42113 16.0417 9.20676 16.0417 10.0002C16.0417 10.7936 15.8854 11.5792 15.5818 12.3122C15.2781 13.0452 14.8331 13.7112 14.2721 14.2723C13.7111 14.8333 13.0451 15.2783 12.312 15.5819C11.579 15.8856 10.7934 16.0418 10 16.0418C9.83424 16.0418 9.67527 16.1077 9.55806 16.2249C9.44085 16.3421 9.375 16.5011 9.375 16.6668C9.375 16.8326 9.44085 16.9916 9.55806 17.1088C9.67527 17.226 9.83424 17.2918 10 17.2918C11.9339 17.2918 13.7885 16.5236 15.156 15.1561C16.5234 13.7887 17.2917 11.934 17.2917 10.0002C17.2917 8.06629 16.5234 6.21163 15.156 4.84418C13.7885 3.47672 11.9339 2.7085 10 2.7085Z" fill="#191919"/>
                        <path d="M8.72504 7.9417C8.61464 7.82322 8.55454 7.66652 8.55739 7.5046C8.56025 7.34268 8.62584 7.18819 8.74036 7.07368C8.85487 6.95917 9.00935 6.89358 9.17127 6.89072C9.33319 6.88787 9.48989 6.94797 9.60837 7.05837L12.1084 9.55837C12.2254 9.67556 12.2912 9.83441 12.2912 10C12.2912 10.1657 12.2254 10.3245 12.1084 10.4417L9.60837 12.9417C9.55115 13.0031 9.48215 13.0524 9.40549 13.0865C9.32882 13.1207 9.24606 13.139 9.16214 13.1405C9.07822 13.142 8.99487 13.1266 8.91704 13.0951C8.83922 13.0637 8.76852 13.0169 8.70918 12.9576C8.64983 12.8982 8.60304 12.8275 8.5716 12.7497C8.54017 12.6719 8.52473 12.5885 8.52621 12.5046C8.52769 12.4207 8.54606 12.3379 8.58022 12.2613C8.61438 12.1846 8.66363 12.1156 8.72504 12.0584L10.1584 10.625H3.33337C3.16761 10.625 3.00864 10.5592 2.89143 10.442C2.77422 10.3248 2.70837 10.1658 2.70837 10C2.70837 9.83427 2.77422 9.6753 2.89143 9.55809C3.00864 9.44088 3.16761 9.37504 3.33337 9.37504H10.1584L8.72504 7.9417Z" fill="#191919"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div data-layer="Project" className="Project w-full h-[600px] sm:h-[800px] lg:h-[1000px] relative bg-slate-400 rounded-[48px] sm:rounded-[96px] overflow-hidden">
              <img data-layer="Image" className="Image w-full h-full left-0 top-0 absolute object-cover" src="/card_3.png" />
              <img data-layer="Overlay" className="Overlay w-full h-full left-0 top-0 absolute opacity-10 object-cover" src="/card_3_overlay.png" />
              <div data-layer="Content" className="Content w-full h-full px-6 sm:px-12 lg:px-28 pt-12 sm:pt-20 lg:pt-28 pb-8 sm:pb-16 lg:pb-24 left-0 top-0 absolute inline-flex flex-col justify-between items-start">
                <div data-layer="Top" className="Top flex flex-col justify-start items-start gap-4 sm:gap-8">
                  <div data-layer="Grid" className="Grid self-stretch flex flex-col justify-start items-start">
                    <div data-layer="BUILD COMMUNITY AT" className="BuildCommunityAt justify-start text-white text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-normal font-['Zodiak_Variable'] uppercase leading-tight sm:leading-[60px] md:leading-[80px] lg:leading-[128px]">BUILD COMMUNITY AT</div>
                    <div data-layer="EVERY GOLF CLUB" className="EveryGolfClub justify-start text-white text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium font-['Satoshi_Variable'] uppercase leading-tight sm:leading-[60px] md:leading-[80px] lg:leading-[128px]">EVERY GOLF CLUB</div>
                  </div>
                  <div data-layer="Strengthen professional relationships and build new connections in the relaxed setting of our exclusive member club environment." className="StrengthenProfessionalRelationshipsAndBuildNewConnectionsInTheRelaxedSettingOfOurExclusiveMemberClubEnvironment w-full max-w-[839px] justify-start text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal font-['Satoshi_Variable'] leading-relaxed">Strengthen professional relationships and build new connections in the relaxed setting of our exclusive member club environment.</div>
                </div>
                <div data-layer="Bottom" className="Bottom self-stretch inline-flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                  <div data-layer="Categories" className="Categories flex flex-wrap justify-start items-start gap-2 sm:gap-4">
                    <div data-layer="label" data-style="border inverse" className="Label px-3 sm:px-4 py-2 sm:py-2.5 rounded-[500px] outline-1 outline-offset-[-1px] outline-white flex justify-start items-start gap-2.5">
                      <div data-layer="Label" className="Label justify-start text-white text-xs sm:text-sm font-medium font-['Satoshi_Variable'] uppercase leading-none tracking-wide">NETWORKING</div>
                    </div>
                    <div data-layer="label" data-style="border inverse" className="Label px-3 sm:px-4 py-2 sm:py-2.5 rounded-[500px] outline-1 outline-offset-[-1px] outline-white flex justify-start items-start gap-2.5">
                      <div data-layer="Label" className="Label justify-start text-white text-xs sm:text-sm font-medium font-['Satoshi_Variable'] uppercase leading-none tracking-wide">RELATIONSHIPS</div>
                    </div>
                  </div>
                  <button data-layer="button" className="Button px-5 sm:px-7 py-3 sm:py-5 bg-gray-200/40 hover:bg-white/60 rounded-[100px] flex justify-center items-center gap-1.5 transition-colors duration-200 cursor-pointer">
                    <div data-layer="SELECT PLAN" className="SelectPlan justify-start text-zinc-900 text-sm sm:text-base font-medium font-['Satoshi_Variable'] uppercase leading-none tracking-wide">SELECT PLAN</div>
                    <div data-svg-wrapper data-layer="solar:login-outline" className="SolarLoginOutline relative">
                      <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2.7085C9.83424 2.7085 9.67527 2.77434 9.55806 2.89155C9.44085 3.00876 9.375 3.16774 9.375 3.3335C9.375 3.49926 9.44085 3.65823 9.55806 3.77544C9.67527 3.89265 9.83424 3.9585 10 3.9585C10.7934 3.9585 11.579 4.11477 12.312 4.41839C13.0451 4.72201 13.7111 5.16704 14.2721 5.72806C14.8331 6.28908 15.2781 6.95511 15.5818 7.68812C15.8854 8.42113 16.0417 9.20676 16.0417 10.0002C16.0417 10.7936 15.8854 11.5792 15.5818 12.3122C15.2781 13.0452 14.8331 13.7112 14.2721 14.2723C13.7111 14.8333 13.0451 15.2783 12.312 15.5819C11.579 15.8856 10.7934 16.0418 10 16.0418C9.83424 16.0418 9.67527 16.1077 9.55806 16.2249C9.44085 16.3421 9.375 16.5011 9.375 16.6668C9.375 16.8326 9.44085 16.9916 9.55806 17.1088C9.67527 17.226 9.83424 17.2918 10 17.2918C11.9339 17.2918 13.7885 16.5236 15.156 15.1561C16.5234 13.7887 17.2917 11.934 17.2917 10.0002C17.2917 8.06629 16.5234 6.21163 15.156 4.84418C13.7885 3.47672 11.9339 2.7085 10 2.7085Z" fill="#191919"/>
                        <path d="M8.72504 7.9417C8.61464 7.82322 8.55454 7.66652 8.55739 7.5046C8.56025 7.34268 8.62584 7.18819 8.74036 7.07368C8.85487 6.95917 9.00935 6.89358 9.17127 6.89072C9.33319 6.88787 9.48989 6.94797 9.60837 7.05837L12.1084 9.55837C12.2254 9.67556 12.2912 9.83441 12.2912 10C12.2912 10.1657 12.2254 10.3245 12.1084 10.4417L9.60837 12.9417C9.55115 13.0031 9.48215 13.0524 9.40549 13.0865C9.32882 13.1207 9.24606 13.139 9.16214 13.1405C9.07822 13.142 8.99487 13.1266 8.91704 13.0951C8.83922 13.0637 8.76852 13.0169 8.70918 12.9576C8.64983 12.8982 8.60304 12.8275 8.5716 12.7497C8.54017 12.6719 8.52473 12.5885 8.52621 12.5046C8.52769 12.4207 8.54606 12.3379 8.58022 12.2613C8.61438 12.1846 8.66363 12.1156 8.72504 12.0584L10.1584 10.625H3.33337C3.16761 10.625 3.00864 10.5592 2.89143 10.442C2.77422 10.3248 2.70837 10.1658 2.70837 10C2.70837 9.83427 2.77422 9.6753 2.89143 9.55809C3.00864 9.44088 3.16761 9.37504 3.33337 9.37504H10.1584L8.72504 7.9417Z" fill="#191919"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div data-layer="Project" className="Project w-full h-[600px] sm:h-[800px] lg:h-[1000px] relative bg-slate-400 rounded-[48px] sm:rounded-[96px] overflow-hidden">
              <img data-layer="Image" className="Image w-full h-full left-0 top-0 absolute object-cover" src="/card_4.png" />
              <img data-layer="Overlay" className="Overlay w-full h-full left-0 top-0 absolute opacity-10 object-cover" src="/card_4_overlay.png" />
              <div data-layer="Content" className="Content w-full h-full px-6 sm:px-12 lg:px-28 pt-12 sm:pt-20 lg:pt-28 pb-8 sm:pb-16 lg:pb-24 left-0 top-0 absolute inline-flex flex-col justify-between items-start">
                <div data-layer="Top" className="Top flex flex-col justify-start items-start gap-4 sm:gap-8">
                  <div data-layer="Grid" className="Grid self-stretch flex flex-col justify-start items-start">
                    <div data-layer="INVEST ONCE," className="InvestOnce justify-start text-white text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-normal font-['Zodiak_Variable'] uppercase leading-tight sm:leading-[60px] md:leading-[80px] lg:leading-[128px]">INVEST ONCE,</div>
                    <div data-layer="EXPERIENCE FOR LIFE" className="ExperienceForLife justify-start text-white text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium font-['Satoshi_Variable'] uppercase leading-tight sm:leading-[60px] md:leading-[80px] lg:leading-[128px]">EXPERIENCE FOR LIFE</div>
                  </div>
                  <div data-layer="Secure your personal sanctuary and a legacy of privileges with a membership that offers a lifetime of unparalleled access and fulfillment." className="SecureYourPersonalSanctuaryAndALegacyOfPrivilegesWithAMembershipThatOffersALifetimeOfUnparalleledAccessAndFulfillment w-full max-w-[839px] justify-start text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal font-['Satoshi_Variable'] leading-relaxed">Secure your personal sanctuary and a legacy of privileges with a membership that offers a lifetime of unparalleled access and fulfillment.</div>
                </div>
                <div data-layer="Bottom" className="Bottom self-stretch inline-flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-0">
                  <div data-layer="Categories" className="Categories flex flex-wrap justify-start items-start gap-2 sm:gap-4">
                    <div data-layer="label" data-style="border inverse" className="Label px-3 sm:px-4 py-2 sm:py-2.5 rounded-[500px] outline-1 outline-offset-[-1px] outline-white flex justify-start items-start gap-2.5">
                      <div data-layer="Label" className="Label justify-start text-white text-xs sm:text-sm font-medium font-['Satoshi_Variable'] uppercase leading-none tracking-wide">LEGACY</div>
                    </div>
                    <div data-layer="label" data-style="border inverse" className="Label px-3 sm:px-4 py-2 sm:py-2.5 rounded-[500px] outline-1 outline-offset-[-1px] outline-white flex justify-start items-start gap-2.5">
                      <div data-layer="Label" className="Label justify-start text-white text-xs sm:text-sm font-medium font-['Satoshi_Variable'] uppercase leading-none tracking-wide">EXCLUSIVITY</div>
                    </div>
                  </div>
                  <button data-layer="button" className="Button px-5 sm:px-7 py-3 sm:py-5 bg-gray-200/40 hover:bg-white/60 rounded-[100px] flex justify-center items-center gap-1.5 transition-colors duration-200 cursor-pointer">
                    <div data-layer="SELECT PLAN" className="SelectPlan justify-start text-zinc-900 text-sm sm:text-base font-medium font-['Satoshi_Variable'] uppercase leading-none tracking-wide">SELECT PLAN</div>
                    <div data-svg-wrapper data-layer="solar:login-outline" className="SolarLoginOutline relative">
                      <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 2.7085C9.83424 2.7085 9.67527 2.77434 9.55806 2.89155C9.44085 3.00876 9.375 3.16774 9.375 3.3335C9.375 3.49926 9.44085 3.65823 9.55806 3.77544C9.67527 3.89265 9.83424 3.9585 10 3.9585C10.7934 3.9585 11.579 4.11477 12.312 4.41839C13.0451 4.72201 13.7111 5.16704 14.2721 5.72806C14.8331 6.28908 15.2781 6.95511 15.5818 7.68812C15.8854 8.42113 16.0417 9.20676 16.0417 10.0002C16.0417 10.7936 15.8854 11.5792 15.5818 12.3122C15.2781 13.0452 14.8331 13.7112 14.2721 14.2723C13.7111 14.8333 13.0451 15.2783 12.312 15.5819C11.579 15.8856 10.7934 16.0418 10 16.0418C9.83424 16.0418 9.67527 16.1077 9.55806 16.2249C9.44085 16.3421 9.375 16.5011 9.375 16.6668C9.375 16.8326 9.44085 16.9916 9.55806 17.1088C9.67527 17.226 9.83424 17.2918 10 17.2918C11.9339 17.2918 13.7885 16.5236 15.156 15.1561C16.5234 13.7887 17.2917 11.934 17.2917 10.0002C17.2917 8.06629 16.5234 6.21163 15.156 4.84418C13.7885 3.47672 11.9339 2.7085 10 2.7085Z" fill="#191919"/>
                        <path d="M8.72504 7.9417C8.61464 7.82322 8.55454 7.66652 8.55739 7.5046C8.56025 7.34268 8.62584 7.18819 8.74036 7.07368C8.85487 6.95917 9.00935 6.89358 9.17127 6.89072C9.33319 6.88787 9.48989 6.94797 9.60837 7.05837L12.1084 9.55837C12.2254 9.67556 12.2912 9.83441 12.2912 10C12.2912 10.1657 12.2254 10.3245 12.1084 10.4417L9.60837 12.9417C9.55115 13.0031 9.48215 13.0524 9.40549 13.0865C9.32882 13.1207 9.24606 13.139 9.16214 13.1405C9.07822 13.142 8.99487 13.1266 8.91704 13.0951C8.83922 13.0637 8.76852 13.0169 8.70918 12.9576C8.64983 12.8982 8.60304 12.8275 8.5716 12.7497C8.54017 12.6719 8.52473 12.5885 8.52621 12.5046C8.52769 12.4207 8.54606 12.3379 8.58022 12.2613C8.61438 12.1846 8.66363 12.1156 8.72504 12.0584L10.1584 10.625H3.33337C3.16761 10.625 3.00864 10.5592 2.89143 10.442C2.77422 10.3248 2.70837 10.1658 2.70837 10C2.70837 9.83427 2.77422 9.6753 2.89143 9.55809C3.00864 9.44088 3.16761 9.37504 3.33337 9.37504H10.1584L8.72504 7.9417Z" fill="#191919"/>
                      </svg>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <div data-layer="Project" className="Project w-full h-[600px] sm:h-[800px] lg:h-[1000px] relative bg-slate-400 rounded-[48px] sm:rounded-[96px] overflow-hidden">
              <img data-layer="Image" className="Image w-full h-full left-0 top-0 absolute object-cover" src="/cta.png" />
              <img data-layer="Overlay" className="Overlay w-full h-full left-0 top-0 absolute opacity-10 object-cover" src="/cta_overlay.png" />
              <div data-layer="container" className="Container w-full max-w-[1000px] px-6 sm:px-12 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 absolute inline-flex flex-col justify-start items-center gap-8 sm:gap-12">
                <div data-layer="Now is the best time to book a Platinum Membership" className="NowIsTheBestTimeToBookAPlatinumMembership w-full text-center justify-start text-white text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-medium font-['Satoshi_Variable'] leading-tight sm:leading-[60px] md:leading-[70px] lg:leading-[105.60px]">Now is the best time to book a Platinum Membership</div>
                <div data-layer="grid" className="Grid self-stretch inline-flex justify-center items-start gap-12">
                  <button data-layer="button" className="Button px-6 py-4 sm:px-7 sm:py-5 bg-white hover:bg-gray-100 rounded-[100px] flex justify-center items-center gap-2.5 transition-colors duration-200 cursor-pointer">
                    <div data-layer="CONTACT US" className="ContactUs justify-start text-zinc-900 text-sm sm:text-base font-medium font-['Satoshi_Variable'] uppercase leading-none tracking-wide">CONTACT US</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div data-layer="Section Stats" className="SectionStats self-stretch min-h-[600px] sm:min-h-[800px] lg:min-h-[971px] pt-24 sm:pt-36 lg:pt-48 px-4 sm:px-8 flex flex-col justify-start items-center">
            <div data-layer="Container" className="Container w-full max-w-[1600px] flex flex-col lg:flex-row justify-start items-start gap-12 lg:gap-24">
              <div data-layer="Left" className="Left w-full lg:flex-1 inline-flex flex-col justify-start items-start gap-8 sm:gap-12">
                <div data-layer="Grid" className="Grid flex flex-col justify-start items-start gap-4">
                  <div data-layer="More Than a Sport, a Lifelong Experience" className="MoreThanASportALifelongExperience w-full max-w-[615px] justify-start text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium font-['Satoshi_Variable'] leading-tight sm:leading-[50px] md:leading-[60px] lg:leading-[76.80px]">More Than a Sport, a Lifelong Experience</div>
                  <div data-layer="Golf is a timeless game that blends physical skill with mental clarity. From rolling fairways to quiet greens, it's a sport that nourishes both body and mind." className="GolfIsATimelessGameThatBlendsPhysicalSkillWithMentalClarityFromRollingFairwaysToQuietGreensItSASportThatNourishesBothBodyAndMind w-full max-w-[511px] justify-start text-white text-lg sm:text-xl font-normal font-['Satoshi_Variable'] leading-relaxed sm:leading-10">Golf is a timeless game that blends physical skill with mental clarity. From rolling fairways to quiet greens, it's a sport that nourishes both body and mind.</div>
                </div>
                <button data-layer="button-text" data-size="default" data-style="default" className="ButtonText inline-flex justify-start items-center gap-4 sm:gap-6 bg-white hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-colors duration-200 cursor-pointer">
                  <div data-layer="Button" className="Button justify-start text-zinc-900 text-lg sm:text-xl font-medium font-['Satoshi_Variable'] leading-9">View Memberships</div>
                  <div data-layer="icon" className="Icon w-10 h-10 sm:w-14 sm:h-14 rounded-[200px] outline-1 outline-offset-[-1px] outline-zinc-900 flex justify-center items-center gap-2.5">
                    <div data-svg-wrapper data-layer="ri:arrow-right-line" className="RiArrowRightLine relative">
                      <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.172 11.0002L10.808 5.63617L12.222 4.22217L20 12.0002L12.222 19.7782L10.808 18.3642L16.172 13.0002H4V11.0002H16.172Z" fill="#191919"/>
                      </svg>
                    </div>
                  </div>
                </button>
              </div>
              <div data-layer="Right" className="Right w-full lg:flex-1 inline-flex flex-col justify-start items-start gap-6 sm:gap-8">
                <div data-layer="Grid" className="Grid w-full grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
                  <div data-layer="Card" className="Card p-6 sm:p-8 lg:p-12 bg-gray-200/20 rounded-2xl inline-flex flex-col justify-start items-start gap-4">
                    <div data-layer="Grid" className="Grid self-stretch flex flex-col justify-start items-start gap-2">
                      <div data-layer="14" className="self-stretch justify-start text-white text-4xl sm:text-5xl font-medium font-['Satoshi_Variable'] leading-tight sm:leading-[62.40px]">14</div>
                      <div data-layer="GOLF ACADEMY CLASSES" className="GolfAcademyClasses self-stretch justify-start text-white text-sm sm:text-base font-medium font-['Satoshi_Variable'] uppercase leading-tight tracking-wide">GOLF ACADEMY CLASSES</div>
                    </div>
                    <div data-layer="Learn essential golf techniques, including swing mechanics, putting skills, and course strategy at the Army Golf Club." className="LearnEssentialGolfTechniquesIncludingSwingMechanicsPuttingSkillsAndCourseStrategyAtTheArmyGolfClub w-full justify-start text-white text-base sm:text-lg font-normal font-['Satoshi_Variable'] leading-relaxed sm:leading-loose">Learn essential golf techniques, including swing mechanics, putting skills, and course strategy at the Army Golf Club.</div>
                  </div>
                  <div data-layer="Card" className="Card p-6 sm:p-8 lg:p-12 bg-gray-200/20 rounded-2xl inline-flex flex-col justify-start items-start gap-4">
                    <div data-layer="Grid" className="Grid self-stretch flex flex-col justify-start items-start gap-2">
                      <div data-layer="8" className="self-stretch justify-start text-white text-4xl sm:text-5xl font-medium font-['Satoshi_Variable'] leading-tight sm:leading-[62.40px]">8</div>
                      <div data-layer="PRIORITY TEE TIMES" className="PriorityTeeTimes self-stretch justify-start text-white text-sm sm:text-base font-medium font-['Satoshi_Variable'] uppercase leading-tight tracking-wide">PRIORITY TEE TIMES</div>
                    </div>
                    <div data-layer="Enjoy preferred access to prime tee times, allowing you to play at your convenience without long waits or scheduling conflicts." className="EnjoyPreferredAccessToPrimeTeeTimesAllowingYouToPlayAtYourConvenienceWithoutLongWaitsOrSchedulingConflicts w-full justify-start text-white text-base sm:text-lg font-normal font-['Satoshi_Variable'] leading-relaxed sm:leading-loose">Enjoy preferred access to prime tee times, allowing you to play at your convenience without long waits or scheduling conflicts.</div>
                  </div>
                  <div data-layer="Card" className="Card p-6 sm:p-8 lg:p-12 bg-gray-200/20 rounded-2xl inline-flex flex-col justify-start items-start gap-4">
                    <div data-layer="Grid" className="Grid self-stretch flex flex-col justify-start items-start gap-2">
                      <div data-layer="3" className="self-stretch justify-start text-white text-4xl sm:text-5xl font-medium font-['Satoshi_Variable'] leading-tight sm:leading-[62.40px]">3</div>
                      <div data-layer="EXCLUSIVE COURSE ACCESS" className="ExclusiveCourseAccess self-stretch justify-start text-white text-sm sm:text-base font-medium font-['Satoshi_Variable'] uppercase leading-tight tracking-wide">EXCLUSIVE COURSE ACCESS</div>
                    </div>
                    <div data-layer="Access restricted areas of our courses and enjoy special playing privileges reserved only for premium members." className="AccessRestrictedAreasOfOurCoursesAndEnjoySpecialPlayingPrivilegesReservedOnlyForPremiumMembers w-full justify-start text-white text-base sm:text-lg font-normal font-['Satoshi_Variable'] leading-relaxed sm:leading-loose">Access restricted areas of our courses and enjoy special playing privileges reserved only for premium members.</div>
                  </div>
                  <div data-layer="Card" className="Card p-6 sm:p-8 lg:p-12 bg-gray-200/20 rounded-2xl inline-flex flex-col justify-start items-start gap-4">
                    <div data-layer="Grid" className="Grid self-stretch flex flex-col justify-start items-start gap-2">
                      <div data-layer="4" className="self-stretch justify-start text-white text-4xl sm:text-5xl font-medium font-['Satoshi_Variable'] leading-tight sm:leading-[62.40px]">4</div>
                      <div data-layer="FAMILY GOLFING EXPERIENCE" className="FamilyGolfingExperience self-stretch justify-start text-white text-sm sm:text-base font-medium font-['Satoshi_Variable'] uppercase leading-tight tracking-wide">FAMILY GOLFING EXPERIENCE</div>
                    </div>
                    <div data-layer="Family members are invited to enjoy a complimentary early morning driving range session on a weekday at Jolshiri Golf Club." className="FamilyMembersAreInvitedToEnjoyAComplimentaryEarlyMorningDrivingRangeSessionOnAWeekdayAtJolshiriGolfClub w-full justify-start text-white text-base sm:text-lg font-normal font-['Satoshi_Variable'] leading-relaxed sm:leading-loose">Family members are invited to enjoy a complimentary early morning driving range session on a weekday at Jolshiri Golf Club.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-layer="Section Story" className="SectionStory w-full max-w-7xl h-[600px] sm:h-[800px] lg:h-[1000px] relative rounded-[48px] sm:rounded-[96px] overflow-hidden mx-4 sm:mx-8">
            <img data-layer="image" className="Image w-full h-full left-0 top-0 absolute object-cover" src="/philosophy.png" />
            <div data-layer="Content" className="Content w-full h-full p-6 sm:p-12 lg:p-36 left-0 top-0 absolute inline-flex flex-col justify-between items-start">
              <div data-layer="Top" className="Top self-stretch flex flex-col justify-start items-start gap-6 sm:gap-8">
                <div data-layer="Grid" className="Grid flex flex-col justify-start items-start">
                  <div data-layer="THE COMPLETE" className="TheComplete justify-start text-white text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-normal font-['Zodiak_Variable'] uppercase leading-tight sm:leading-[60px] md:leading-[80px] lg:leading-[128px]">THE COMPLETE</div>
                  <div data-layer="GOLF EXPERIENCE" className="GolfExperience justify-start text-white text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-medium font-['Satoshi_Variable'] uppercase leading-tight sm:leading-[60px] md:leading-[80px] lg:leading-[128px]">GOLF EXPERIENCE</div>
                </div>
                <div data-layer="Golf at Prestive is more than just a sport - it's a complete lifestyle experience. Our courses offer the perfect environment for family bonding, personal growth, and cultivating lifelong skills. From beginners to seasoned players, our premium facilities elevate every aspect of your golfing journey." className="GolfAtPrestiveIsMoreThanJustASportItSACompleteLifestyleExperienceOurCoursesOfferThePerfectEnvironmentForFamilyBondingPersonalGrowthAndCultivatingLifelongSkillsFromBeginnersToSeasonedPlayersOurPremiumFacilitiesElevateEveryAspectOfYourGolfingJourney w-full max-w-[957px] justify-start text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-normal font-['Satoshi_Variable'] leading-relaxed">Golf at Prestive is more than just a sport - it's a complete lifestyle experience. Our courses offer the perfect environment for family bonding, personal growth, and cultivating lifelong skills. From beginners to seasoned players, our premium facilities elevate every aspect of your golfing journey.</div>
              </div>
              <button data-layer="button-text" data-size="default" data-style="inverse" className="ButtonText inline-flex justify-start items-center gap-4 sm:gap-6 bg-white hover:bg-gray-100 px-6 py-3 sm:px-8 sm:py-4 rounded-full transition-colors duration-200 cursor-pointer">
                <div data-layer="Button" className="Button justify-start text-zinc-900 text-lg sm:text-xl font-medium font-['Satoshi_Variable'] leading-9">Our Philosophy</div>
                <div data-layer="icon" className="Icon w-10 h-10 sm:w-14 sm:h-14 rounded-[200px] outline-1 outline-offset-[-1px] outline-zinc-900 flex justify-center items-center gap-2.5">
                  <div data-layer="ri:arrow-down-line" className="RiArrowDownLine w-0 h-4 sm:h-6 relative origin-top-left -rotate-90">
                    <div data-svg-wrapper data-layer="Vector" className="Vector left-[3.89px] top-[4.28px] absolute">
                      <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.2284 7.00795L7.79191 1.6874L9.22502 0.284855L17.1081 7.99985L9.22502 15.7148L7.79191 14.3123L13.2284 8.99175H0.891907L0.891907 7.00795H13.2284Z" fill="#191919"/>
                      </svg>
                    </div>
                  </div>
                </div>
              </button>
            </div>
          </div>
          <div data-layer="cta-contact" className="CtaContact w-full max-w-7xl py-24 sm:py-36 lg:py-48 px-4 sm:px-8 rounded-bl-[48px] rounded-br-[48px] sm:rounded-bl-[96px] sm:rounded-br-[96px] flex flex-col justify-start items-center gap-2.5 mx-4 sm:mx-8">
            <div data-layer="container" className="Container w-full max-w-[1000px] flex flex-col justify-start items-center gap-8 sm:gap-12">
              <div data-layer="grid" className="Grid self-stretch flex flex-col justify-start items-center gap-4">
                <div data-layer="Contact" className="Contact justify-start text-white text-sm sm:text-base font-medium font-['Satoshi_Variable'] uppercase leading-tight tracking-wide">Contact</div>
                <div data-layer="Now is the best time to book a Platinum Membership" className="NowIsTheBestTimeToBookAPlatinumMembership w-full text-center justify-start text-white text-3xl sm:text-5xl md:text-6xl lg:text-8xl font-medium font-['Satoshi_Variable'] leading-tight sm:leading-[60px] md:leading-[70px] lg:leading-[105.60px]">Now is the best time to book a Platinum Membership</div>
              </div>
              <button data-layer="button" className="Button px-6 py-4 sm:px-7 sm:py-5 bg-white hover:bg-gray-100 rounded-[100px] inline-flex justify-center items-center gap-2.5 transition-colors duration-200 cursor-pointer">
                <div data-layer="Button" className="Button justify-start text-zinc-900 text-sm sm:text-base font-medium font-['Satoshi_Variable'] uppercase leading-none tracking-wide">CONTACT US</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div data-layer="Footer" className="Footer self-stretch pt-20 sm:pt-32 lg:pt-40 pb-8 sm:pb-12 lg:pb-16 bg-black/90 px-4 sm:px-8 flex flex-col justify-start items-center">
        <div data-layer="Container" className="Container w-full max-w-[1600px] flex flex-col lg:flex-row justify-start items-start gap-12 lg:gap-48">
          <div data-layer="Column" className="Column w-full lg:w-96 inline-flex flex-col justify-start items-start gap-12 lg:gap-24">
            <div data-layer="logo" className="Logo inline-flex justify-start items-start gap-[3px]">
              <img data-layer="prestive 1" className="Prestive1 w-32 h-16 sm:w-40 sm:h-20 lg:w-48 lg:h-24 object-contain" src="/foo_logo.png" />
            </div>
            <div data-layer="grid" className="Grid w-full flex flex-col justify-end items-start gap-4 sm:gap-6">
              <div data-layer="grid" className="Grid w-full inline-flex justify-start items-center gap-2.5">
                <div data-svg-wrapper data-layer="proicons:location" className="ProiconsLocation relative flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.8 3.56964C5.91773 2.47426 7.4226 1.86424 8.98757 1.87215C10.5525 1.88005 12.0512 2.50524 13.1578 3.61186C14.2644 4.71847 14.8896 6.2171 14.8975 7.78207C14.9054 9.34704 14.2954 10.8519 13.2 11.9696L10.0605 15.1091C9.7792 15.3904 9.39774 15.5483 9 15.5483C8.60225 15.5483 8.22079 15.3904 7.9395 15.1091L4.8 11.9696C3.68616 10.8557 3.06042 9.34492 3.06042 7.76964C3.06042 6.19436 3.68616 4.68359 4.8 3.56964Z" stroke="white" strokeWidth="1.125" strokeLinejoin="round"/>
                    <path d="M9 10.0195C10.2426 10.0195 11.25 9.01217 11.25 7.76953C11.25 6.52689 10.2426 5.51953 9 5.51953C7.75736 5.51953 6.75 6.52689 6.75 7.76953C6.75 9.01217 7.75736 10.0195 9 10.0195Z" stroke="white" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div data-layer="Codesk, Banani 11, Dhaka-1206" className="CodeskBanani11Dhaka1206 w-full justify-start text-white text-lg sm:text-xl font-medium font-['Satoshi_Variable']">Codesk, Banani 11, Dhaka-1206</div>
              </div>
              <div data-layer="grid" className="Grid w-full inline-flex justify-start items-center gap-2.5">
                <div data-svg-wrapper data-layer="majesticons:mail-line" className="MajesticonsMailLine relative flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.25 6.75L8.0625 9C8.32854 9.21301 8.65919 9.32906 9 9.32906C9.34081 9.32906 9.67146 9.21301 9.9375 9L12.75 6.75M15.75 12.75V5.25C15.75 4.85218 15.592 4.47064 15.3107 4.18934C15.0294 3.90804 14.6478 3.75 14.25 3.75H3.75C3.35218 3.75 2.97064 3.90804 2.68934 4.18934C2.40804 4.47064 2.25 4.85218 2.25 5.25V12.75C2.25 13.1478 2.40804 13.5294 2.68934 13.8107C2.97064 14.092 3.35218 14.25 3.75 14.25H14.25C14.6478 14.25 15.0294 14.092 15.3107 13.8107C15.592 13.5294 15.75 13.1478 15.75 12.75Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div data-layer="contact@prestive.club" className="ContactPrestiveClub w-full justify-start text-white text-lg sm:text-xl font-medium font-['Satoshi_Variable']">contact@prestive.club</div>
              </div>
              <div data-layer="grid" className="Grid w-full inline-flex justify-start items-center gap-2.5">
                <div data-svg-wrapper data-layer="proicons:call" className="ProiconsCall relative flex-shrink-0">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.87175 12.1286C4.2588 10.5126 3.01839 8.56362 2.23725 6.41813C1.8075 5.24513 2.20125 3.95663 3.08475 3.07313L3.6315 2.52713C3.77849 2.37985 3.95308 2.26299 4.14529 2.18327C4.3375 2.10354 4.54354 2.0625 4.75162 2.0625C4.95971 2.0625 5.16575 2.10354 5.35796 2.18327C5.55016 2.26299 5.72476 2.37985 5.87175 2.52713L7.152 3.80738C7.29929 3.95437 7.41614 4.12897 7.49587 4.32117C7.57559 4.51338 7.61663 4.71942 7.61663 4.92751C7.61663 5.13559 7.57559 5.34164 7.49587 5.53384C7.41614 5.72605 7.29929 5.90064 7.152 6.04763L6.837 6.36263C6.71091 6.48869 6.61089 6.63836 6.54265 6.80307C6.47442 6.96779 6.43929 7.14434 6.43929 7.32263C6.43929 7.50093 6.47442 7.67747 6.54265 7.84219C6.61089 8.00691 6.71091 8.15657 6.837 8.28263L9.717 11.1634C9.84306 11.2895 9.99272 11.3895 10.1574 11.4577C10.3222 11.526 10.4987 11.5611 10.677 11.5611C10.8553 11.5611 11.0318 11.526 11.1966 11.4577C11.3613 11.3895 11.5109 11.2895 11.637 11.1634L11.9527 10.8484C12.0997 10.7011 12.2743 10.5842 12.4665 10.5045C12.6587 10.4248 12.8648 10.3838 13.0729 10.3838C13.281 10.3838 13.487 10.4248 13.6792 10.5045C13.8714 10.5842 14.046 10.7011 14.193 10.8484L15.4732 12.1286C15.6205 12.2756 15.7374 12.4502 15.8171 12.6424C15.8968 12.8346 15.9379 13.0407 15.9379 13.2488C15.9379 13.4568 15.8968 13.6629 15.8171 13.8551C15.7374 14.0473 15.6205 14.2219 15.4732 14.3689L14.9272 14.9149C14.0437 15.7991 12.7552 16.1929 11.5822 15.7631C9.43676 14.982 7.48783 13.7416 5.87175 12.1286Z" stroke="white" strokeWidth="1.125" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div data-layer="+880 1841 733838" className="8801841733838 w-full justify-start text-white text-lg sm:text-xl font-medium font-['Satoshi_Variable']">+880 1841 733838</div>
              </div>
            </div>
            <div data-layer="socials" className="Socials inline-flex justify-start items-start gap-4">
              <div data-layer="badge" className="Badge w-10 h-10 px-5 py-2.5 bg-gray-200/40 rounded-[500px] flex justify-center items-center gap-8">
                <div data-svg-wrapper data-layer="ri:twitter-fill" className="RiTwitterFill relative">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.6215 4.24219C16.0489 4.49546 15.4417 4.66179 14.82 4.73569C15.4753 4.34376 15.9658 3.72695 16.2 3.00019C15.585 3.36619 14.9107 3.62269 14.208 3.76144C13.736 3.25637 13.1103 2.92141 12.4282 2.80863C11.7462 2.69584 11.0459 2.81156 10.4364 3.13778C9.82694 3.464 9.34229 3.98245 9.05783 4.61253C8.77338 5.24262 8.70506 5.94902 8.86349 6.62194C7.61632 6.55943 6.39624 6.23533 5.28246 5.67069C4.16868 5.10604 3.18609 4.31347 2.39849 3.34444C2.11971 3.82328 1.97321 4.36761 1.97399 4.92169C1.97399 6.00919 2.52749 6.96994 3.36899 7.53244C2.871 7.51676 2.38397 7.38227 1.94849 7.14019V7.17919C1.94864 7.90346 2.19927 8.6054 2.65788 9.16598C3.11649 9.72657 3.75486 10.1113 4.46474 10.2549C4.00245 10.3802 3.51772 10.3987 3.04724 10.3089C3.24739 10.9324 3.6375 11.4776 4.16294 11.8683C4.68838 12.259 5.32284 12.4755 5.97749 12.4877C5.32685 12.9987 4.58188 13.3764 3.78515 13.5993C2.98843 13.8222 2.15559 13.8859 1.33424 13.7867C2.76802 14.7088 4.43707 15.1983 6.14174 15.1967C11.9115 15.1967 15.0667 10.4169 15.0667 6.27169C15.0667 6.13669 15.063 6.00019 15.057 5.86669C15.6711 5.42281 16.2012 4.87295 16.6222 4.24294L16.6215 4.24219Z" fill="#191919"/>
                  </svg>
                </div>
              </div>
              <div data-layer="badge" className="Badge w-10 h-10 px-5 py-2.5 bg-gray-200/40 rounded-[500px] flex justify-center items-center gap-8">
                <div data-svg-wrapper data-layer="ri:instagram-line" className="RiInstagramLine relative">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 6.75C8.40326 6.75 7.83097 6.98705 7.40901 7.40901C6.98705 7.83097 6.75 8.40326 6.75 9C6.75 9.59674 6.98705 10.169 7.40901 10.591C7.83097 11.0129 8.40326 11.25 9 11.25C9.59674 11.25 10.169 11.0129 10.591 10.591C11.0129 10.169 11.25 9.59674 11.25 9C11.25 8.40326 11.0129 7.83097 10.591 7.40901C10.169 6.98705 9.59674 6.75 9 6.75ZM9 5.25C9.99456 5.25 10.9484 5.64509 11.6517 6.34835C12.3549 7.05161 12.75 8.00544 12.75 9C12.75 9.99456 12.3549 10.9484 11.6517 11.6517C10.9484 12.3549 9.99456 12.75 9 12.75C8.00544 12.75 7.05161 12.3549 6.34835 11.6517C5.64509 10.9484 5.25 9.99456 5.25 9C5.25 8.00544 5.64509 7.05161 6.34835 6.34835C7.05161 5.64509 8.00544 5.25 9 5.25ZM13.875 5.0625C13.875 5.31114 13.7762 5.5496 13.6004 5.72541C13.4246 5.90123 13.1861 6 12.9375 6C12.6889 6 12.4504 5.90123 12.2746 5.72541C12.0988 5.5496 12 5.31114 12 5.0625C12 4.81386 12.0988 4.5754 12.2746 4.39959C12.4504 4.22377 12.6889 4.125 12.9375 4.125C13.1861 4.125 13.4246 4.22377 13.6004 4.39959C13.7762 4.5754 13.875 4.81386 13.875 5.0625ZM9 3C7.1445 3 6.8415 3.00525 5.97825 3.0435C5.39025 3.07125 4.99575 3.15 4.62975 3.2925C4.32346 3.40495 4.04656 3.5852 3.81975 3.81975C3.58501 4.04655 3.40451 4.32344 3.29175 4.62975C3.14925 4.99725 3.0705 5.391 3.0435 5.97825C3.0045 6.80625 3 7.09575 3 9C3 10.8555 3.00525 11.1585 3.0435 12.0217C3.07125 12.609 3.15 13.0043 3.29175 13.3695C3.41925 13.6958 3.56925 13.9305 3.81825 14.1795C4.071 14.4315 4.30575 14.5822 4.62825 14.7067C4.99875 14.85 5.39325 14.9295 5.97825 14.9565C6.80625 14.9955 7.09575 15 9 15C10.8555 15 11.1585 14.9948 12.0217 14.9565C12.6082 14.9288 13.0035 14.85 13.3695 14.7083C13.6753 14.5952 13.9521 14.4154 14.1795 14.1818C14.4323 13.929 14.583 13.6943 14.7075 13.3717C14.85 13.002 14.9295 12.6067 14.9565 12.0217C14.9955 11.1937 15 10.9043 15 9C15 7.1445 14.9948 6.8415 14.9565 5.97825C14.9288 5.39175 14.85 4.99575 14.7075 4.62975C14.5945 4.32375 14.4143 4.04697 14.1803 3.81975C13.9536 3.58488 13.6766 3.40438 13.3702 3.29175C13.0027 3.14925 12.6082 3.0705 12.0217 3.0435C11.1937 3.0045 10.9043 3 9 3ZM9 1.5C11.0378 1.5 11.292 1.5075 12.0915 1.545C12.8903 1.5825 13.434 1.70775 13.9125 1.89375C14.4075 2.08425 14.8245 2.34225 15.2415 2.7585C15.6229 3.13342 15.918 3.58694 16.1063 4.0875C16.2915 4.56525 16.4175 5.10975 16.455 5.9085C16.4903 6.708 16.5 6.96225 16.5 9C16.5 11.0378 16.4925 11.292 16.455 12.0915C16.4175 12.8903 16.2915 13.434 16.1063 13.9125C15.9185 14.4133 15.6233 14.867 15.2415 15.2415C14.8665 15.6227 14.413 15.9178 13.9125 16.1063C13.4347 16.2915 12.8903 16.4175 12.0915 16.455C11.292 16.4903 11.0378 16.5 9 16.5C6.96225 16.5 6.708 16.4925 5.9085 16.455C5.10975 16.4175 4.566 16.2915 4.0875 16.1063C3.58674 15.9184 3.13315 15.6232 2.7585 15.2415C2.37705 14.8666 2.08195 14.4131 1.89375 13.9125C1.70775 13.4347 1.5825 12.8903 1.545 12.0915C1.50975 11.292 1.5 11.0378 1.5 9C1.5 6.96225 1.5075 6.708 1.545 5.9085C1.5825 5.109 1.70775 4.566 1.89375 4.0875C2.08143 3.58663 2.3766 3.13299 2.7585 2.7585C3.13325 2.37692 3.58682 2.0818 4.0875 1.89375C4.566 1.70775 5.109 1.5825 5.9085 1.545C6.708 1.50975 6.96225 1.5 9 1.5Z" fill="#191919"/>
                  </svg>
                </div>
              </div>
              <div data-layer="badge" className="Badge w-10 h-10 px-5 py-2.5 bg-gray-200/40 rounded-[500px] flex justify-center items-center gap-8">
                <div data-svg-wrapper data-layer="ri:facebook-circle-fill" className="RiFacebookCircleFill relative">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 1.5C4.85775 1.5 1.5 4.85775 1.5 9C1.5 12.7432 4.24275 15.846 7.8285 16.4093V11.1675H5.9235V9H7.8285V7.34775C7.8285 5.46825 8.9475 4.43025 10.6613 4.43025C11.4818 4.43025 12.3397 4.5765 12.3397 4.5765V6.4215H11.3947C10.4625 6.4215 10.1722 6.99975 10.1722 7.593V9H12.252L11.9198 11.1675H10.1722V16.4093C13.7572 15.8468 16.5 12.7425 16.5 9C16.5 4.85775 13.1423 1.5 9 1.5Z" fill="#191919"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div data-layer="Menu" className="Menu flex-1 flex justify-start items-start gap-28">
            <div data-layer="Column" className="Column flex-1 inline-flex flex-col justify-start items-start gap-8">
              <div data-layer="Pages" className="Pages justify-start text-white text-base font-medium font-['Satoshi_Variable'] uppercase leading-tight tracking-wide">Pages</div>
              <div data-layer="nav" className="Nav self-stretch flex flex-col justify-start items-start gap-4">
                <div data-layer="Home" className="Home self-stretch justify-start text-white text-lg font-normal font-['Satoshi_Variable'] leading-loose">Home</div>
                <div data-layer="Memberships" className="Memberships self-stretch justify-start text-white text-lg font-normal font-['Satoshi_Variable'] leading-loose">Memberships</div>
                <div data-layer="About" className="About self-stretch justify-start text-white text-lg font-normal font-['Satoshi_Variable'] leading-loose">About</div>
                <div data-layer="Contact" className="Contact self-stretch justify-start text-white text-lg font-normal font-['Satoshi_Variable'] leading-loose">Contact</div>
              </div>
            </div>
            <div data-layer="Column" className="Column flex-1 inline-flex flex-col justify-start items-start gap-8">
              <div data-layer="utility Pages" className="UtilityPages justify-start text-white text-base font-medium font-['Satoshi_Variable'] uppercase leading-tight tracking-wide">utility Pages</div>
              <div data-layer="nav" className="Nav self-stretch flex flex-col justify-start items-start gap-4">
                <div data-layer="Admin Panel" className="AdminPanel self-stretch justify-start text-white text-lg font-normal font-['Satoshi_Variable'] leading-loose">Admin Panel</div>
                <div data-layer="Terms & Conditions" className="TermsConditions self-stretch justify-start text-white text-lg font-normal font-['Satoshi_Variable'] leading-loose">Terms & Conditions</div>
                <div data-layer="Privacy Policy" className="PrivacyPolicy self-stretch justify-start text-white text-lg font-normal font-['Satoshi_Variable'] leading-loose">Privacy Policy</div>
              </div>
            </div>
          </div>
        </div>
        <div data-layer="Bottom" className="Bottom self-stretch pt-24 flex flex-col justify-start items-center gap-4">
          <div data-layer="© 2025 PRESTIVE. All Rights Reserved." className="2025PrestiveAllRightsReserved justify-start text-white text-base font-normal font-['Satoshi_Variable'] leading-7">© 2025 PRESTIVE. All Rights Reserved.</div>
        </div>
      </div>
    </div>
  )
}
