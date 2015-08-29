package com.pcs.heaven.Common.Session;

import java.io.Serializable;

public class UserSession implements Serializable {
	
	private static final long serialVersionUID = -5397960897800266071L; 
	
	private String user_section;
	private String user_id;
	private String user_pw;
	private String user_nm;
	private String user_zipcode;
	private String user_addr;
	private String user_addr_ex;
	private String user_hp;
	private String user_tel;
	private String user_office;
	private String user_office_nm;
	private String user_sub_office;
	private String user_lastlogin;
	private String user_imei;
	private String user_registernum;
	
	public UserSession() {
		
	}

    public String getUser_section() {
        return user_section;
    }

    public void setUser_section(String user_section) {
        this.user_section = user_section;
    }

    public String getUser_id() {
        return user_id;
    }

    public void setUser_id(String user_id) {
        this.user_id = user_id;
    }

    public String getUser_pw() {
        return user_pw;
    }

    public void setUser_pw(String user_pw) {
        this.user_pw = user_pw;
    }

    public String getUser_nm() {
        return user_nm;
    }

    public void setUser_nm(String user_nm) {
        this.user_nm = user_nm;
    }

    public String getUser_zipcode() {
        return user_zipcode;
    }

    public void setUser_zipcode(String user_zipcode) {
        this.user_zipcode = user_zipcode;
    }

    public String getUser_addr() {
        return user_addr;
    }

    public void setUser_addr(String user_addr) {
        this.user_addr = user_addr;
    }

    public String getUser_addr_ex() {
        return user_addr_ex;
    }

    public void setUser_addr_ex(String user_addr_ex) {
        this.user_addr_ex = user_addr_ex;
    }

    public String getUser_hp() {
        return user_hp;
    }

    public void setUser_hp(String user_hp) {
        this.user_hp = user_hp;
    }

    public String getUser_tel() {
        return user_tel;
    }

    public void setUser_tel(String user_tel) {
        this.user_tel = user_tel;
    }

    public String getUser_office() {
        return user_office;
    }

    public void setUser_office(String user_office) {
        this.user_office = user_office;
    }

    public String getUser_sub_office() {
        return user_sub_office;
    }

    public void setUser_sub_office(String user_sub_office) {
        this.user_sub_office = user_sub_office;
    }

    public String getUser_lastlogin() {
        return user_lastlogin;
    }

    public void setUser_lastlogin(String user_lastlogin) {
        this.user_lastlogin = user_lastlogin;
    }

    public String getUser_imei() {
        return user_imei;
    }

    public void setUser_imei(String user_imei) {
        this.user_imei = user_imei;
    }

    public String getUser_registernum() {
        return user_registernum;
    }

    public void setUser_registernum(String user_registernum) {
        this.user_registernum = user_registernum;
    }

	public String getUser_office_nm() {
		return user_office_nm;
	}

	public void setUser_office_nm(String user_office_nm) {
		this.user_office_nm = user_office_nm;
	}

    
}