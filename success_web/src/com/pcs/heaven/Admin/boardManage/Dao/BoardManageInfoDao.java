package com.pcs.heaven.Admin.boardManage.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


public interface BoardManageInfoDao {
	public List<Map> getList(Map<String, Object> param);	
	public HashMap getInfo(Map<String, Object> param);
	public HashMap getBoardManageNextCd(Map<String, Object> param);
	public int insertInfoBoardManage(Map<String, Object> param);
	public int updateInfoBoardManage(Map<String, Object> param);
	public int deleteInfoBoardManage(Map<String, Object> param);
	
	public List<Map> getBoardMenuList(Map<String, Object> param);
	
	
	public int insertInfoCalendar(Map<String, Object> param);
	public int deleteInfoCalendar(Map<String, Object> param);
}