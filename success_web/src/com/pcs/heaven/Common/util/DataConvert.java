package com.pcs.heaven.Common.util;

import java.lang.reflect.Field;
import java.lang.reflect.InvocationTargetException;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.ObjectWriter;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;

public class DataConvert  {
    
    /**
     * object to map (vo to map)
     * @param obj
     * @return
     */
    public static Map converObjectToMap(Object obj){
        try {
            //Field[] fields = obj.getClass().getFields(); //private field는 나오지 않음.
            Field[] fields = obj.getClass().getDeclaredFields();
            Map resultMap = new HashMap();
            for(int i=0; i<=fields.length-1;i++){
                fields[i].setAccessible(true);
                resultMap.put(fields[i].getName(), fields[i].get(obj));
            }
            return resultMap;
        } catch (IllegalArgumentException e) {
            e.printStackTrace();
        } catch (IllegalAccessException e) {
            e.printStackTrace();
        }
        
        return null;
    }
    
    
    /**
     * map to object (map to vo)
     * @param map
     * @param objClass
     * @return
     */
    public static Object convertMapToObject(Map map, Object objClass){
        String keyAttribute = null;
        String setMethodString = "set";
        String methodString = null;
        Iterator itr = map.keySet().iterator();
        while(itr.hasNext()){
            keyAttribute = (String) itr.next();
            methodString = setMethodString+keyAttribute.substring(0,1).toUpperCase()+keyAttribute.substring(1);
            try {
                Method[] methods = objClass.getClass().getDeclaredMethods();
                for(int i=0;i<=methods.length-1;i++){
                    if(methodString.equals(methods[i].getName())){                        
                        methods[i].invoke(objClass, map.get(keyAttribute));
                    }
                }
            } catch (SecurityException e) {
                e.printStackTrace();
            } catch (IllegalAccessException e) {
                e.printStackTrace();
            } catch (IllegalArgumentException e) {
                e.printStackTrace();
            } catch (InvocationTargetException e) {
                e.printStackTrace();
            }
        }
        return objClass;
    }
    
    /**
     * vo to jsonString
     * @param objClass
     * @return
     */
    public static String convertObjectToJsonString(Object objClass) {
        String strJsonRtn = "";
        ObjectWriter ow = new ObjectMapper().writer().withDefaultPrettyPrinter();
        String jsonStr = "";
        
        try {
            strJsonRtn = ow.writeValueAsString(objClass);
        } catch (Exception e) {
            strJsonRtn = "";
        }
        
        return strJsonRtn;
    }
    
    
    /**
     * vo to json object
     * @param objClass
     * @return
     */
    public static JSONObject convertObjectToJsonObject(Object objClass) {
        String strJsonRtn = "";
        JSONObject json = new JSONObject();
        try {
            json = (JSONObject)new JSONParser().parse(DataConvert.convertObjectToJsonString(objClass));
        } catch (Exception e) {
            e.printStackTrace();
        }
        
        return json;
    }
}