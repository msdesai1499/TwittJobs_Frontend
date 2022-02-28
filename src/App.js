import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import UserLogin from "./components/UserLogin";
import UserRegister from "./components/UserRegister";

import UserHome from "./components/UserHome"
import UserEducationDetail from "./components/UserEducationDetail"
import UserEmploymentDetail from "./components/UserEmploymentDetail"
import UserPortfolioDetail from "./components/UserPortfolioDetail";
import UserSalaryDetail from "./components/UserSalaryDetail";
import UserMedicalDetail from "./components/UserMedicalDetail";
import UserResearchInfoDetail from "./components/UserResearchInfoDetail";
import UserAchievementDetail from "./components/UserAchievementDetail";
import UserCertificationDetail from "./components/UserCertificationDetail";
import UserDocumentDetail from "./components/UserDocumentDetail"
import UserResearchPaperDetail from "./components/UserResearchPaperDetail";
import UserPreferenceDetail from "./components/UserPreferenceDetail";
import UserNotificationDetail from "./components/UserNotificationDetail";
import UserChangePasswordDetail from "./components/UserChangePasswordDetail";
import UserActivatedPlanDetail from "./components/UserActivatedPlanDetail";
import UserUploadResume from "./components/UserUploadResume";
import InstituteRegister from "./components/InstituteRegister";
import InstituteLogin from "./components/InstituteLogin";
import InstituteHome from "./components/InstituteHome";
import InstituteActivatedSubscriptions from "./components/InstituteActivatedSubscriptions";
import InstituteDetails from "./components/InstituteDetails";
import InstituteImageBasket from "./components/InstituteImageBasket";
import InstituteBranch from "./components/InstituteBranch";
import InstituteBranchAdd from "./components/InstituteBranchAdd";
import InstituteContacts from "./components/InstituteContacts";
import InstituteContactsAdd from "./components/InstituteContactsAdd";
const App = () => {
  return (

    <>

      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/userlogin" element={<UserLogin />} />
        <Route path="/userregister" element={<UserRegister />} />

        <Route path="/userhome" element={<UserHome />} />
        <Route path="/usereducation" element={<UserEducationDetail />} />
        <Route path="/useremployment" element={<UserEmploymentDetail />} />
        <Route path="/userportfolio" element={<UserPortfolioDetail />} />
        <Route path="/usersalary" element={<UserSalaryDetail />} />
        <Route path="/usermedical" element={<UserMedicalDetail />} />
        <Route path="/userresearchinfo" element={<UserResearchInfoDetail />} />
        <Route path="/userachievement" element={<UserAchievementDetail />} />
        <Route path="/usercertification" element={<UserCertificationDetail />} />
        <Route path="/userdocument" element={<UserDocumentDetail />} />
        <Route path="/userresearchpaper" element={<UserResearchPaperDetail />} />
        <Route path="/userpreference" element={<UserPreferenceDetail />} />
        <Route path="/usernotification" element={<UserNotificationDetail />} />
        <Route path="/userchangepassword" element={<UserChangePasswordDetail />} />
        <Route path="/useractivatedplan" element={<UserActivatedPlanDetail />} />
        <Route path="/useruploadresume" element={<UserUploadResume />} />
        <Route path="/instituteregister" element={<InstituteRegister />} />
        <Route path="/institutelogin" element={<InstituteLogin />} />
        <Route path="/institutehome" element={<InstituteHome />} />
        <Route path="/instituteactivatedsubscriptions" element={<InstituteActivatedSubscriptions />} />
        <Route path="/institutedetails" element={<InstituteDetails />} />
        <Route path="/instituteimagebasket" element={<InstituteImageBasket />} />
        <Route path="/institutebranch" element={<InstituteBranch />} />
        <Route path="/institutebranchadd" element={<InstituteBranchAdd />} />
        <Route path="/institutecontacts" element={<InstituteContacts />} />
        <Route path="/institutecontactsadd" element={<InstituteContactsAdd />} />

      </Routes>

    </>

  )


}

export default App;