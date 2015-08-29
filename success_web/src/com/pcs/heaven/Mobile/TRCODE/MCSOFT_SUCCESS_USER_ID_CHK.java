package com.pcs.heaven.Mobile.TRCODE;

import java.util.HashMap;
import java.util.Map;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.ibatis.session.SqlSession;
import org.codehaus.jackson.map.ObjectMapper;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.ui.Model;

import com.pcs.heaven.Common.codes.UseCodes;


public class MCSOFT_SUCCESS_USER_ID_CHK {
	
	private final Log logger = LogFactory.getLog(this.getClass().getSimpleName());

	public JSONObject execute(JSONObject jsonBody, Model model, SqlSession sessionTemplate) {
	        
	        JSONObject jObj = new JSONObject();
	    
		/*Map<String, Object> map = new HashMap<String, Object>();
		map.put("USER_ID", "pcs_heaven");*/
		
		int intRtn = 0;
		try {
		    HashMap<String,Object> map = new ObjectMapper().readValue(jsonBody.toString(), HashMap.class);
			intRtn = sessionTemplate.selectOne("UserInfo.getUserIdCheck", map);
			
			jObj.put("id_cnt", intRtn);
			/*jObj.put(UseCodes.TR_STATUS_CODE_NAME, UseCodes.TR_STATUS_CODE_SUCCESS);
			jObj.put(UseCodes.TR_STATUS_MESSAGE_NAME, UseCodes.TR_STATUS_MESSAGE_SUCCESS);*/
		} catch(Exception e) {
			System.out.println(e.toString());
			System.out.println(e.getMessage());
			e.printStackTrace();
			/*
			intRtn = 9;
			jObj.put(UseCodes.TR_STATUS_CODE_NAME, UseCodes.TR_STATUS_CODE_FAIL);
			jObj.put(UseCodes.TR_STATUS_MESSAGE_NAME, UseCodes.TR_STATUS_MESSAGE_FAIL);
			*/
		}
		
		/*jObj.put(UseCodes.TR_CODE_NAME, this.getClass().getSimpleName());
		jObj.put(UseCodes.RETRUN_NAME_DATA, intRtn);*/
		
		return jObj;		
	}
}