package com.pcs.heaven.UserInfo;

import java.util.HashMap;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.pcs.heaven.Common.Session.UserSession;
import com.pcs.heaven.Param.RequestParam;
import com.pcs.heaven.UserInfo.Dao.UserInfoDaoImpl;

@Controller
public class UserInfoController {
	
	private final Log logger = LogFactory.getLog(UserInfoController.class);
	
	@Resource(name="userInfoDaoImpl")
	private UserInfoDaoImpl userInfoDaoImpl;
	
	@RequestMapping(value="/User/UserLogin.do", method = RequestMethod.POST)
	public void main(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception{
				
		System.out.println(reqMap.getParameter());
		
		logger.debug("ClassInfo : " + this.getClass().getSimpleName());
		//ModelAndView mav = new ModelAndView("LOGIN");
		ModelAndView mav = new ModelAndView();
		String strAction = "Main";
				
		reqMap.set("user_section", "999");		
		UserSession userSession = this.userInfoDaoImpl.getLoginUserInfo(reqMap.getParameter());
		
		//model.addAttribute("USER_SESSION", userSession );
		
		if(userSession != null){
			logger.debug("############################### Login Success ##############################");
                        request.getSession().setAttribute("USER_SESSION", userSession);      
                        this.userInfoDaoImpl.insertIntoTbUserLoginInfo(reqMap.getParameter());
                        strAction = "/admin/main.do";
                    //logger.debug("USER_ID : " + userSession.getUser_id());            
                } else {
                	strAction = "/";
                	logger.debug("############################### Login Fail ##############################");
                	//strAction = "user/UserLoginForm";
                }
		
		request.getRequestDispatcher(strAction).forward(request, response);
		
	}
	
	/**
	 * 사용하지 않는 메소드입니다.
	 * @param reqMap
	 * @param model
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value="/User/UserLoginForm.do")
	public String UserLoginForm(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response) {
		
		logger.debug("ClassInfo : " + this.getClass().getSimpleName());
		ModelAndView mav = new ModelAndView();
		String strAction = "";
		
                logger.debug("############################### /User/UserLoginForm.do ##############################");
                strAction = "user/UserLoginForm";
                
        		
                mav.setViewName(strAction);
		return strAction;
	}
	
	@RequestMapping(value="/User/UserLogout.do")
	public void UserLogout(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response) throws Exception{
		
		logger.debug("ClassInfo : " + this.getClass().getSimpleName());
		ModelAndView mav = new ModelAndView();
		String strAction = "";
		
                logger.debug("############################### /User/UserLogout.do ##############################");
                HttpSession session = request.getSession();
                session.invalidate();
        
                strAction = "/index.do";
                request.getRequestDispatcher(strAction).forward(request, response);
	}
}