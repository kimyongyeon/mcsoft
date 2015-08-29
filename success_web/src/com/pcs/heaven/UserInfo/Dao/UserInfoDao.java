package com.pcs.heaven.UserInfo.Dao;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;
import com.pcs.heaven.Common.Session.UserSession;


public interface UserInfoDao {
	public int getLoginUserInfoExist(Map<String, Object> param);
	
	public UserSession getLoginUserInfo(Map<String, Object> param);
	
	public int insertIntoTbUserLoginInfo(Map<String, Object> param);
	
	public int insertIntoTbUserInfo(Map<String, Object> param);
}