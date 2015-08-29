package com.pcs.heaven.example;

import java.io.ByteArrayOutputStream;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.json.simple.JSONObject;
import org.json.simple.JSONValue;

public class ClientTest {
	
	
	public void sendData() {
		
		String strInterFace = "MCSOFT_SUCCESS_LOGIN";
		String strUrl = "http://localhost:8081/MCSOFT_MOBILE";
		
		String strRtn = "";		
		
		HttpURLConnection   conn    = null;		 
		OutputStream          os   = null;
		InputStream           is   = null;
		ByteArrayOutputStream baos = null;
		
		try {
			
			// 보내는 부분
			URL url = new URL(strUrl);
			
			conn = (HttpURLConnection)url.openConnection();
			conn.setConnectTimeout(10000);
			conn.setReadTimeout(10000);
			conn.setRequestMethod("POST");
			conn.setRequestProperty("Cache-Control", "no-cache");
			conn.setRequestProperty("Content-Type", "application/json");
			conn.setRequestProperty("Accept", "application/json");
			conn.setDoOutput(true);
			conn.setDoInput(true);
			
			os = conn.getOutputStream();
			os.write(getJsonData(strInterFace).getBytes());
			os.flush();
			
			System.out.println("서버에 보낸다~~~~~");
			System.out.println(getJsonData(strInterFace));
			
			// 응답 받는부분
			int intResponseCode = conn.getResponseCode();
			
			System.out.println(intResponseCode);
			
			if(intResponseCode == HttpURLConnection.HTTP_OK) {
				 
			    is = conn.getInputStream();
			    baos = new ByteArrayOutputStream();
			    byte[] byteBuffer = new byte[1024];
			    byte[] byteData = null;
			    int nLength = 0;
			    while((nLength = is.read(byteBuffer, 0, byteBuffer.length)) != -1) {
			        baos.write(byteBuffer, 0, nLength);
			    }
			    byteData = baos.toByteArray();
			     
			    strRtn = new String(byteData);
			    Object oj = JSONValue.parse(strRtn);
			    
			    //// jdk 1.5 version
			    JSONObject jo = (JSONObject)oj;
			    
			    System.out.println(jo.toJSONString());
			    
			}
			
			System.out.println("============= >>>> " + System.currentTimeMillis());
			os.close();			
		} catch(Exception e) {
			if (os != null) try { os.close(); } catch (Exception x) {}
	        if (is != null) try { is.close(); } catch (Exception x) {}
	        e.printStackTrace();
		}
	}
	
	public String getJsonData(String strInterFace) {
		JSONObject jTmp = new JSONObject();
		
		jTmp.put("TRCODE", strInterFace);
		jTmp.put("user_id", "mcsoft");
		jTmp.put("user_pw", "mcsoft1234");
		jTmp.put("user_section", "999");
				
		return jTmp.toJSONString();
	}
	
	public static void  main(String args[]) {
		ClientTest ct = new ClientTest();
		
				
		ct.sendData();
	}
}