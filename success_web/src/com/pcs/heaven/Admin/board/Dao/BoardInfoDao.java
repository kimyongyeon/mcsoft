package com.pcs.heaven.Admin.board.Dao;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


public interface BoardInfoDao {
	public List<Map> getList(Map<String, Object> param);
	public HashMap getCount(Map<String, Object> param);
	public HashMap getNext(Map<String, Object> param);
	public HashMap getInfo(Map<String, Object> param);
	public int insertInfoBoard(Map<String, Object> param);
	public int updateInfoBoard(Map<String, Object> param);
	public int deleteInfoBoard(Map<String, Object> param);
	
	/**
	 * file start
	 */
	public HashMap getFileNext(Map<String, Object> param);	
	public int insertInfoBoardFile(Map<String, Object> param);	
	public List<Map> getFileList(Map<String, Object> param);
	public HashMap getFileListOne(Map<String, Object> param);	
	public int deleteInfoBoardFile(Map<String, Object> param);
}