import React, { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar"
import Home from "./components/Home";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
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
import InstituteCourses from "./components/InstituteCourses";
import InstituteJobPosting from "./components/InstituteJobPosting";
import InstituteJobPostingAdd from "./components/InstituteJobPostingAdd";
import InstitutePostingResult from "./components/InstitutePostingResult";
import InstituteEmailStatus from "./components/InstituteEmailStatus";
import InstituteJobApplyReports from "./components/InstituteJobApplyReports";
import InstituteUserReports from "./components/InstituteUserReports";
import InstituteExportedReports from "./components/InstituteExportedReports";
import AdminManageUser from "./components/AdminManageUser";
import AdminManageUserAdd from "./components/AdminManageUserAdd";
import AdminInstituteCategory from "./components/AdminInstituteCategory"
import AdminInstituteCategoryAdd from "./components/AdminInstituteCategoryAdd"
import AdminInstituteDetails from "./components/AdminInstituteDetails"
import AdminInstituteDetailsAdd from "./components/AdminInstituteDetailsAdd"
import AdminInstituteFileImport from "./components/AdminInstituteFileImport"
import AdminInstituteFileImportAdd from "./components/AdminInstituteFileImportAdd"
import AdminPostingResult from "./components/AdminPostingResult"
import AdminProposalManagement from "./components/AdminProposalManagement"
import AdminProposalManagementAdd from "./components/AdminProposalManagementAdd"
import AdminNews from "./components/AdminNews"
import AdminNewsAdd from "./components/AdminNewsAdd"
import AdminInquiryStandards from "./components/AdminInquiryStandards"
import AdminInquiryStandardsAdd from "./components/AdminInquiryStandardsAdd"
import AdminInquiryManagement from "./components/AdminInquiryManagement"


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
        <Route path="/contactus" element={<ContactUs />} />

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
        <Route path="/institutecourses" element={<InstituteCourses />} />
        <Route path="/institutejobposting" element={<InstituteJobPosting />} />
        <Route path="/institutejobpostingadd" element={<InstituteJobPostingAdd />} />
        <Route path="/institutepostingresult" element={<InstitutePostingResult />} />
        <Route path="/instituteemailstatus" element={<InstituteEmailStatus />} />
        <Route path="/institutejobapplyreports" element={<InstituteJobApplyReports />} />
        <Route path="/instituteuserreports" element={<InstituteUserReports />} />
        <Route path="/instituteexportedreports" element={<InstituteExportedReports />} />
        <Route path="/adminmanageuser" element={<AdminManageUser />} />
        <Route path="/adminmanageuseradd" element={<AdminManageUserAdd />} />
        <Route path="/admininstitutecategory" element={<AdminInstituteCategory />} />
        <Route path="/admininstitutecategoryadd" element={<AdminInstituteCategoryAdd />} />
        <Route path="/admininstitutedetails" element={<AdminInstituteDetails />} />
        <Route path="/admininstitutedetailsadd" element={<AdminInstituteDetailsAdd />} />
        <Route path="/admininstitutefileimport" element={<AdminInstituteFileImport />} />
        <Route path="/admininstitutefileimportadd" element={<AdminInstituteFileImportAdd />} />
        <Route path="/adminpostingresult" element={<AdminPostingResult />} />
        <Route path="/adminproposalmanagement" element={<AdminProposalManagement />} />
        <Route path="/adminproposalmanagementadd" element={<AdminProposalManagementAdd />} />
        <Route path="/adminnews" element={<AdminNews />} />
        <Route path="/adminnewsadd" element={<AdminNewsAdd />} />
        <Route path="/admininquirystandards" element={<AdminInquiryStandards />} />
        <Route path="/admininquirystandardsadd" element={<AdminInquiryStandardsAdd />} />
        <Route path="/admininquirymanagement" element={<AdminInquiryManagement />} />



      </Routes>

    </>

  )


}

export default App;