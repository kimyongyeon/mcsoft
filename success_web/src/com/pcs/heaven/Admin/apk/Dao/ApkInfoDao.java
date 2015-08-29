package com.pcs.heaven.Admin.apk.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


public interface ApkInfoDao {
	public List<Map> getList(Map<String, Object> param);
	public HashMap getNextCd(Map<String, Object> param);
	public HashMap getInfo(Map<String, Object> param);
	public int insertInfoApk(Map<String, Object> param);
	public int updateInfoApk(Map<String, Object> param);
	public int deleteInfoApk(Map<String, Object> param);
	
	public int updateApkAll(Map<String, Object> param);
}