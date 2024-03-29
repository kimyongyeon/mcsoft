package com.pcs.heaven.Common.util;

import java.lang.reflect.Array;
import java.util.List;
import java.util.Map;
 
public class MyBatisUtil {
	
    public static boolean isEmpty(Object obj){
    	
    	System.out.println("============== isEmpty start ===================");
    	
        if( obj instanceof String ) return obj==null || "".equals(obj.toString().trim());
        else if( obj instanceof List ) return obj==null || ((List)obj).isEmpty();
        else if( obj instanceof Map ) return obj==null || ((Map)obj).isEmpty();
        else if( obj instanceof Object[] ) return obj==null || Array.getLength(obj)==0;
        else return obj==null;
    }
     
    public static boolean isNotEmpty(String s){
        return !isEmpty(s);
    }
    
    public static boolean isEqual(String strOrg, String strTar) {
    	    	
    	if(strOrg.equals(strTar)) {
    		return true;
    	} else {
    		return false;
    	}
    }
}