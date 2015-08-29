package com.pcs.heaven.Admin.menu.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


public interface MenuInfoDao {
	public List<Map> getMenuMainList(Map<String, Object> param);
	public HashMap getMenuMainNextCd(Map<String, Object> param);
	public HashMap getMenuMainInfo(Map<String, Object> param);
	public int insertInfoMenuMain(Map<String, Object> param);
	public int updateInfoMenuMain(Map<String, Object> param);
	public int deleteInfoMenuMain(Map<String, Object> param);
}