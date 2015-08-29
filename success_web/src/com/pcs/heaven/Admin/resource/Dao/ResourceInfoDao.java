package com.pcs.heaven.Admin.resource.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


public interface ResourceInfoDao {
	public List<Map> getList(Map<String, Object> param);
	public HashMap getNextCd(Map<String, Object> param);
	public HashMap getInfo(Map<String, Object> param);
	public int insertInfoResource(Map<String, Object> param);
	public int updateInfoResource(Map<String, Object> param);
	public int deleteInfoResource(Map<String, Object> param);
}