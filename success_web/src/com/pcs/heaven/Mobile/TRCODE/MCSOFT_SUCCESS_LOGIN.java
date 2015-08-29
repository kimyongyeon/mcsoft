package com.pcs.heaven.Mobile.TRCODE;

import java.util.HashMap;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.ibatis.session.SqlSession;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.ObjectWriter;
import org.json.simple.JSONObject;
import org.springframework.ui.Model;

import com.pcs.heaven.Common.Session.UserSession;
import com.pcs.heaven.Common.util.DataConvert;


public class MCSOFT_SUCCESS_LOGIN {
	
	private final Log logger = LogFactory.getLog(this.getClass().getSimpleName());

	public JSONObject execute(JSONObject jsonBody, Model model, SqlSession sessionTemplate) {
	        
	        JSONObject jObj = new JSONObject();
	    
		/*Map<String, Object> map = new HashMap<String, Object>();
		map.put("USER_ID", "pcs_heaven");*/
		
	        UserSession us = new UserSession(); 
		int intRtn = 0;
		try {
			System.out.println("=============================");
			System.out.println(jsonBody.toString());
			System.out.println("=============================");
		        HashMap<String,Object> map = new ObjectMapper().readValue(jsonBody.toString(), HashMap.class);
		        us = sessionTemplate.selectOne("UserInfo.getMobileUserInfo", map);
		        
		        // 로그인 로그 추가
		        if(us != null && us.getUser_id() != null && !us.getUser_id().equals("")) {
		        	HashMap<String, Object> logMap = new HashMap<String, Object>();
		        	logMap.put("user_id", us.getUser_id());
		        	logMap.put("user_section", us.getUser_section());
		        	sessionTemplate.selectOne("UserInfo.insertIntoTbUserLoginInfo", map);
		        }
		        
			/*jObj.put(UseCodes.TR_STATUS_CODE_NAME, UseCodes.TR_STATUS_CODE_SUCCESS);
			jObj.put(UseCodes.TR_STATUS_MESSAGE_NAME, UseCodes.TR_STATUS_MESSAGE_SUCCESS);*/
		} catch(Exception e) {
			System.out.println(e.toString());
			System.out.println(e.getMessage());
			e.printStackTrace();
			/*jObj.put(UseCodes.TR_STATUS_CODE_NAME, UseCodes.TR_STATUS_CODE_FAIL);
			jObj.put(UseCodes.TR_STATUS_MESSAGE_NAME, UseCodes.TR_STATUS_MESSAGE_FAIL);*/
			
		}
		
		//jObj.put(UseCodes.TR_CODE_NAME, this.getClass().getSimpleName());
		//jObj.put(UseCodes.RETRUN_NAME_DATA, intRtn);
		
		jObj = DataConvert.convertObjectToJsonObject(us);
		
		return jObj;		
	}
}