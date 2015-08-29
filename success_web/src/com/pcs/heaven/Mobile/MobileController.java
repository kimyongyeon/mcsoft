package com.pcs.heaven.Mobile;

import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.session.SqlSession;
import org.json.simple.JSONObject;
import org.json.simple.JSONValue;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pcs.heaven.Param.RequestParam;

/**
 * Handles requests for the application home page.
 */
@Controller

public class MobileController {
	
	private static final Logger logger = LoggerFactory.getLogger(MobileController.class);
		
	@Resource(name = "sqlSessionTempleteForMysql")
	private SqlSession sessionTemplate;
	/**
	 * Simply selects the home view to render by returning its name.
	 */
	
	@RequestMapping(value = "/MCSOFT_MOBILE")
	public @ResponseBody JSONObject main(Locale locale, Model model, RequestParam reqMap, HttpServletRequest request, HttpServletResponse response, @RequestBody JSONObject jsonBody) {
		
		System.out.println("#################################### MobileController ####################################");		
		logger.info("Welcome PCS_MOBILE! The client locale is {}.", locale);		
		
		HashMap<String, Object> hm = new HashMap<String, Object>();		
		JSONObject jObj = new JSONObject();
		
		String strExecuteMethodName = "execute";
		
		try {
			String strTrCode =(String) jsonBody.get("TRCODE");				
			HashMap<String, Object> trMap = new HashMap<String, Object>();
			trMap.put("trcode", strTrCode);
					
			HashMap<String, Object> existMap = sessionTemplate.selectOne("TrcodeInfo.getInfo", trMap);
			
			if(existMap != null && existMap.size() > 0) {
				
				if(String.valueOf(existMap.get("dummy_yn")).equals("Y")) {
					jObj = makeDummyData(String.valueOf(existMap.get("dummy_data")));
				} else {
					Class invoKeClass = Class.forName("com.pcs.heaven.Mobile.TRCODE."+strTrCode);
					Object myclassInstance = invoKeClass.newInstance();
					Method[] methods = invoKeClass.getMethods();
					
					Class[] cParam = new Class[]{JSONObject.class, Model.class, SqlSession.class};
					Method method = invoKeClass.getMethod(strExecuteMethodName, cParam);
					
					Object[] executeParams = new Object[] { jsonBody, model, sessionTemplate};
					jObj = (JSONObject)method.invoke(myclassInstance, executeParams);
				}
				
				jObj = this.makeMessage(jObj, strTrCode);
				jObj.put("result_status", "t");
	            jObj.put("result_error", "f");
	            
			} else {
				jObj.put("result_status", "f");
	            jObj.put("result_error", "t");
				jObj.put("result_message", "등록되지 않은 TR_CODE 입니다. 관리자에게 문의하세요.");
				jObj.put("result_data", null);
			}
			
			
                        
            /**
            * header info setting
            */
            response.setHeader("TR_CODE", strTrCode);
		} catch(ClassNotFoundException e) {
			jObj.put("result_status", "f");
			jObj.put("result_error", "t");
			jObj.put("result_message", "TR_CODE Not Found!! [요청한 작업을 수행할 수 없습니다. TR_CODE 를 확인하세요]");
			jObj.put("result_data", null);
			e.printStackTrace();
		} catch(NoSuchMethodException e) {
		    jObj.put("result_status", "f");
            jObj.put("result_error", "t");
			jObj.put("result_message", "TR_CODE Not Found!! [요청한 작업을 수행할 수 없습니다. 실행가능한 Method 를 찾을 수 없습니다.]");
			jObj.put("result_data", null);
			e.printStackTrace();
		} catch(Exception e) {
		    jObj.put("result_status", "f");
            jObj.put("result_error", "t");
			jObj.put("result_message", "Class Execute Error!!");
			jObj.put("result_data", null);
			e.printStackTrace();
		}
		
		return jObj;
	}	
	
	private JSONObject makeMessage(JSONObject jObj, String strTrcode) {
		
		JSONObject rtnJObj = new JSONObject();
		rtnJObj.put("result_data", jObj);
		
		return rtnJObj;
	}
	
	private JSONObject makeDummyData(String strDummyData) {
		
		JSONObject rtnJObj = new JSONObject();
		if(!"".equals(strDummyData)) {
			Object oj = JSONValue.parse(strDummyData);	    
			rtnJObj = (JSONObject)oj;
		}
		
		return rtnJObj;
	}
}
