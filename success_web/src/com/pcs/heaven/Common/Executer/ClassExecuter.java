package com.pcs.heaven.Common.Executer;

public class ClassExecuter {
	private static ClassExecuter classExecuter = new ClassExecuter();
	
	private ClassExecuter() {
		
	}
	
	public static ClassExecuter getInstance() {
		return classExecuter;
	}
	
	public String getPackage(String strTrcode) throws Exception{
		
		String strPackage = "";
		
		if(strTrcode.equals("")) {
		}
		
		return strPackage;
	}
}