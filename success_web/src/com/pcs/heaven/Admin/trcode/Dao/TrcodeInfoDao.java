package com.pcs.heaven.Admin.trcode.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


public interface TrcodeInfoDao {
	public List<Map> getList(Map<String, Object> param);
	public HashMap getExist(Map<String, Object> param);
	public HashMap getInfo(Map<String, Object> param);
	public int insertInfoTrcode(Map<String, Object> param);
	public int updateInfoTrcode(Map<String, Object> param);
	public int deleteInfoTrcode(Map<String, Object> param);
}