(this["webpackJsonpjobby-app"]=this["webpackJsonpjobby-app"]||[]).push([[0],{37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},47:function(e,t,a){},48:function(e,t,a){},67:function(e,t,a){},68:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var s=a(2),n=a.n(s),c=a(29),i=a.n(c),r=a(6),o=(a(37),a(4)),l=a(12),j=a(13),b=a(14),m=a(16),d=(a(38),a(7)),p=a.n(d),u=a(15),h=a(22),O=a(17),x=(a(39),a(1)),g=Object(o.g)((function(e){var t=function(){var t=e.history;p.a.remove("jwt_token"),t.replace("/login")};return Object(x.jsx)("nav",{className:"header-container",children:Object(x.jsxs)("div",{className:"navbar-responsive",children:[Object(x.jsx)(r.b,{to:"/",className:"nav-link",children:Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/logo-img.png",alt:"website logo",className:"nav-logo"})}),Object(x.jsxs)("ul",{className:"nav-menu-lg",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(r.b,{to:"/",className:"nav-link",children:"Home"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(r.b,{to:"/jobs",className:"nav-link",children:"Jobs"})})]}),Object(x.jsxs)("ul",{className:"nav-menu-sm",children:[Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(r.b,{to:"/",className:"nav-link",children:Object(x.jsx)(u.a,{className:"nav-menu-icon"})})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(r.b,{to:"/jobs",className:"nav-link",children:Object(x.jsx)(O.a,{className:"nav-menu-icon"})})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)(r.b,{to:"/login",className:"nav-link",onClick:t,children:Object(x.jsx)(h.b,{className:"nav-menu-icon"})})})]}),Object(x.jsx)(r.b,{to:"/login",className:"nav-btn-link",onClick:t,children:Object(x.jsx)("button",{type:"submit",className:"nav-btn",children:"Logout"})})]})})})),f=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g,{}),Object(x.jsx)("div",{className:"home-container",children:Object(x.jsxs)("div",{className:"home-content",children:[Object(x.jsx)("h1",{className:"home-title",children:"Find The Job That Fits Your Life"}),Object(x.jsx)("p",{className:"home-description",children:"Millions of people are searching for jobs, salary information, company reviews. Find the job that fits your abilities and potential."}),Object(x.jsx)(r.b,{to:"/jobs",className:"find-jobs-link",children:Object(x.jsx)("button",{className:"find-jobs-btn",type:"button",children:"Find Jobs"})})]})})]})}}]),a}(s.Component),N=f,v=a(18),y=a(11),w=a.n(y),S=(a(47),function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={username:"",password:"",showErrorMsg:!1,errorMsg:""},e.onSubmitFailure=function(t){var a=e.props.history;e.setState({showErrorMsg:!0,errorMsg:t}),a.replace("/login")},e.onChangeUsername=function(t){e.setState({username:t.target.value})},e.onChangePassword=function(t){e.setState({password:t.target.value})},e.onSubmitSuccess=function(t){var a=e.props.history;p.a.set("jwt_token",t,{expires:30,path:"/"}),a.replace("/")},e.onSubmitForm=function(){var t=Object(v.a)(w.a.mark((function t(a){var s,n,c,i,r,o,l;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({errorMsg:""}),a.preventDefault(),s=e.state,n=s.username,c=s.password,i={username:n,password:c},"https://apis.ccbp.in/login",r={method:"POST",body:JSON.stringify(i)},t.next=8,fetch("https://apis.ccbp.in/login",r);case 8:return o=t.sent,t.next=11,o.json();case 11:l=t.sent,!0===o.ok?e.onSubmitSuccess(l.jwt_token):e.onSubmitFailure(l.error_msg);case 13:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.history;void 0===p.a.get("jwt_token")?e.replace("/login"):e.replace("/")}},{key:"render",value:function(){var e=this.state,t=e.showErrorMsg,a=e.errorMsg,s=e.username,n=e.password;return void 0!==p.a.get("jwt_token")?Object(x.jsx)(o.a,{to:"/"}):Object(x.jsx)("div",{className:"login-container",children:Object(x.jsx)("form",{className:"form-container",onSubmit:this.onSubmitForm,children:Object(x.jsxs)("div",{className:"form-responsive",children:[Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/logo-img.png",alt:"website logo",className:"website-logo"}),Object(x.jsxs)("div",{className:"input-container",children:[Object(x.jsx)("label",{className:"input-label",htmlFor:"username",children:"USERNAME"}),Object(x.jsx)("input",{type:"text",className:"input",id:"username",placeholder:"Username",value:s,onChange:this.onChangeUsername})]}),Object(x.jsxs)("div",{className:"input-container",children:[Object(x.jsx)("label",{className:"input-label",htmlFor:"password",children:"PASSWORD"}),Object(x.jsx)("input",{type:"password",className:"input",id:"password",placeholder:"Password",value:n,onChange:this.onChangePassword})]}),Object(x.jsx)("button",{className:"login-btn",type:"submit",children:"Login"}),t&&Object(x.jsxs)("p",{className:"error-msg",children:["*",a]})]})})})}}]),a}(s.Component)),k=S,I=a(31),_=(a(48),a(23)),T=a.n(_),A=(a(67),a(20)),J=function(e){var t=e.job,a=t.id,s=t.title,n=t.jobDescription,c=t.location,i=t.packagePerAnnum,o=t.companyLogoUrl,l=t.employmentType,j=t.rating;return Object(x.jsx)(r.b,{to:"/jobs/".concat(a),className:"item-link",children:Object(x.jsxs)("li",{className:"job-container",children:[Object(x.jsxs)("div",{className:"job-header",children:[Object(x.jsx)("img",{src:o,alt:"job details company logo",className:"company-logo"}),Object(x.jsxs)("div",{className:"job-header-content",children:[Object(x.jsx)("h1",{className:"job-header-title",children:s}),Object(x.jsxs)("div",{className:"rating-container",children:[Object(x.jsx)(u.b,{className:"star-icon"}),Object(x.jsx)("p",{className:"job-rating",children:j})]})]})]}),Object(x.jsxs)("div",{className:"job-details",children:[Object(x.jsxs)("div",{className:"job-details-content",children:[Object(x.jsxs)("div",{className:"job-card-tag",children:[Object(x.jsx)(A.a,{className:"job-details-icon"}),Object(x.jsx)("p",{children:c})]}),Object(x.jsxs)("div",{className:"job-card-tag",children:[Object(x.jsx)(O.a,{className:"job-details-icon"}),Object(x.jsx)("p",{children:l})]})]}),Object(x.jsx)("p",{className:"job-package",children:i})]}),Object(x.jsx)("hr",{className:"hr-divider"}),Object(x.jsx)("h1",{className:"job-item-title",children:"Description"}),Object(x.jsx)("p",{className:"job-header-description",children:n})]})})},C=[{label:"Full Time",employmentTypeId:"FULLTIME"},{label:"Part Time",employmentTypeId:"PARTTIME"},{label:"Freelance",employmentTypeId:"FREELANCE"},{label:"Internship",employmentTypeId:"INTERNSHIP"}],F=[{salaryRangeId:"1000000",label:"10 LPA and above"},{salaryRangeId:"2000000",label:"20 LPA and above"},{salaryRangeId:"3000000",label:"30 LPA and above"},{salaryRangeId:"4000000",label:"40 LPA and above"}],D="INITIAL",V="SUCCESS",L="FAILURE",R="IN_PROGRESS",P=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={profile:{},profileApiStatus:D,jobsList:[],jobsApiStatus:D,employmentType:[],salaryRange:0,searchInput:""},e.renderLoadingView=function(){return Object(x.jsx)("div",{className:"loader-container",testid:"loader",children:Object(x.jsx)(T.a,{type:"ThreeDots",color:"#fff",height:"80",width:"80"})})},e.getJobs=Object(v.a)(w.a.mark((function t(){var a,s,n,c,i,r,o,l,j,b,m,d;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({jobsApiStatus:R}),a=e.state,s=a.employmentType,n=a.salaryRange,c=a.searchInput,i=s.join(","),r="https://apis.ccbp.in/jobs?employment_type=".concat(i,"&minimum_package=").concat(n,"&search=").concat(c),o=p.a.get("jwt_token"),l={method:"GET",headers:{Authorization:"Bearer ".concat(o)}},t.next=8,fetch(r,l);case 8:return j=t.sent,t.next=11,j.json();case 11:b=t.sent,j.ok?(m=b.jobs,d=m.map((function(e){return{id:e.id,title:e.title,jobDescription:e.job_description,location:e.location,packagePerAnnum:e.package_per_annum,companyLogoUrl:e.company_logo_url,employmentType:e.employment_type,rating:e.rating}})),e.setState({jobsApiStatus:V,jobsList:d})):e.setState({jobsApiStatus:L});case 13:case"end":return t.stop()}}),t)}))),e.getProfileData=Object(v.a)(w.a.mark((function t(){var a,s,n,c,i,r;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({profileApiStatus:R}),a=p.a.get("jwt_token"),"https://apis.ccbp.in/profile",s={headers:{Authorization:"Bearer ".concat(a)},method:"GET"},t.next=6,fetch("https://apis.ccbp.in/profile",s);case 6:return n=t.sent,t.next=9,n.json();case 9:c=t.sent,n.ok?(i=c.profile_details,r={name:i.name,profileImageUrl:i.profile_image_url,shortBio:i.short_bio},e.setState({profileApiStatus:V,profile:r})):e.setState({profileApiStatus:L});case 11:case"end":return t.stop()}}),t)}))),e.onSearchChange=function(t){e.setState({searchInput:t.target.value})},e.onClickSearch=function(){e.getJobs()},e.renderJobsSuccessView=function(){var t=e.state.jobsList;return 0===t.length?e.renderNoJobsView():Object(x.jsx)("ul",{className:"all-jobs-container",children:t.map((function(e){return Object(x.jsx)(J,{job:e},e.id)}))})},e.onEmploymentTypeChange=function(t){var a=e.state.employmentType;if(a.includes(t.target.value)){var s=a.filter((function(e){return e!==t.target.value&&e}));e.setState({employmentType:s},e.getJobs)}else{var n=a.filter((function(e){return e!==t.target.value}));e.setState({employmentType:[].concat(Object(I.a)(n),[t.target.value])},e.getJobs)}},e.onSalaryRangeChange=function(t){var a=parseInt(t.target.value);e.setState({salaryRange:a},e.getJobs)},e.renderProfileSuccessView=function(){var t=e.state.profile,a=t.name,s=t.profileImageUrl,n=t.shortBio;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("div",{className:"profile-container",children:[Object(x.jsx)("img",{className:"profile-image",src:s,alt:"profile img"}),Object(x.jsx)("h1",{className:"profile-name",children:a}),Object(x.jsx)("p",{className:"profile-short-bio",children:n})]}),Object(x.jsx)("hr",{className:"hr-divider"})]})},e.renderTypeOfEmployment=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"filter-container",children:[Object(x.jsx)("h1",{className:"filter-title",children:"Type of Employment"}),C.map((function(t){return Object(x.jsxs)("div",{className:"filter-option-container",children:[Object(x.jsx)("input",{className:"filter-input",type:"checkbox",value:t.employmentTypeId,onClick:e.onEmploymentTypeChange}),Object(x.jsx)("label",{htmlFor:t.employmentTypeId,children:t.label})]},t.employmentTypeId)})),Object(x.jsx)("hr",{className:"hr-divider"})]})})},e.renderSalaryRangeView=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"filter-container",children:[Object(x.jsx)("h1",{className:"filter-title",children:"Salary Range"}),F.map((function(t){return Object(x.jsxs)("div",{className:"filter-option-container",children:[Object(x.jsx)("input",{className:"filter-input",type:"radio",name:"salary-range",value:parseInt(t.salaryRangeId),onClick:e.onSalaryRangeChange}),Object(x.jsx)("label",{htmlFor:t.salaryRangeId,children:t.label})]},t.salaryRangeId)})),Object(x.jsx)("hr",{className:"hr-divider"})]})})},e.renderProfileFailureView=function(){return Object(x.jsx)("div",{className:"profile-failure-view",children:Object(x.jsx)("button",{className:"retry-btn",type:"button",onClick:e.getProfileData,children:"Retry"})})},e.renderJobsFailureView=function(){return Object(x.jsx)("div",{className:"jobs-failure-view",children:Object(x.jsxs)("div",{className:"failure-container",children:[Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/failure-img.png",className:"failure-image",alt:"failure view"}),Object(x.jsx)("h1",{className:"failure-title",children:"Oops! Something Went Wrong"}),Object(x.jsx)("p",{className:"failure-description",children:"We cannot seem to find the page you are looking for"}),Object(x.jsx)("button",{className:"retry-btn",type:"button",onClick:e.getJobs,children:"Retry"})]})})},e.renderNoJobsView=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("div",{className:"failure-container",children:[Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/no-jobs-img.png",className:"failure-image",alt:"no jobs"}),Object(x.jsx)("h1",{className:"failure-title",children:"No Jobs Found"}),Object(x.jsx)("p",{className:"failure-description",children:"We could not find any jobs, Try other filters"})]})})},e.renderJobsView=function(){switch(e.state.jobsApiStatus){case V:return e.renderJobsSuccessView();case L:return e.renderJobsFailureView();case R:return e.renderLoadingView();default:return null}},e.renderProfileView=function(){switch(e.state.profileApiStatus){case V:return e.renderProfileSuccessView();case L:return e.renderProfileFailureView();case R:return e.renderLoadingView();default:return null}},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getJobs(),this.getProfileData()}},{key:"render",value:function(){var e=this.state.searchInput;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g,{}),Object(x.jsx)("div",{className:"jobs-container",children:Object(x.jsxs)("div",{className:"jobs-responsive",children:[Object(x.jsxs)("div",{className:"jobs-sidebar",children:[this.renderProfileView(),this.renderTypeOfEmployment(),this.renderSalaryRangeView()]}),Object(x.jsxs)("div",{className:"jobs",children:[Object(x.jsxs)("div",{className:"search-container",children:[Object(x.jsx)("input",{className:"search-input",placeholder:"Search",type:"search",value:e,onChange:this.onSearchChange}),Object(x.jsx)("button",{className:"search-icon-btn",type:"button",testid:"searchButton",onClick:this.onClickSearch,children:Object(x.jsx)(u.c,{className:"search-icon"})})]}),this.renderJobsView()]})]})})]})}}]),a}(s.Component),E=P,U=(a(68),function(e){var t=e.similarJob,a=t.title,s=t.jobDescription,n=t.location,c=t.rating,i=t.companyLogoUrl,r=t.employeeType;return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)("li",{className:"job-card job-container",children:[Object(x.jsxs)("div",{className:"job-header",children:[Object(x.jsx)("img",{src:i,alt:"similar job company logo",className:"company-logo"}),Object(x.jsxs)("div",{className:"job-header-content",children:[Object(x.jsx)("h1",{className:"job-header-title",children:a}),Object(x.jsxs)("div",{className:"rating-container",children:[Object(x.jsx)(u.b,{className:"star-icon"}),Object(x.jsx)("p",{className:"job-rating",children:c})]})]})]}),Object(x.jsx)("h1",{className:"job-item-title",children:"Description"}),Object(x.jsx)("p",{className:"job-header-description",children:s}),Object(x.jsx)("div",{className:"job-details",children:Object(x.jsxs)("div",{className:"job-details-content",children:[Object(x.jsxs)("div",{className:"job-card-tag",children:[Object(x.jsx)(A.a,{className:"job-details-icon"}),Object(x.jsx)("p",{children:n})]}),Object(x.jsxs)("div",{className:"job-card-tag",children:[Object(x.jsx)(O.a,{className:"job-details-icon"}),Object(x.jsx)("p",{children:r})]})]})})]})})}),M=(a(69),a(70),"INITIAL"),W="SUCCESS",B="FAILURE",G="IN_PROGRESS",z=function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(l.a)(this,a);for(var s=arguments.length,n=new Array(s),c=0;c<s;c++)n[c]=arguments[c];return(e=t.call.apply(t,[this].concat(n))).state={jobData:[],jobItemDetailsApiStatus:M},e.getJobDetails=Object(v.a)(w.a.mark((function t(){var a,s,n,c,i,r,o,l,j,b,m;return w.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.setState({jobItemDetailsApiStatus:G}),a=p.a.get("jwt_token"),s={headers:{Authorization:"Bearer ".concat(a)},method:"GET"},n=e.props.match,c=n.params,i=c.id,r="https://apis.ccbp.in/jobs/".concat(i),t.next=9,fetch(r,s);case 9:return o=t.sent,t.next=12,o.json();case 12:l=t.sent,o.ok?(j=l.job_details,b={companyLogoUrl:j.company_logo_url,companyWebsiteUrl:j.company_website_url,employmentType:j.employment_type,title:j.title,id:j.id,jobDescription:j.job_description,skills:j.skills.map((function(e){return{imageUrl:e.image_url,name:e.name}})),lifeAtCompany:{description:j.life_at_company.description,imageUrl:j.life_at_company.image_url},location:j.location,packagePerAnnum:j.package_per_annum,rating:j.rating},m=l.similar_jobs.map((function(e){return{companyLogoUrl:e.company_logo_url,employeeType:e.employment_type,id:e.id,location:e.location,rating:e.rating,title:e.title,jobDescription:e.job_description}})),e.setState({jobData:{job:b,similarJobs:m},jobItemDetailsApiStatus:W})):e.setState({jobItemDetailsApiStatus:B});case 14:case"end":return t.stop()}}),t)}))),e.renderJobsItemDetailsFailureView=function(){return Object(x.jsxs)("div",{className:"jobs-failure-container",children:[Object(x.jsx)("img",{className:"jobs-failure-image",alt:"failure view",src:"https://assets.ccbp.in/frontend/react-js/failure-img.png"}),Object(x.jsx)("h1",{className:"jobs-failure-title",children:"Oops! Something Went Wrong"}),Object(x.jsx)("p",{className:"jobs-failure-description",children:"We cannot seem to find the page you are looking for"}),Object(x.jsx)("button",{className:"retry-btn",type:"button",onClick:e.getJobDetails,children:"Retry"})]})},e.renderLoadingView=function(){return Object(x.jsx)("div",{className:"loader-container",testid:"loader",children:Object(x.jsx)(T.a,{testid:"loader",type:"ThreeDots",color:"#fff",height:"80",width:"80"})})},e.renderJobItemView=function(){switch(e.state.jobItemDetailsApiStatus){case W:return e.renderJobsItemDetailsSuccessView();case B:return e.renderJobsItemDetailsFailureView();case G:return e.renderLoadingView();default:return null}},e.renderSimilarJobsView=function(){var t=e.state.jobData.similarJobs;return Object(x.jsx)("ul",{className:"similar-jobs-container",children:t.map((function(e){return Object(x.jsx)(U,{similarJob:e},e.id)}))})},e.renderJobsItemDetailsSuccessView=function(){var t=e.state.jobData.job,a=t.companyLogoUrl,s=t.employmentType,n=t.location,c=t.rating,i=t.title,r=t.skills,o=t.companyWebsiteUrl,l=t.packagePerAnnum,j=t.jobDescription,b=t.lifeAtCompany,m=b.description,d=b.imageUrl;return Object(x.jsxs)("div",{className:"job-item-container-responsive",children:[Object(x.jsx)("div",{className:"job-item",children:Object(x.jsxs)("ul",{className:"job-item-responsive",children:[Object(x.jsxs)("li",{className:"job-header",children:[Object(x.jsx)("img",{src:a,alt:"job details company logo",className:"company-logo"}),Object(x.jsxs)("div",{className:"job-header-content",children:[Object(x.jsx)("h1",{className:"job-header-title",children:i}),Object(x.jsxs)("div",{className:"rating-container",children:[Object(x.jsx)(u.b,{className:"star-icon"}),Object(x.jsx)("p",{className:"job-rating",children:c})]})]})]}),Object(x.jsxs)("li",{className:"job-details",children:[Object(x.jsxs)("div",{className:"job-details-content",children:[Object(x.jsxs)("div",{className:"job-card-tag",children:[Object(x.jsx)(A.a,{className:"job-details-icon"}),Object(x.jsx)("p",{children:n})]}),Object(x.jsxs)("div",{className:"job-card-tag",children:[Object(x.jsx)(O.a,{className:"job-details-icon"}),Object(x.jsx)("p",{children:s})]})]}),Object(x.jsx)("p",{className:"job-package",children:l})]}),Object(x.jsx)("hr",{className:"job-divider"}),Object(x.jsxs)("li",{className:"title-url-container",children:[Object(x.jsx)("h1",{className:"job-item-title",children:"Description"}),Object(x.jsxs)("div",{className:"visit-link-container",children:[Object(x.jsx)("a",{rel:"icon",href:o,className:"website-visit-link",children:"Visit"}),Object(x.jsx)(h.a,{className:"external-link-icon"})]})]}),Object(x.jsx)("p",{className:"job-item-description",children:j}),Object(x.jsx)("h1",{className:"job-item-title",children:"Skills"}),Object(x.jsx)("ul",{className:"skills-container",children:r.map((function(e){return Object(x.jsxs)("li",{className:"skill",children:[Object(x.jsx)("img",{src:e.imageUrl,className:"skill-image",alt:e.name}),e.name]})}))}),Object(x.jsx)("h1",{className:"job-item-title",children:"Life at Company"}),Object(x.jsxs)("div",{className:"life-company-container",children:[Object(x.jsx)("p",{className:"job-company-description",children:m}),Object(x.jsx)("img",{src:d,className:"life-company-image",alt:"life at company img"})]})]})}),Object(x.jsx)("h1",{className:"similar-job-heading",children:"Similar Jobs"}),e.renderSimilarJobsView()]})},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.getJobDetails()}},{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g,{}),Object(x.jsx)("div",{className:"jobs-container",children:this.renderJobItemView()})]})}}]),a}(s.Component),H=z,q=(a(71),function(e){Object(b.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g,{}),Object(x.jsxs)("div",{className:"not-found-container",children:[Object(x.jsx)("img",{src:"https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png",alt:"not found",className:"not-found-image"}),Object(x.jsx)("h1",{className:"not-found-title",children:"Page Not Found"}),Object(x.jsx)("p",{className:"not-found-description",children:"we're sorry, the page you requested could not be found"})]})]})}}]),a}(s.Component)),Y=q,K=a(32),Q=function(e){return void 0===p.a.get("jwt_token")?Object(x.jsx)(o.a,{to:"/login"}):Object(x.jsx)(o.b,Object(K.a)({},e))},X=function(){return Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(o.d,{children:[Object(x.jsx)(o.b,{exact:!0,path:"/login",component:k}),Object(x.jsx)(Q,{exact:!0,path:"/",component:N}),Object(x.jsx)(Q,{exact:!0,path:"/jobs",component:E}),Object(x.jsx)(Q,{exact:!0,path:"/jobs/:id",component:H}),Object(x.jsx)(Q,{path:"/not-found",component:Y}),Object(x.jsx)(o.a,{to:"/not-found"})]})})};i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(r.a,{children:Object(x.jsx)(X,{})})}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.0112d16b.chunk.js.map