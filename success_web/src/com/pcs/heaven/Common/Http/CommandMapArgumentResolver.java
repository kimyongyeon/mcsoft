package com.pcs.heaven.Common.Http;

import java.util.Iterator;
import java.util.LinkedHashMap;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.core.MethodParameter;
import org.springframework.web.bind.support.WebDataBinderFactory;
import org.springframework.web.context.request.NativeWebRequest;
import org.springframework.web.method.support.HandlerMethodArgumentResolver;
import org.springframework.web.method.support.ModelAndViewContainer;

import com.pcs.heaven.Param.RequestParam;

public class CommandMapArgumentResolver implements HandlerMethodArgumentResolver {
 
	private final Log logger = LogFactory.getLog(getClass());
	
	public boolean supportsParameter(MethodParameter parameter) 
    { 
            // TODO Auto-generated method stub 
            return true; 
    } 
	
	/**
	 * Controller의 메소드 argument에 commandMap이라는 Map 객체가 있다면 
	 * HTTP request 객체에 있는 파라미터이름과 값을 commandMap에 담아 returng한다.
	 * 배열인 파라미터 값은 배열로 Map에 저장한다.
	 */
	public Object resolveArgument(MethodParameter parameter, ModelAndViewContainer mavContainer, NativeWebRequest webRequest, WebDataBinderFactory binderFactory) throws Exception {
 		
		Class<?> clazz = parameter.getParameterType();
		String paramName = parameter.getParameterName();
 
		logger.debug("====================================================================================================");
		
		if(parameter.getParameterType().equals(RequestParam.class)) {
			RequestParam pm = new RequestParam();
			pm.setParameter(new LinkedHashMap());
			Iterator iterator = webRequest.getParameterNames();
			while(iterator.hasNext()) {
				String key = (String)iterator.next();
				String value = webRequest.getParameter(key);
				pm.getParameter().put(key, value);
				
				logger.debug(key + " : " + value);
			}
			return pm;
		}
		logger.debug("====================================================================================================");
		
		return null;
		
	}
}