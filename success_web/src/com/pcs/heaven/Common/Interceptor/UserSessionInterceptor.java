package com.pcs.heaven.Common.Interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import com.pcs.heaven.Common.Session.UserSession;

@Controller("UserSessionInterceptor")
public class UserSessionInterceptor extends HandlerInterceptorAdapter {
	
	private final Log logger = LogFactory.getLog(getClass());
	
	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception{
		UserSession userSession = (UserSession)request.getSession().getAttribute("USER_SESSION");
		
		
		logger.debug("############################### [PRE ]SessionInceptor ##############################");
		String requestURI = request.getRequestURI();
		
		String strUrl = "";
		
		//ModelAndView mv = new ModelAndView();
		if(userSession == null) {
			strUrl = "/";
			request.getRequestDispatcher(request.getContextPath() + strUrl).forward(request, response);			
			return false;
		}  
		
		logger.debug(requestURI);
		
		return true;
	}
	
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) {
		String strRtn = "";			
		logger.debug("############################### [POST ]SessionInceptor ##############################");
			
		UserSession userSession = (UserSession)request.getSession().getAttribute("USER_SESSION");
		
		if(userSession != null) {
			modelAndView.addObject("USER_SESSION", userSession);
		    //model.addAttribute("USER_SESSION", userSession);
		}	
	}
	
	
}