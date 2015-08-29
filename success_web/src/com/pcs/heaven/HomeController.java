package com.pcs.heaven;

import java.text.DateFormat;
import java.util.Date;
import java.util.Locale;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.pcs.heaven.Common.Session.UserSession;
import com.pcs.heaven.Param.RequestParam;

/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	
        private final Log logger = LogFactory.getLog(this.getClass().getSimpleName());
	
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	
	
	@RequestMapping(value="/index.do")
	public void main(RequestParam reqMap, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception{
		String strAction = "/";
		request.getRequestDispatcher(strAction).forward(request, response);
	}
	
	@RequestMapping(value = "/")
	public void home(Locale locale, Model model, HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception{
		/*logger.info("Welcome home! The client locale is {}.", locale);
		
		Date date = new Date();
		DateFormat dateFormat = DateFormat.getDateTimeInstance(DateFormat.LONG, DateFormat.LONG, locale);		
		String formattedDate = dateFormat.format(date);		
		model.addAttribute("serverTime", formattedDate );
		UserSession userSession = (UserSession)request.getSession().getAttribute("USER_SESSION");
		*//**
		 * 위에서 설정한 페이지 루트의 페이지명 home.jsp와 매핑이 된다. 
		 * 만약 view밑에 login이란 디렉토리를 만들고 그 안에
		 * main.jsp가 있다면  login/main 이라고 설정하면 된다
		 *//*		
		
		model.addAttribute("USER_SESSION", userSession );
		
		return "Main";*/
		
		
		UserSession userSession = (UserSession)request.getSession().getAttribute("USER_SESSION");
		String strAction = "";
		
		if(userSession != null){
			logger.debug("############################### Login Success ##############################");
            request.getSession().setAttribute("USER_SESSION", userSession);            
            strAction = "/admin/main.do";
            //logger.debug("USER_ID : " + userSession.getUser_id());            
        } else {
        	strAction = "/User/UserLoginForm.do";
        	logger.debug("############################### Login Fail ##############################");
        	//strAction = "user/UserLoginForm";
        }
		
		request.getRequestDispatcher(strAction).forward(request, response);
		
	}
	
}
