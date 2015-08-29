package com.pcs.heaven.Param;

import java.util.HashMap;
import java.util.Map;

public class RequestParam {

	private Map<String, Object> parameter = null;

	public Map getParameter() {
		return parameter;
	}

	public void setParameter(Map<String, Object> parameter) {
		this.parameter = parameter;
	} 
	
	public void set(String strKey, String strValue) {	    
	    this.parameter.put(strKey, strValue);
	}
	
	public void set(String strKey, int intValue) {	    
	    this.parameter.put(strKey, intValue);
	}
	
public String get(String strKey) {
	    String strRtn = "";
	    
	    if(this.parameter.get(strKey) == null) {
	    	strRtn = "";
	    } else {
	    	strRtn = String.valueOf(this.parameter.get(strKey));
	    }
	    
	    return strRtn;
	}
	
}
